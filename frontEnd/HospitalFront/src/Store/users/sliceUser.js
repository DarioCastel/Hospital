import {createSlice} from "@reduxjs/toolkit"

const initialState={
    isAuth: false
}

export const userSlice = createSlice(
    {
        name:"users",
        initialState,
        reducers:{} 
    }
)

export default userSlice.reducer