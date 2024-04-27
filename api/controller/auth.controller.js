import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  console.log(req.body);

  const { username, email, password } = req.body;
  console.log(req.body);
  const hashPassword = bcryptjs.hashSync(password, 10);
  const user = new User({ username, email, password: hashPassword });

  try {
    const data = await user.save();
    res.status(200).json({ message: "User successfully added", data: data });
  } catch (err) {
    next(err);
  }
};
export const Signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "invalid user"));
    const validPassword = await bcryptjs.compare(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "wrong credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
