import axios from 'axios'

const API = "http://localhost:3001/api"

export const userLogin = data => {
    console.log(data)
    axios.post(`${API}/iniciar`,data)}

