
import { TextInput } from '@tremor/react';
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {userLogin} from "../../api/Auth"



export default function FormuLogin() {
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Iniciar sesión
          </h3>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="email"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Email
            </label>
            <TextInput
              type="email"
              autoComplete="email"
              placeholder="john@company.com"
              className="mt-2"
              {...register("email",{required:true})}
            />
            <label
              htmlFor="Password"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Constraseña
            </label>
            <TextInput
              type="password"
              autoComplete="password"
              placeholder="john@company.com"
              className="mt-2"
              {...register("contraseña",{required:true})}
            />
            <button
              type="submit"
              className=" bg-red-500 mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Ingresar
            </button>
          </form>
          <br />
          {errorMsj && 
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMsj}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Cerrar</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>}
        </div>
      </div>
    </>
  );
}