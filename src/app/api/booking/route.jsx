import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();

        const {
            name,
            email,
            phone,
            fulladdress,
            specialrequests,
            altemail,
            secondaryemail,
            notes,
            service,
            date,
            time,
        } = body;

        // -------------------------
        // 1️⃣ Google Sheets Auth
        // -------------------------
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // -------------------------
        // 2️⃣ Get current last row for SNo
        // -------------------------
        const getRows = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.BOOKING_SHEET_ID,
            range: 'Sheet1!A:A', // SNo column
        });

        const lastRow = getRows.data.values ? getRows.data.values.length : 1;
        const serialNumber = lastRow; // auto-increment SNo

        // -------------------------
        // 3️⃣ Append new booking row
        // -------------------------
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.BOOKING_SHEET_ID,
            range: 'Sheet1!A:L',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[
                    serialNumber, // SNo
                    name,
                    email,
                    phone,
                    fulladdress,
                    specialrequests,
                    altemail,
                    secondaryemail,
                    notes,
                    service,
                    date,
                    time,
                ]]
            }
        });

        // -------------------------
        // 4️⃣ Setup Email
        // -------------------------
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // -------------------------
        // 5️⃣ Email to Owner
        // -------------------------
        await transporter.sendMail({
            from: `"Booking" <${process.env.EMAIL_USER}>`,
            to: "dev.az@inhousedept.com",
            subject: `New Booking Received (#${serialNumber})`,
            html: `
        <h3>New Booking Received</h3>
        <table border="1" cellpadding="8" cellspacing="0">
          <tr><td><b>SNo</b></td><td>${serialNumber}</td></tr>
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Full Address</b></td><td>${fulladdress}</td></tr>
          <tr><td><b>Special Requests</b></td><td>${specialrequests}</td></tr>
          <tr><td><b>Alt Email</b></td><td>${altemail}</td></tr>
          <tr><td><b>Secondary Email</b></td><td>${secondaryemail}</td></tr>
          <tr><td><b>Notes</b></td><td>${notes}</td></tr>
          <tr><td><b>Service</b></td><td>${service}</td></tr>
          <tr><td><b>Date</b></td><td>${date}</td></tr>
          <tr><td><b>Time</b></td><td>${time}</td></tr>
        </table>
      `
        });

        // -------------------------
        // 6️⃣ Thank You Email to Client
        // -------------------------
        await transporter.sendMail({
            from: `"Noho Flooring" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for your booking!',
            html: `
        <h2>Thank you ${name}!</h2>
        <p>Your booking has been received successfully.</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p>We will contact you shortly.</p>
      `
        });

        // -------------------------
        // 7️⃣ Success Response
        // -------------------------
        return NextResponse.json({ success: true, serialNumber });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
