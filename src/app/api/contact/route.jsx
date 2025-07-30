import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const {
        name,
        email,
        phone,
        type,
        msg,
        checked,
    } = await req.json();
    const isChecked = checked ? "Yes" : "No";
    try {
        // Authenticate with Google Sheets API
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append data to Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[name, email, phone, type, msg, isChecked]],
            },
        });

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "No Ho Flooring - New Contact Form Submission",
            html: `
        <h2>New Contact Submission</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
            ${name ? `<tr><td><strong>Name</strong></td><td>${name}</td></tr>` : ''}
            ${email ? `<tr><td><strong>Email</strong></td><td>${email}</td></tr>` : ''}
            ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ''}
            ${type ? `<tr><td><strong>Service Type</strong></td><td>${type}</td></tr>` : ''}
            ${msg ? `<tr><td><strong>Message</strong></td><td>${msg}</td></tr>` : ''}
            ${checked ? `<tr><td><strong>Privacy Policy</strong></td><td>${isChecked}</td></tr>` : ''}
        </table>
    `,
        });


        return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('❌ Submit error:', error);
        return NextResponse.json({
            message: 'Server error',
            error: error.message,
        }, { status: 500 });
    }
}
