import HeaderPag from "../components/HeaderPag"
import MenuHeader from "../components/MenuHeader"
import Calendario from "./Calendario"
import {useLocation} from "react-router-dom"
import {Navigate, Outlet} from "react-router"
import { useAppSelector } from "../../hooks/useAppSelector"

export default function Example() {

  const isAuth = useAppSelector(state=> state.users.isAuth) 

  const location=useLocation
  return (
    <>
      {
        isAuth?
      <div className="min-h-full">
        <MenuHeader/>

        <HeaderPag title={"Home123"}/>
        <main>
          {location.pathname === "/" ? <Calendario/> : <Outlet/>}
        </main>
      </div>
        :
        <Navigate to="/login"/>
      }
    </>
  )
}
