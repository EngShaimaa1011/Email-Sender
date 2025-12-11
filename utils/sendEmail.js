const transporter = require('../config/emailConfig');

async function sendEmail({ to, subject, text, html, cc, bcc, attachments }) {
  const info = await transporter.sendMail({
    from: '"My App" <no-reply@myapp.com>',
    to,
    cc,
    bcc,
    subject,
    text,
    html,
    attachments
  });

  return info;
}

module.exports = sendEmail;
