import jwt from 'jsonwebtoken'
export const Admin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const isEmail = email === "adminhospitly@gmail.com";
    const isPasswordMatch = password === "hospitly123";

    if (!isEmail || !isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const key = process.env.ADMIN_KEY;

    const payload = {
      email,
      role: "admin",
    };

    const token = jwt.sign(payload, key, { expiresIn: "1d" });
console.log(token)
    return res.status(200).json({
      message: "Admin signed in successfully!",
      token,
    });

  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong.",
      error: err.message,
    });
  }
};
