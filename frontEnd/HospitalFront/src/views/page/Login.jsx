import React from 'react'
import {useForm} from 'react-hook-form'
import {userLogin} from "../../api/Auth"

const Login = () => {

  const {register,handleSubmit}=useForm()
  return (
    <>
    <form onSubmit={handleSubmit(async(value)=>{
      const res = await userLogin(value)
      console.log(res)
    })}>
      <input type="text" {...register("Email",{required:true})}/>
      <input type="password" {...register("Password",{required:true})}/>
      <button>Sign in</button>
    </form>
    </>
  )
}

export default Login