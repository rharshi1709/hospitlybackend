import Appointment from "../Models/AppointmentModel.js";
export const appointment = async (req, res) => {
  const { name, email, phone,category,date,time} = req.body;

  if (!name || !email || !phone||!category||!date||!time) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    
    
    const data = await Appointment.create({ name, email, phone ,category,date,time});

    res.status(201).json({
      message: "Appointment Booked Successfully!",
      data,
    });
  } catch (err) {
    
    res.status(500).json({
      message: "Something went wrong.",
      error: err.message,
    });
  }
};
