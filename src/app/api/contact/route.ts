import { NextRequest, NextResponse } from "next/server";
import nodemailer, { TransportOptions } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
    const { email, name, message } = await req.json()
    const confirmationMessage = `
        <div> 
        <p style="text-align: center;"><span style="font-family: georgia, palatino, serif; font-size: 11pt;"><a title="Your Soft Solutions" href="https://www.yoursoftsolutions.com" rel="noopener noreferrer"><img src="blob:https://mail.hostinger.com/c145a421-ec0f-4e32-9d59-d209470efdfa" width="150" height="132" /></a></span></p>
        <table style="border-collapse: collapse; width: 95%; height: 83px; background-color: #ecf0f1; border-color: #95a5a6; border-style: solid; margin-left: auto; margin-right: auto;" border="0">
        <tbody>
        <tr style="height: 42px;">
        <td style="width: 100%; height: 42px; border-style: none; text-align: left; vertical-align: top;">
        <p><span style="font-family: georgia, palatino, serif; font-size: 11pt;">Dear Valued Client,</span></p>
        <p><span style="font-family: georgia, palatino, serif; font-size: 11pt;">&nbsp;</span></p>
        <p><span style="font-family: georgia, palatino, serif; font-size: 11pt;">Thank you for contacting us. Your message has been received and will be addressed shortly.</span></p>
        </td>
        </tr>
        <tr style="height: 41px;">
        <td style="width: 100%; text-align: left; vertical-align: top; height: 41px;">
        <p><span style="font-family: georgia, palatino, serif; font-size: 11pt;"><br />Best regards,<br />Your Soft Solutions<br /></span><span style="font-family: georgia, palatino, serif; font-size: 11pt;"></span></p>
        </td>
        </tr>
        </tbody>
        </table>
        <p style="text-align: center;"><span style="font-family: georgia, palatino, serif; font-size: 11pt;"><a href="http://www.yoursoftsolutions.com" rel="noopener noreferrer">www.yoursoftsolutions.com</a></span></p>
        </div>
    `
    const transport = nodemailer.createTransport(<TransportOptions>{
        host: "smtp.hostinger.com",
        port: 465,
        secure: 'true',

        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message
    }

    const confirmationOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank you for reaching out!",
        text: "Thank you for sending us a message. We will get back to you as soon as possible!",
        html: confirmationMessage
    }

    const sendMail = () => 
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    transport.sendMail(confirmationOptions, function (error) {
                        if (error) {
                            reject(error.message)
                        }
                    })
                    resolve('Email sent');
                } else {
                    reject(err.message)
                }
            })
        })
    
    try {
        await sendMail();
        return NextResponse.json({ message: 'Email sent' })
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
    return NextResponse.json('Hello, world!')
}