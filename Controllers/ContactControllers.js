import Contact from "../Models/ContactModel.js";
export const contactUs = async (req, res) => {
  const { name, email, phone,message } = req.body;

  if (!name || !email || !phone||!message) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
  
    const data = await Contact.create({ name,email,phone,message});

    res.status(201).json({
      message: "Thanks for contacting"
    });
  } catch (err) {
    
    res.status(500).json({
      message: "Something went wrong.",
      error: err.message,
    });
  }
};

