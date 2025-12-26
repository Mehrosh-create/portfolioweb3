// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Debug logging (remove in production)
    console.log('Email config:', {
      user: process.env.EMAIL_USERNAME,
      hasPassword: !!process.env.EMAIL_PASSWORD,
      passwordLength: process.env.EMAIL_PASSWORD?.length
    });

    // Create transporter with explicit Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content for you (notification)
    const notificationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USERNAME, // Your email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0fb8af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #0fb8af; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #0fb8af; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from your website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email for the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0fb8af; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${firstName},</p>
          
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #0fb8af; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; font-style: italic;">"${message}"</p>
          </div>
          
          <p>We typically respond within 24-48 hours. If your inquiry is urgent, please don't hesitate to call us directly.</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              Best regards,<br>
              The SheikhMedia Team
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationMailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}