import Hospital from "../Models/HospitalModel.js";
export const getHospital= async(req,res)=>{
try {
//    const searchWord = req.query.name || "";
     const data = await Hospital.find();
    
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

export const getSpecificHospital= async(req,res)=>{
try {
   const id= req.params.id;
     const data = await Hospital.findOne({_id:id
    });
    
    ;
    res.status(200).json({ message: "Successfully fetched the data" ,
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

export const getSpecificDoctorFromSpecificHospital= async(req,res)=>{
try {
   const {id,name}= req.params;
     const hospital= await Hospital.findOne({_id:id
    },
    { 
        doctors: { $elemMatch: { name: name } }
      }

   );
    ;
     if (!hospital || hospital.doctors.length === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(hospital.doctors[0]);

}
catch(err){
res.status(400).json(
   {message:"Error",
    error:err
   } 

)
}
}

// export const getCategory= async(req,res)=>{
// try {
//     const data= await Doctor.distinct("category")
//     res.status(200).json({ message: "Successfully fetched the doctors data" ,data});

// }
// catch(err){
// res.status(400).json(
//    {message:"Error",
//     error:err
//    } 

// )
// }
// }
// export const getSpecificCategory= async(req,res)=>{
//     const id= req.params.id
// try { const searchWord = req.query.name || "";
//     const data = await Doctor.find({
//       name: { $regex: searchWord, $options: "i" },
//     category :id
//     });
//     res.status(200).json({ message: "Successfully fetched the data" ,data});

// }
// catch(err){
// res.status(400).json(
//    {message:"Error",
//     error:err
//    } 

// )
// }
// }