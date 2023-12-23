const mongoose=require('mongoose')

const Schema= new mongoose.Schema({
    DeviceId:String,
    PrescribedMedicine:String,
    InjectTime:String,
    SalineTime:String,
    PatientName:String,
    PatientRoomNumber:String,
    PatientAge:String,
})

module.exports=mongoose.model('API',Schema)