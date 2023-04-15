import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    //Declare onchange handler to control form
    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };
    
    //create a Submit Handler to preventDefault and call the custom submitHandler 
    const onSubmit = (e) => {
        e.preventDefault(); 
        onSubmitHandler(values);
    }

    return {
        values,
        changeHandler,
        onSubmit
    };
}