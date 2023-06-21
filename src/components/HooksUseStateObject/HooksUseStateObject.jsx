import { useState } from 'react';

const HooksUseStateObject = () => {
  
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        //Llamar a la API
        //..
        //..
        //Enviar el POST
        alert("Datos enviados de: "+values.email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" onChange={handleChange}></input>
                <br/><br/>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" onChange={handleChange}></input>

                <button>Login</button>
            </form>
            <p>{JSON.stringify(values)}</p>
        </>
    );
    
}
 
export default HooksUseStateObject