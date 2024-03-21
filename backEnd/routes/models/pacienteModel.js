const mongoose = require("mongoose")
const schema = mongoose.Schema
const pacienteSchema = schema({
    nombre: {
        type: String,
        required: true
      },
      apellido: {
        type: String,
        required: true
      },
    fechaNacimiento: {
        type: Date,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      telefono: {
        type: String
      },
      dni:{
        type:String,
        required: true,
        unique: true
      }
    
})

module.exports=mongoose.model("Paciente",pacienteSchema)