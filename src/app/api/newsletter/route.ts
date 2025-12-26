// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    console.log('Newsletter API called');

    try {
        const body = await request.json();
        console.log('Request body:', body);

        const { email } = body;

        // Validate required fields
        if (!email) {
            console.log('Missing email');
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('Invalid email format');
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Debug environment variables
        console.log('Environment check:', {
            hasUsername: !!process.env.EMAIL_USERNAME,
            hasPassword: !!process.env.EMAIL_PASSWORD,
            hasFrom: !!process.env.EMAIL_FROM,
            username: process.env.EMAIL_USERNAME,
            passwordLength: process.env.EMAIL_PASSWORD?.length
        });

        // Create transporter
        console.log('Creating transporter...');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Test the connection
        console.log('Testing connection...');
        await transporter.verify();
        console.log('Connection verified successfully');

        // Email to you (notification about new subscriber)
        const notificationMailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_USERNAME,
            subject: `New Newsletter Subscription`,
            text: `
New Newsletter Subscription

Email: ${email}
Date: ${new Date().toLocaleString()}
            `.trim(),
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #0fb8af; padding-bottom: 10px;">
                        New Newsletter Subscription
                    </h2>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #0fb8af; margin-top: 0;">Subscriber Details</h3>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 5px;">
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            This email was sent from your website newsletter subscription.
                        </p>
                    </div>
                </div>
            `,
        };

        // Welcome email to the subscriber
        const welcomeMailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Welcome to Sheikh Nabeel\'s Newsletter!',
            text: `
Welcome to Sheikh Nabeel's Newsletter!

Thank you for subscribing to my weekly newsletter. You'll receive updates, insights, and exclusive content directly in your inbox.

Stay tuned for amazing content!

Best regards,
Sheikh Nabeel
            `.trim(),
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #0fb8af; padding-bottom: 10px;">
                        Welcome to Sheikh Nabeel's Newsletter!
                    </h2>
                    
                    <p>Thank you for subscribing to my weekly newsletter!</p>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #0fb8af; margin-top: 0;">What to Expect</h3>
                        <ul style="line-height: 1.6;">
                            <li>Weekly insights and updates</li>
                            <li>Exclusive content and tips</li>
                            <li>Industry trends and analysis</li>
                            <li>Behind-the-scenes content</li>
                        </ul>
                    </div>
                    
                    <p>You'll receive your first newsletter soon. Keep an eye on your inbox!</p>
                    
                    <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 5px;">
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            Best regards,<br>
                            <strong>Sheikh Nabeel</strong>
                        </p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
                        <p style="margin: 0;">
                            You're receiving this email because you subscribed to Sheikh Nabeel's newsletter on our website.
                            If you didn't subscribe or want to unsubscribe, please contact us.
                        </p>
                    </div>
                </div>
            `,
        };

        // Send notification email to you
        console.log('Sending notification email...');
        await transporter.sendMail(notificationMailOptions);
        console.log('Notification email sent successfully');

        // Send welcome email to subscriber
        console.log('Sending welcome email...');
        await transporter.sendMail(welcomeMailOptions);
        console.log('Welcome email sent successfully');

        return NextResponse.json(
            { message: 'Successfully subscribed to newsletter!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Newsletter subscription error:', error);

        // More detailed error logging
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }

        return NextResponse.json(
            { error: 'Failed to subscribe. Please try again later.' },
            { status: 500 }
        );
    }
}