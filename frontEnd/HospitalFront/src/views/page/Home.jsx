import HeaderPag from "../components/HeaderPag"
import MenuHeader from "../components/MenuHeader"
import Calendario from "./Calendario"
import {useLocation} from "react-router-dom"
import {Outlet} from "react-router"

export default function Example() {

  const location=useLocation
  return (
    <>
      
      <div className="min-h-full">
        <MenuHeader/>

        <HeaderPag title={"Home123"}/>
        <main>
          {location.pathname === "/" ? <Calendario/> : <Outlet/>}
        </main>
      </div>
    </>
  )
}
