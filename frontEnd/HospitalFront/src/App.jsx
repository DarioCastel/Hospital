import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./views/page/Login"
import Registro from "./views/page/Registro"
import Error404 from "./views/page/E404"


const router = createBrowserRouter([
  {
    path:"/",
    element: <div>HOME</div>
  }
  ,
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/registro",
    element: <Registro/>
  },
  {
    path:"/*",
    element: <Error404/>
  }
])


    

const App = () => {
  return (<>
    <RouterProvider router={router} />
  </>
  )
}

export default App
