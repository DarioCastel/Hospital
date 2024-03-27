const mongoose = require("mongoose")
const schema = mongoose.Schema
const usuarioSchema = schema({
    nombreUsuario: {
        type: String,
        required: true,
        unique: true
      },
      contraseña: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
      }
    
})

module.exports=mongoose.model("Usuario",usuarioSchema)