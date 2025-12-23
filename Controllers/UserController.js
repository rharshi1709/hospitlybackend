import User from "../Models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const isUser = await User.findOne({ username });
    if (isUser) {
      return res.status(400).json({
        message: "Username already registered.",
      });
    }

    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }
     const hashedPassword= await bcrypt.hash(password,10)
    const data = await User.create({ username, email, password :hashedPassword});

    res.status(201).json({
      message: "User registered successfully!",
      data,
    });
  } catch (err) {
    
    res.status(500).json({
      message: "Something went wrong.",
      error: err.message,
    });
  }
};


export const signIn = async (req, res) => {
  const {  email, password } = req.body;

  if ( !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const isUser = await User.findOne({ email });
    if (isUser) {
      
        const isPasswordMatch = await bcrypt.compare(password, isUser.password);
        if (isPasswordMatch) {
          const key=process.env.SECRET_KEY
          const payload = {
            id: isUser._id,
            username: isUser.username,
            email: isUser.email
      }
      
   const Token= jwt.sign(payload, key, { expiresIn: "1d" });
 return res.status(200).json({
     message: "User signed in successfully!",
     token: Token,
   });  

        }
      
      else {
    return res.status(400).json({
      message: "Invalid email or password.",
    });

  }
} 
else{
    return res.status(400).json({
      message: "Invalid email or password.",
    });
}
  }
catch (err) {

    res.status(500).json({
      message: "Something went wrong.",
      error: err.message,
    });
  }
};
