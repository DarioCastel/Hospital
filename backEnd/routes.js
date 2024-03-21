const express =  require ("express")
const router = express.Router()


//controladores//
const pacienteController = require ("./controllers/pacienteController")




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











module.exports= router

