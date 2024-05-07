import axios from 'axios'

const API = "http://localhost:3001/api"

export const PacienteId = (pacienteId)=>{
    const url = `${API}/pacientes/${pacienteId}`;
    return axios.get(url)
}
