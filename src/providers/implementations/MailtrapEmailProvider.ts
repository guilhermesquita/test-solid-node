import { EmailProvider, IMessage } from "../EmailProvider";
import nodemailer from 'nodemailer'

export class MailtrapEmailProvider implements EmailProvider {
    private transporter;

    constructor(
    ){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'your-mailtrap-username',
                pass: 'your-mailtrap-password'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}