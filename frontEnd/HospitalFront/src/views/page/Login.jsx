import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {userLogin} from "../../api/Auth"

const Login = () => {

  const [errorMsj, setErrorMsj] = useState("")
  const {register,handleSubmit,}=useForm();

  useEffect(() => {
    const setTime =setTimeout(()=>{
      setErrorMsj("")
    },3000)
     return(
      ()=>clearTimeout(setTime)
    )
  }, [errorMsj])
  

  const onSubmit = handleSubmit(async(data)=>{
    try {
      const res = await userLogin(data)
      console.log(res)
    } catch (error) {
      setErrorMsj(error.response.data.mensaje)
    }
  })



  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email",{required:true})}/>
      <input type="password" {...register("contraseña",{required:true})}/>
      <button>Sign in</button>
      {errorMsj&&<span>{errorMsj}</span>}
    </form>
    </>
  )
}

export default Login