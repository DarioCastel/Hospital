
import { Divider, TextInput } from '@tremor/react';

export default function TurnoForm({onCancel}) {
  
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Registro de paciente
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        </p>
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Fecha
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="date"
                id="first-name"
                name="first-name"
                autoComplete="first-name"
                placeholder="First name"
                className="mt-2"
                required
                min={today}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Hora
                <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="time"
                id="hora"
                name="hora"
                autoComplete="last-name"
                placeholder="Last name"
                className="mt-2 hora"
                required
                min="08:00"
                max="21:00"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Paciente ingrese DNI
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="string"
                id="paciente"
                name="paciente"
                autoComplete=""
                placeholder="DNI"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="address"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Doctor
              </label>
              <br />
              <select
                id="doctor"
                name="doctor"
                className="mt-2 hora"
              >
                <option value="">Seleccione Doctor</option>
                <option value="doc1">Doc1</option>
                <option value="doc2">Doc2</option>
              </select>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
               Motivo
              </label>
              <textarea
                placeholder="Describa el motivo de la visita"
                className="tremor-Textarea-Textarea w-full flex items-center outline-none rounded-tremor-default px-3 py-2 text-tremor-default focus:ring-2 transition duration-100 border shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input focus:dark:border-dark-tremor-brand-subtle focus:dark:ring-dark-tremor-brand-muted bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content dark:text-dark-tremor-content border-tremor-border dark:border-dark-tremor-border placeholder:text-tremor-content dark:placeholder:text-dark-tremor-content wrstk"
                data-testid="text-area"
                id="motivo-description"
                name="motivo-description"
                rows="4"
              ></textarea>
            </div>
            
            
            
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Submit
            </button>
          </div>
        </form>
        <br />
        <hr />
      </div>
    </>
  );
}