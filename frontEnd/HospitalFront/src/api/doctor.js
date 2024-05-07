import axios from 'axios'

const API = "http://localhost:3001/api"

export const DoctorID = (doctorID)=>{
    const url = `${API}/doctores/${doctorID}`;
    return axios.get(url)
}
