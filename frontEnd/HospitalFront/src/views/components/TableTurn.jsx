import { RiArrowDownLine, RiArrowUpLine } from "@remixicon/react";
import { CiEdit, CiTrash, CiRead } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { cargarTurnos } from "../../Store/turnos/turnoSlice";
import { useEffect, useState } from "react";
import { DoctorID } from "../../api/doctor";
import { PacienteId } from "../../api/paciente";

// This example requires @tanstack/react-table

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const workspacesColumns = [
  {
    header: "Fecha",
    accessorKey: "fecha",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Paciente",
    accessorKey: "paciente",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Motivo",
    accessorKey: "motivo",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Doctor",
    accessorKey: "doctor",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Acciones",
    accessorKey: "acciones",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
];



export default function TableTurn() {
  

  const dataTurnos = useAppSelector((state)=>
    state.turno.turnoData
  )
  console.log(dataTurnos)
  const [turnosNombres, setTurnosNombres] = useState([])

  const dispatch= useAppDispatch()
  useEffect(() => {
    dispatch(cargarTurnos())
  }, [dispatch])
  
  const cargarNombres= async ()=>{
    const turnosNombresActualizados = await Promise.all(
      dataTurnos.map(async (turno)=>{
        const doctorResponse = await DoctorID(turno.doctor);
        const pacienteResponse = await PacienteId(turno.paciente);

        const nombreDoctor = doctorResponse.data.nombre;
        const nombrePaciente = pacienteResponse.data.nombre;
        const fechaFormat= new Date(turno.fecha).toLocaleString();

        return{
          ...turno,
          fecha: fechaFormat,
          doctor: nombreDoctor,
          paciente: nombrePaciente

        }
      })
    )
    setTurnosNombres(turnosNombresActualizados)
  }

  const table = useReactTable({
    data: turnosNombres,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "workspace",
          desc: false,
        },
      ],
    },
  });

  useEffect(() => {
    cargarNombres()
  }, [dataTurnos])
  
  return (
    <>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-b border-tremor-border dark:border-dark-tremor-border"
            >
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      header.column.getToggleSortingHandler()(event);
                    }
                  }}
                  className={classNames(
                    header.column.getCanSort()
                      ? "cursor-pointer select-none"
                      : "",
                    "group px-0.5 py-1.5"
                  )}
                  tabIndex={header.column.getCanSort() ? 0 : -1}
                  aria-sort={header.column.getIsSorted()}
                >
                  <div
                    className={classNames(
                      header.column.columnDef.enableSorting === true
                        ? "flex items-center justify-between gap-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
                        : header.column.columnDef.meta.align,
                      "rounded-tremor-default px-3 py-2.5"
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/* harmonize colors with previous block (=ground truth) */}
                    {header.column.getCanSort() ? (
                      header.column.getIsSorted() === "asc" ? (
                        <RiArrowUpLine
                          className="h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong"
                          aria-hidden={true}
                        />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <RiArrowDownLine
                          className="h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong"
                          aria-hidden={true}
                        />
                      ) : (
                        <RiArrowUpLine
                          className="h-4 w-4 text-tremor-content dark:text-dark-tremor-content"
                          aria-hidden={true}
                        />
                      )
                    ) : null}
                  </div>
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <>
                  {index === row.getVisibleCells().length - 1 ? (
                    <TableCell
                      key={cell.id}
                      className={classNames(cell.column.columnDef.meta.align)}
                    >
                      {/* Renderizar los botones dentro de la última celda */}
                      <div className="flex items-center space-x-2">
                        <button onClick={() => console.log(row.original)}>
                          <CiEdit className="icon edit" />
                        </button>
                        <button onClick={() => console.log(row.original)}>
                          <CiTrash className="icon delete" />
                        </button>
                        <button onClick={() => console.log(row.original)}>
                          <CiRead className="icon view" />
                        </button>
                      </div>
                    </TableCell>
                  ) : (
                    <TableCell
                      key={cell.id}
                      className={classNames(cell.column.columnDef.meta.align)}
                    >
                      {/* Renderizar el contenido de la celda */}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  )}
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
