import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();

        // Google Auth
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Append to Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.CONTACT_SHEET_ID,
            range: "Sheet1!A1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[
                    data.fname,
                    data.lname,
                    data.email,
                    data.phone,
                    data.address,
                    data.specialrequests,
                    data.servicestype,
                    data.altemail,
                    data.secondaryemail,
                    data.msg,
                    new Date().toLocaleString()
                ]]
            }
        });

        // Mail Transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to Client
        await transporter.sendMail({
            from: `"Noho Flooring" <${process.env.EMAIL_USER}>`,
            to: data.email,
            subject: 'Thank you for your booking!',
            subject: "Thanks for contacting us!",
            html: `<p>Hi ${data.fname},</p>
             <p>Thanks for contacting Noho Flooring. We will contact you shortly.</p>`
        });

        // Email to Owner
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: "dev.az@inhousedept.com",
            subject: 'New Contact Lead Received',
            html: `
  <h3>New Contact Lead</h3>
  <table border="1" cellpadding="8" cellspacing="0">
    <tr><td><b>First Name</b></td><td>${data.fname}</td></tr>
    <tr><td><b>Last Name</b></td><td>${data.lname}</td></tr>
    <tr><td><b>Email</b></td><td>${data.email}</td></tr>
    <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
    <tr><td><b>Address</b></td><td>${data.address}</td></tr>
    <tr><td><b>Special Requests</b></td><td>${data.specialrequests}</td></tr>
    <tr><td><b>Service</b></td><td>${data.servicestype}</td></tr>
    <tr><td><b>Alt Email</b></td><td>${data.altemail}</td></tr>
    <tr><td><b>Secondary Email</b></td><td>${data.secondaryemail}</td></tr>
    <tr><td><b>Message</b></td><td>${data.msg}</td></tr>
  </table>
  `
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
