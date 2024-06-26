const express =  require ("express")
const router = express.Router()


//controladores//
const pacienteController = require ("./controllers/pacienteController")
const doctorController = require ("./controllers/doctorController")
const turnoController = require ("./controllers/turnoController")
const usuariocontroller = require ("./controllers/usuariocontroller")




//rutas//
//rutasPacientes//
// Ruta para crear un nuevo paciente
router.post('/pacientes', pacienteController.crearPaciente);
// Ruta para obtener todos los pacientes
router.get('/pacientes', pacienteController.obtenerTodosLosPacientes);
// Ruta para obtener un paciente por su ID
router.get('/pacientes/:id', pacienteController.obtenerPacientePorId);
// Ruta para actualizar un paciente por su ID
router.put('/pacientes/:id', pacienteController.actualizarPaciente);
// Ruta para eliminar un paciente por su ID
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);


//rutasDoctores//
// Ruta para crear un nuevo doctor
router.post('/doctores', doctorController.crearDoctor);
// Ruta para obtener todos los doctores
router.get('/doctores', doctorController.obtenerTodosLosDoctores);
// Ruta para obtener un doctor por su ID
router.get('/doctores/:id', doctorController.obtenerDoctorPorId);
// Ruta para actualizar un doctor por su ID
router.put('/doctores/:id', doctorController.actualizarDoctor);
// Ruta para eliminar un doctor por su ID
router.delete('/doctores/:id', doctorController.eliminarDoctor);


//rutasTurnos//
// Ruta para crear un nuevo turno
router.post('/turnos', turnoController.crearTurno);
// Ruta para obtener todos los pacientes
router.get('/turnos', turnoController.obtenerTodosLosTurnos);
// Ruta para obtener un turno por su ID
router.get('/turnos/:id', turnoController.obtenerTurnoPorId);
// Ruta para actualizar un turno por su ID
router.put('/turnos/:id', turnoController.actualizarTurno);
// Ruta para eliminar un turno por su ID
router.delete('/turnos/:id', turnoController.eliminarTurno);

//rutasTurnos//
// Ruta para crear un nuevo Usuario registro
router.post('/registrar', usuariocontroller.crearUsuario);
// Ruta para crear un nuevo Usuario inicio
router.post('/iniciar', usuariocontroller.iniciarUsuario);










module.exports= router

