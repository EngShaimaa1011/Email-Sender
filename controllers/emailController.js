const fs = require("fs");
const path = require("path");
const transporter = require("../config/emailConfig");

const addressBook = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com"
];

exports.sendEmail = async (req, res) => {
  const { to, cc, bcc, attachments } = req.body;

  // HTML template
  const htmlPath = path.join(__dirname, "..", "templates", "welcome.html");
  const htmlContent = fs.readFileSync(htmlPath, "utf8");

  const finalCC = cc || addressBook;
  const finalBCC = bcc || [];

  const info = await transporter.sendMail({
    from: '"My App" <shaimaa@myapp.com>',
    to: to,
    cc: finalCC,
    bcc: finalBCC,
    subject: "Welcome Email",
    html: htmlContent,
    attachments:req.files.map(file =>({
      filename:file.originalname,
      path: file.path
    })),
  });

  res.json({
    status: "success",
    message: "HTML Email sent with CC/BCC and attachments!",
    data: info,
  });
};
