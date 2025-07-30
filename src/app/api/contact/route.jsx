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
    } = await req.json();

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
                values: [[name, email, phone, type, msg]],
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

        // Build dynamic message (skip undefined fields)
        const emailBody = [
            name && `Name: ${name}`,
            email && `Email: ${email}`,
            phone && `Phone: ${phone}`,
            type && `Services Type: ${type}`,
            msg && `Message: ${msg}`
        ].filter(Boolean).join('\n');

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: `${process.env.EMAIL_USER}`,
            subject: "No Ho Flooring",
            text: emailBody,
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
