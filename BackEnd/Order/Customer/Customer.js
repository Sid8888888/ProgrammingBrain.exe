
require('dotenv').config();
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const ordermodel = require('./CustomerModel');

const create = async (req, res) => {
  try {
    const { password, email, ...rest } = req.body;

    // Check if the email already exists
    const existingCustomer = await ordermodel.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a verification token
    const verificationToken = crypto.randomBytes(64).toString('hex');

    const data = new ordermodel({ password: hashedPassword, email, verificationToken, ...rest });

    await data.save();

    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.APP_PASSWORD
      }
    });

    const verificationUrl = `http://localhost:4000/verify-email?token=${verificationToken}`;

    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Verify your email',
      text: `Please verify your email by clicking the following link: ${verificationUrl}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Customer created successfully", data });
  } catch (error) {
    console.error("Create error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  const { id, ...rest } = req.body;
  const data = await ordermodel.updateOne({ _id: id }, rest);
  res.send({ success: true, message: "updated successfuly", data: data });
};

const getCustomer = async (req, res) => {
  console.log(req);
  const email = req.params.email;
  console.log(email);
  const data = await ordermodel.findOne({ email });
  console.log(data);

  if (!data) {
    return res.status(404).send({ success: false, message: "No user found with this email" });
  }

  res.send({ success: true, message: "Retrieved successfully", data: data });
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const data = await ordermodel.deleteOne({ _id: id });
  res.send({ success: true, message: "deleted successfully", data: data });
};

const count = async (req, res) => {
  try {
    const users = await ordermodel.find({});

    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      success: true,
      message: "Order count successfully",
    });
  }
};

const getOrder = async (req, res) => {
  const id = req.params.id;

  try {
    const order = await ordermodel.findById(id);

    if (!order) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    res.send({
      success: true,
      message: "User fetched successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const user = await ordermodel.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ success: false, message: 'Invalid or expired verification token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.send({ success: true, message: 'Email verification successful' });
  } catch (error) {
    console.error("Email verification error:", error);
    res.status(500).json({ success: false, message: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await ordermodel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (!user.isVerified) {
      return res
        .status(401)
        .json({ success: false, message: "Please verify your email first" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    res
      .status(200)
      .json({ success: true, message: "Login successful", data: user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: error });
  }
};

module.exports = {
  create,
  update,
  deleteOne,
  count,
  getOrder,
  verifyEmail,
  login,
  getCustomer
};