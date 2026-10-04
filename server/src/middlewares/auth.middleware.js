// iska bus itna kaam hai ki header se accestoken read krna verify krna ki humare secret key se bana hai aur usse info nikal ke next req kw req.user key bnakr info ko bhej dena
import { readAccessToken } from "../utils/auth.utils.js";

export const authenticate = async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    return res.status(400).json({
      message: "Access token not found in the request header",
    });
  }

  try {
    const decoded = readAccessToken(accessToken);
    req.user = decoded;

    next();
  } catch (err) {
        res.status(401).json({
      message: "Invalid or expired access token",
    });
  }
};

