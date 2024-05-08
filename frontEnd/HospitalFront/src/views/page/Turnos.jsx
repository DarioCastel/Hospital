
import TableTurn from '../components/TableTurn'
import "../../css/turno.css"
import { useState } from 'react'
import TurnoForm from "../components/TurnoForm"

const Turnos = () => {

  const [agregarBool, setAgregarBool] = useState(false)
  function handleBtn() {
    setAgregarBool(true)
  }
  const handleCancelar = () => {
    setAgregarBool(false);
  };
  return (
    <>
    <div className="containerTurnos">
        <button className='btnTurno' onClick={handleBtn}>Agregar turno</button>
        {agregarBool && <TurnoForm onCancel={handleCancelar}/>}
        <TableTurn/>
    </div>
    </>
  )
}

export default Turnos