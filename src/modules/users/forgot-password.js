const User = require("./Users");
const nodemailer = require("nodemailer");
const config = require("../../shared/config");
const jwt = require("jsonwebtoken");

const {
  NotFoundError,
  ForbiddenError,
  BadRequestError,
} = require("../../shared/errors");

const ForgotPasswordUser = async ({ body }) => {
  const { email } = body;

  const existed = await User.findOne({ email: email });

  if (!email.includes("@gmail.com")) {
    throw new BadRequestError("You must register by Google Account");
  }

  if (!existed) {
    throw new NotFoundError("User Not Found: 404");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ittime932@gmail.com",
      pass: "jpbbhfmpdpprtgvz",
    },
  });

  let secret_key = config.JWT.SECRET + existed._id;
  let token = jwt.sign(
    { user: { email: existed.email, id: existed._id } },
    secret_key,
    {
      expiresIn: "5m",
    }
  );

  let link = `http://localhost:5000/reset-password/${existed._id}/${token}`;

  let mailOptions = {
    from: "ittime932@gmail.com",
    to: email,
    subject: "MY PROJECT",
    text: link,
  };

  const info = await transporter.sendMail(mailOptions);

  return link;
};
module.exports = ForgotPasswordUser;
