import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const runtime = "nodejs";

export async function POST(req) {
    try {
        // --- Validate env first ---
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error("Stripe secret key missing");
        }
        if (!process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY || !process.env.PAYMENT_SHEET_ID) {
            throw new Error("Google Sheets env vars missing");
        }
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials missing");
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2023-10-16",
        });

        const formData = await req.json();

        if (!formData.amount || formData.amount <= 0) {
            throw new Error("Invalid amount");
        }

        // 1️⃣ Stripe Checkout
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: { name: formData.paying || formData.servicestype || "Service Payment" },
                        unit_amount: Math.round(Number(formData.amount) * 100),
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
        });

        // 2️⃣ Google Sheets
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.PAYMENT_SHEET_ID,
            range: "Sheet1!A1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[
                    formData.paying || "",
                    formData.amount || "",
                    formData.about || "",
                    formData.servicestype || "",
                    formData.fname || "",
                    formData.lname || "",
                    formData.email || "",
                    formData.phone || "",
                    formData.address || "",
                    formData.secondaryemail || "",
                    formData.altemail || "",
                ]],
            },
        });

        // 3️⃣ Email content
        const emailRows = Object.entries(formData)
            .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${v || ""}</td></tr>`)
            .join("");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"NoHo Flooring" <${process.env.EMAIL_USER}>`,
            to: formData.email,
            subject: "Payment Received",
            html: `<h3>Thank you ${formData.fname || ""}</h3><table border="1">${emailRows}</table>`,
        });

        await transporter.sendMail({
            from: `"NoHo Flooring" <${process.env.EMAIL_USER}>`,
            to: "dev.az@inhousedept.com",
            subject: "New Payment Submission",
            html: `<h3>New Payment</h3><table border="1">${emailRows}</table>`,
        });

        return NextResponse.json({ url: session.url });

    } catch (err) {
        console.error("Payment Error:", err);
        return NextResponse.json(
            { error: err.message || "Payment processing failed" },
            { status: 500 }
        );
    }
}
