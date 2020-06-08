import React from 'react';
import useInputState from "./hooks/useInputState";

function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useInputState("")
    return (
        <div>
            <h1> The value is....{email} </h1>
            <input type="text" value={email} onChange={updateEmail} />
            <button onClick={resetEmail}>Submit</button>
        </div>
    );
}

export default SimpleFormInputHook;