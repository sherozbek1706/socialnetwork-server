const User = require("./Users");
const nodemailer = require("nodemailer");
const config = require("../../shared/config");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");

const ForgotPasswordUser = async ({ body }) => {
  console.log(body);
  const { email } = body;

  const existed = await User.findOne({ email: email });
  if (!existed) {
    throw new NotFoundError("User Not Found: 404");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "copy0879@gmail.com",
      pass: "Sherozbek555",
    },
  });

  let mailOptions = {
    from: "copy0879@gmail.com",
    to: "lazizbek2010baxti@gmail.com",
    subject: "Test Email",
    text: "Hello, this is a test email!",
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });

  return "OK";
};
module.exports = ForgotPasswordUser;
