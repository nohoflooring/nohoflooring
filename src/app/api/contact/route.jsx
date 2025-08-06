import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const data = await req.json();

    // Map fields exactly in the order your sheet has
    const fields = [
        "name", "email", "phone", "type", "msg", "privacycheck",
        "quality", "szie", "extra", "installation"
    ];

    // Trim data
    const formData = {};
    fields.forEach(field => {
        formData[field] = data[field]?.toString().trim() || '';
    });

    try {
        // Authenticate with Google Sheets API
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append to Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[
                    formData.name,
                    formData.email,
                    formData.phone,
                    formData.type,
                    formData.msg,
                    formData.privacycheck,
                    formData.quality,
                    formData.szie,
                    formData.extra,
                    formData.installation
                ]]
            },
        });

        // Prepare HTML table rows for email (only filled fields)
        const emailRows = Object.entries(formData)
            .filter(([_, value]) => value)
            .map(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                return `<tr><td><strong>${label}</strong></td><td>${value}</td></tr>`;
            }).join("");

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: `${process.env.EMAIL_USER}, seoproduction@inhousedept.com, nohoflooring@gmail.com`,
            subject: "No Ho Flooring - New Contact Form Submission",
            html: `
                <h2>New Contact Submission</h2>
                <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
                    ${emailRows}
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
