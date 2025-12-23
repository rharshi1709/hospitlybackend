import mongoose from "mongoose";
const DoctorSchema=new mongoose.Schema({
name:{type:String,required:true},
category:{type:String,required:true},
experience:{type:String,required:true},
photo:{type:String,required:true},
phone:{type:String,required:true},
email:{type:String,required:true}
})
export default mongoose.model("Doctor",DoctorSchema,"Doctors")