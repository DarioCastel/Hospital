import axios from 'axios'

const API = "http://localhost:3001/api"

export const turnoGet = ()=>{
    const url = `${API}/turnos`;
    return axios.get(url)
}

