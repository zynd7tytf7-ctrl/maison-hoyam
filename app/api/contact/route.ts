export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();
    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const phone = data?.phone ?? '';
    const subject = data?.subject ?? '';
    const message = data?.message ?? '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: { name, email, phone: phone || null, subject, message },
    });

    // Send email notification
    try {
      const appUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001';
      let appName = 'Maison Hoyam';
      try { appName = appUrl ? new URL(appUrl).hostname?.split?.('.')?.[0] ?? 'Maison Hoyam' : 'Maison Hoyam'; } catch { /* ignore */ }

      // HTML-escape user-provided values to prevent injection
      const esc = (s: string) =>
        s.replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#039;');

      const htmlBody = `
        <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; background: #FDF8F4;">
          <div style="background: linear-gradient(135deg, #2C1810, #5C4A2F); padding: 30px; text-align: center;">
            <h1 style="color: #D4A574; margin: 0; font-size: 24px; letter-spacing: 3px;">MAISON HOYAM</h1>
            <p style="color: #E8D5C4; margin: 8px 0 0; font-size: 12px; letter-spacing: 2px;">NEW CONTACT INQUIRY</p>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #B8956A; font-size: 13px; font-weight: bold;">Name</td><td style="padding: 10px 0; color: #2C1810;">${esc(name)}</td></tr>
              <tr><td style="padding: 10px 0; color: #B8956A; font-size: 13px; font-weight: bold;">Email</td><td style="padding: 10px 0;"><a href="mailto:${esc(email)}" style="color: #2C1810;">${esc(email)}</a></td></tr>
              ${phone ? `<tr><td style="padding: 10px 0; color: #B8956A; font-size: 13px; font-weight: bold;">Phone</td><td style="padding: 10px 0; color: #2C1810;">${esc(phone)}</td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #B8956A; font-size: 13px; font-weight: bold;">Subject</td><td style="padding: 10px 0; color: #2C1810;">${esc(subject)}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background: white; border-left: 4px solid #D4A574; border-radius: 4px;">
              <p style="margin: 0 0 8px; color: #B8956A; font-size: 12px; font-weight: bold;">MESSAGE</p>
              <p style="margin: 0; color: #2C1810; line-height: 1.6;">${esc(message)}</p>
            </div>
          </div>
          <div style="background: #2C1810; padding: 15px; text-align: center;">
            <p style="color: #D4A574; margin: 0; font-size: 11px;">Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;

      const senderEmail = appUrl ? `noreply@${new URL(appUrl).hostname}` : 'noreply@maisonhoyam.com';

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION,
          subject: `New Inquiry from ${name} - ${subject}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'contact@maisonhoyam.com',
          reply_to: email,
          sender_email: senderEmail,
          sender_alias: 'Maison Hoyam',
        }),
      });
    } catch (emailError: any) {
      console.error('Email notification error:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, message: 'Failed to process submission' }, { status: 500 });
  }
}
