import {createSlice} from "@reduxjs/toolkit"
import { getCookies, removeCookies } from "../../hooks/useCookies"

const initialState={
    isAuth: false
}

export const userSlice = createSlice(
    {
        name:"users",
        initialState,
        reducers:{
            login:(state)=>{
                state.isAuth = getCookies("token")
            },

            logOut: (state)=>{
                state.isAuth = false;
                removeCookies("token")
            }
        } 
    }
)

export const {logOut, login} =userSlice.actions;
export default userSlice.reducer