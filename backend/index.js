const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000; // Use the port you prefer

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin:["https://amxfinal-whrg-git-main-srinivas-projects-8bd4aa06.vercel.app"],
  methods : ["POST"],
  credentials:true,
}));

// Endpoint to handle form submission
app.post("/submit",async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    discussionTopics,
    discussionOptions,
    contactMethods,
    contactOptions,
    preferredDate,
    preferredTime,
    declaration,
  } = req.body.formData;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "munavathnaveen15@gmail.com",
      pass: "nvex hcbx jgnh tawv",
    },
  });
  const mailOptions = {
    from: `${firstName} ${lastName}`,
    // to: "kethavathsrinivas2004@gmail.com",
    to:"iampavankumar47@gmail.com",
    subject: message,
    text: `Iam ${firstName} ${lastName} i wanted to contact you on these topics ${discussionTopics} on ${preferredDate} so please give me confimation here is my email address:${email} and phone number ${phone}`,
  };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) console.log(error);
  //   else console.log("mail sent");
  // });
  try {
    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ error: "Error sending mail" });
  }

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
