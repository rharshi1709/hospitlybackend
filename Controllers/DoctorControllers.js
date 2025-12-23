import Doctor from "../Models/DoctorModel.js";
export const getDoctors= async(req,res)=>{
try {
   const searchWord = req.query.name || "";
     const data = await Doctor.find({
      name: { $regex: searchWord, $options: "i" }
    });
    
    ;

    res.status(200).json({ message: "Successfully fetched the  data" ,
        data});

}
catch(err){
res.status(400).json(
   {message:"Error",
    error:err
   } 

)
}
}

export const getSpecificDoctor= async(req,res)=>{
try {
   const id= req.params.id;
     const data = await Doctor.findOne({_id:id
    });
    
    ;

    res.status(200).json({ message: "Successfully fetched the  data" ,
        data});

}
catch(err){
res.status(400).json(
   {message:"Error",
    error:err
   } 

)
}
}

export const getCategory= async(req,res)=>{
try {
    const data= await Doctor.distinct("category")
    res.status(200).json({ message: "Successfully fetched the doctors data" ,data});

}
catch(err){
res.status(400).json(
   {message:"Error",
    error:err
   } 

)
}
}
export const getSpecificCategory= async(req,res)=>{
    const id= req.params.id
try { const searchWord = req.query.name || "";
    const data = await Doctor.find({
      name: { $regex: searchWord, $options: "i" },
    category :id
    });
    res.status(200).json({ message: "Successfully fetched the data" ,data});

}
catch(err){
res.status(400).json(
   {message:"Error",
    error:err
   } 

)
}
}