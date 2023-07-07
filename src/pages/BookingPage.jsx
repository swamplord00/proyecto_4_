import moment from 'moment'

import { useForm } from '../hooks/useForm';
import { db } from '../firebase/firebase';

export const BookingPage = () => {

const initialForm={
    nombre:'',
    email:'',
    fecha:'',
    comensales:'',
    // ninios:'false'
}

const {formState,setFormState, handleInputChange,onResetForm}=useForm(initialForm)

const onSubmit=async(eventSubmit)=>{
    eventSubmit.preventDefault()
    await db.collection('reservas').add(formState)
    onResetForm()
}

  return (
    <>
      <form onSubmit={onSubmit}>
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
            name='email'
            onChange={handleInputChange}
          />
          <label htmlFor="inputFecha" className="form-label">
            Fecha
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="inputFecha"
            min={moment().format('YYYY-MM-DD hh:mm')}
            max={moment().add(1,'month').format('YYYY-MM-DD hh:mm')}
            name='fecha'
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
            name='comensales'
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
    </>
  );
};
