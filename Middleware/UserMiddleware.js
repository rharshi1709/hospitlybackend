import jwt from "jsonwebtoken";
export const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided." });
  } 
    try {
    const key=process.env.SECRET_KEY
    const decoded = jwt.verify(token, key);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token." });
  }     
};