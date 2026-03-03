import mongoose from "mongoose";


const HospitalSchema=new mongoose.Schema({
name:{type:String,required:true},
location:{type:String,required:true},
rating:{type:String,required:true},
established_year:{type:String,required:true},
image:{type:String,required:true},
doctors: []
})
export default mongoose.model("Hospital",HospitalSchema,)