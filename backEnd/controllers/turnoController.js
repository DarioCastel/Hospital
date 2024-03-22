const Turno = require('../routes/models/turnoModel');


// Controlador para crear un nuevo turno
exports.crearTurno = async (req, res) => {
    try {
       
        const { paciente, fecha, motivo, doctor} = req.body;
 
        const data = await Turno.create({
          paciente,
          fecha,
          motivo,
          doctor
        });
        if (!data) {
          throw new Error("El turno fue creado exitosamente");
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "Ocurrio un error en la creacion del turno" });
        console.log(error)
      }
};


// Controlador para obtener todos los turnos
exports.obtenerTodosLosTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener los doctores' });
  }
};


// Controlador para obtener un turno por su ID
exports.obtenerTurnoPorId = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id);
    if (!turno) {
      return res.status(404).json({ mensaje: 'Turno no encontrado' });
    }
    res.json(turno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener el turno' });
  }
};


// Controlador para actualizar un turno por su ID
exports.actualizarTurno = async (req, res) => {
  try {
    const turno = await Turno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!turno) {
      return res.status(404).json({ mensaje: 'Turno no encontrado' });
    }
    res.json({ mensaje: 'Turno actualizado exitosamente', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar el turno' });
  }
};


// Controlador para eliminar un doctor por su ID
exports.eliminarTurno = async (req, res) => {
  try {
    const turno = await Turno.findByIdAndDelete(req.params.id);
    if (!turno) {
      return res.status(404).json({ mensaje: 'Turno no encontrado' });
    }
    res.json({ mensaje: 'Turno eliminado exitosamente', turno });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el turno' });
  }
};
