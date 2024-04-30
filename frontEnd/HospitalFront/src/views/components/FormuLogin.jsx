import { TextInput } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userLogin } from "../../api/Auth";
import Alert from "./Alert";
import { setCookies, getCookies, removeCookies } from "../../hooks/useCookies";
import { useAppDispatch } from "../../hooks/useAppSelector";
import { login } from "../../Store/users/sliceUser";

export default function FormuLogin() {
  const [errorMsj, setErrorMsj] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const setTime = setTimeout(() => {
      setErrorMsj("");
    }, 3000);
    return () => clearTimeout(setTime);
  }, [errorMsj]);

  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await userLogin(data);
      setCookies("token", res,data.token)
      dispatch(login())
    } catch (error) {
      setErrorMsj(error.response.data.mensaje);
    }
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Iniciar sesión
          </h3>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <label
              
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Email
            </label>
            <TextInput
              type="email"
              autoComplete="email"
              placeholder="john@company.com"
              className="mt-2"
              {...register("email", { required: true })}
            />
            <label
              
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Constraseña
            </label>
            <TextInput
              type="password"
              autoComplete="password"
              placeholder="john@company.com"
              className="mt-2"
              {...register("contraseña", { required: true })}
            />
            <button
              type="submit"
              className=" bg-red-500 mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Ingresar
            </button>
          </form>
          <br />
          {errorMsj && (
            <Alert message={errorMsj}/>
          )}
        </div>
      </div>
    </>
  );
}
