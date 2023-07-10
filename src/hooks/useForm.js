
import { useState } from "react";

 
export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
        console.log(formState)
    };

    const onEditForm=(editBook)=>{
        setFormState(editBook)
    }

    const onResetForm = () => {

        setFormState(initialForm);

    };


    return {

        ...formState,

        formState, 

        onResetForm,

        handleInputChange,
        
        onEditForm

    };


}