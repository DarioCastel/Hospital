const Doctor = require('../routes/models/doctorModel');


// Controlador para crear un nuevo doctor
exports.crearDoctor = async (req, res) => {
    try {
       
        const { nombre, apellido, especialidad, email, telefono } = req.body;
 
        const data = await Doctor.create({
          nombre,
          apellido,
          email,
          especialidad,
          telefono
        });
        if (!data) {
          throw new Error("El doctor fue creado exitosamente");
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "Ocurrio un error en la creacion del doctor" });
        console.log(error)
      }
};


// Controlador para obtener todos los doctores
exports.obtenerTodosLosDoctores = async (req, res) => {
  try {
    const doctores = await Doctor.find();
    res.json(doctores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener los doctores' });
  }
};


// Controlador para obtener un doctor por su ID
exports.obtenerDoctorPorId = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ mensaje: 'Doctor no encontrado' });
    }
    res.json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener el doctor' });
  }
};


// Controlador para actualizar un doctor por su ID
exports.actualizarDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ mensaje: 'Doctor no encontrado' });
    }
    res.json({ mensaje: 'Doctor actualizado exitosamente', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar el doctor' });
  }
};


// Controlador para eliminar un doctor por su ID
exports.eliminarDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ mensaje: 'Doctor no encontrado' });
    }
    res.json({ mensaje: 'Doctor eliminado exitosamente', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el doctor' });
  }
};
