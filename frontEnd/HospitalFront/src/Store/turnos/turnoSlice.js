import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { turnoGet } from "../../api/turnos";


const initialState = {
    turnoData: [],
    loading: "inactiva",
    error: null
}

export const cargarTurnos = createAsyncThunk("turnos/cargarTurnos",async()=>{
    const response= await turnoGet();
    return response.data
})


export const turnoSlice = createSlice({
    name: "turno",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(cargarTurnos.pending,(state)=>{
            state.loading= "cargando";
            state.error= null;
        })
        .addCase(cargarTurnos.fulfilled,(state,action)=>{
            state.loading="exito";
            state.turnoData=action.payload;
        })
        .addCase(cargarTurnos.rejected,(state,action)=>{
            state.loading="error";
            state.error=action.error.message;
        })
    }
})

export const { selectTurnoData } = turnoSlice.actions;
export default turnoSlice.reducer;