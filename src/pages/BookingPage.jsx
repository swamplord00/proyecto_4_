import moment from "moment";

import { useForm } from "../hooks/useForm";
import { db } from "../firebase/firebase";
import { useEffect} from "react";
import { useTable } from "../hooks/useTable";

export const BookingPage = () => {
  const initialForm = {
    nombre: "",
    email: "",
    fecha: "",
    comensales: "",
    // ninios:'false'
  };

  const { formState, handleInputChange, onResetForm } = useForm(initialForm);
  const{infoBookingArray,getDataForm}=useTable([])
  
  

  const onSubmit = async (eventSubmit) => {
    eventSubmit.preventDefault();
    await db.collection("reservas").add(formState);
    onResetForm();
  };

  useEffect(() => {
    getDataForm()
    console.log(infoBookingArray)
  }, [])
  
  return (
    <>
      <div className="card">
        <div className="card-body">Recomendamos hacer tu reserva en línea.</div>
      </div>
      <form onSubmit={onSubmit} className="form">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="inputName"
            className="form-control"
            value={formState.nombre}
            onChange={handleInputChange}
          />

          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formState.email}
            name="email"
            onChange={handleInputChange}
          />
          <label htmlFor="inputFecha" className="form-label">
            Fecha
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="inputFecha"
            min={moment().format("YYYY-MM-DD hh:mm")}
            max={moment().add(1, "month").format("YYYY-MM-DD hh:mm")}
            name="fecha"
            value={formState.fecha}
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputComensales" className="form-label">
            Comensales
          </label>
          <input
            type="number"
            className="form-control"
            id="inputComensales"
            min={2}
            max={8}
            name="comensales"
            value={formState.comensales}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 form-check">
          {/* <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name='ninios'
            defaultChecked={formState.ninios}
            onChange={()=>setFormState((state)=>{...state, state.ninios:!state.ninios})}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            ¿Silla para niños?
          </label> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

        <table className="table p-5 mt-5 table-responsive">
          <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Fecha</th>
                <th>Comensales</th>
                <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
                infoBookingArray.map((el)=>(
                    <tr key={el.id}>
                        <td>{el.nombre}</td>
                        <td>{el.email}</td>
                        <td>{el.fecha}</td>
                        <td>{el.comensales}</td>
                        <td>
                            <button className="btn btn-danger">Eliminar</button>
                            <button className="btn btn-info">Editar</button>
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </table>   

    </>
  );
};
