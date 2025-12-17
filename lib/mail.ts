import * as nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  throw new Error("SMTP env variables are not set");
}

export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true untuk 465, false untuk 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

/**
 * Kirim email reset password
 */
export async function sendResetPasswordEmail(
  to: string,
  resetUrl: string
) {
  await transporter.sendMail({
    from: `"News Aggregator" <${SMTP_USER}>`,
    to,
    subject: "Reset Password",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6">
        <h2>Reset Password</h2>
        <p>Kamu meminta reset password untuk akun <b>News Aggregator</b>.</p>
        <p>Klik link di bawah ini untuk membuat password baru:</p>
        <p>
          <a href="${resetUrl}"
             style="
               display:inline-block;
               padding:10px 16px;
               background:#4f46e5;
               color:#ffffff;
               text-decoration:none;
               border-radius:6px;
             ">
            Reset Password
          </a>
        </p>
        <p>Link ini berlaku selama <b>30 menit</b>.</p>
        <p>Jika kamu tidak merasa meminta reset password, abaikan email ini.</p>
      </div>
    `,
  });
}
