import { Routes, Route, Navigate, Outlet} from "react-router-dom";
import Login from "./views/page/Login";
import Registro from "./views/page/Registro";
import Error404 from "./views/page/E404";
import Home from "./views/page/Home";
import Calendario from "./views/page/Calendario";


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="/registro" element={<Registro />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
