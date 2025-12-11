# Email Sender

Email Sender is a Node.js project for sending emails using *Nodemailer* with support for *HTML Emails* and *Attachments, along with an **Address Book CRUD* connected to MongoDB.

---

# Features

- Send *HTML Emails*  
- Support *Attachments* (PDF, images...)  
- Send copies to multiple recipients  
- *Notifications* on successful email delivery  
- *Address Book CRUD*:  
  - Create / Read / Update / Delete Contacts  
- Connection to *MongoDB Atlas*  
- Built with *Express.js, **Nodemailer, and **Multer*  

---

# Technologies Used

- Node.js  
- Express.js  
- Nodemailer  
- MongoDB & Mongoose  
- Multer (for file uploads)  
- HTML Emails  

---

# Installation

1. Clone the repository:

bash
git clone <repo-link>
cd Email-Sender


2. Install dependencies:

bash
npm install


3. Create a .env file in the project root:

env
MONGO_URI=mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/emailSender
PORT=5000
EMAIL=your_email@example.com
PASS=your_email_password
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=578 or 25 or 2525
SMTP_USER=your user-name
SMTP_PASS=your-pass

4. Create the uploads folder in the project root:

bash
mkdir uploads


---

#  Usage

1. Start the server:

bash
npm run dev


2. API Endpoints:

# *Send Email*

POST /api/email/send

- Body (form-data):  
  - to: recipient email  
  - files: any attachments (optional)

# *Contacts CRUD*
- GET /api/contacts → Get all contacts  
- GET /api/contacts/:id → Get one contact  
- POST /api/contacts → Create new contact  
- PUT /api/contacts/:id → Update contact  
- DELETE /api/contacts/:id → Delete contact  

---

# Notes

- Uploaded files are stored temporarily in uploads/ before sending.  
- MongoDB will create the database and collection automatically on first insert.  

---

# Author

*Eng Shaimaa*
