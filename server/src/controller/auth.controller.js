import userModel from "../model/user.model.js";
import {
  createAccessToken,
  createRefreshToken,
  readRefreshToken,
} from "../utils/auth.utils.js";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const isUserExist = await userModel.findOne({ email });
  if (isUserExist) {
    return res.status(409).json({
      message: "User is already exist",
    });
  }

  if (password === confirmPassword) {
    const user = await userModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const accessToken = createAccessToken({
      userId: user._id,
      email: user.email,
    });
    const refreshToken = createRefreshToken({
      userId: user._id,
      email: user.email,
    });

    //cokkie me refresh token daldiye
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    //aur refreshToken ko db me store kr liy
    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.status(201).json({
      message: "User registered succesfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } else {
    return res.status(401).json({
      message: "password do not match",
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User does not exist ",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid crediantials",
    });
  }

  const accessToken = createAccessToken({
    userId: user._id,
    email: user.email,
  });
  const refreshToken = createRefreshToken({
    userId: user._id,
    email: user.email,
  });

  //cokkie me refresh token daldiye
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
  //aur refreshToken ko db me store kr liy
  await userModel.findByIdAndUpdate(user._id, { refreshToken });

  res.status(200).json({
    message: "user loggedIn successfully",
    data: {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      accessToken,
    },
  });
};

export const getMe = async (req, res) => {
  const { userId, email } = req.user;
  const user = await userModel.findById(userId);
  res.status(200).json({
    message: "User fetched succesfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    },
  });
};

export const refreshController = async (req, res) => {
  // reads the refresh token,
  const {refreshToken} = req.cookies;
  
        if (!refreshToken) {
            return res.status(401).json({ message: "Refresh Token missing. Please log in again." });
        }

  const { userId, email } = readRefreshToken(refreshToken);
  const user = await userModel.findById(userId);
    // console.log(refreshToken)
    // console.log(user.refreshToken)

  if (!user) {
    return res.status(400).json({
      message: "User does not exist ",
    });
  }

  
  if (refreshToken !== user.refreshToken) {
    user.refreshToken = null;
    return res.status(403).json({
      message: "Re-login again",
    });
  }

  const newAccessToken = createAccessToken({
    userId: user._id,
    email: user.email,
  });
  const newRefreshToken = createRefreshToken({
    userId: user._id,
    email: user.email,
  });

  await userModel.findOneAndUpdate(
    { email },
    { refreshToken: newRefreshToken },
  );

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
  });

  res.status(200).json({
    message: "Refresh token rotated succesfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      newAccessToken,
      newRefreshToken,
    },
  });
};

export const logOutController = async(req,res)=>{
    res.clearCookie("refreshToken");
    return res.status(200).json({ message: "Logged out successfully" });
}
