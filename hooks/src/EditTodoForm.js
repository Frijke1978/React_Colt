import React from 'react';
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function EditTodoForm() {
    const [value, handleChange, reset] = useInputState("");
    return <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange} 
                fullWidth />;
}

export default EditTodoForm;
