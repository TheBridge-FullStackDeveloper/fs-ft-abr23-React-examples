import { useState } from 'react';

import { FormControl, Input, Button, TextField, Card, InputLabel } from '@mui/material';

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
        <section>
            <Card sx={{
                minWidth:300,
                minHeight:300,
                paddingTop:8,
                paddingBottom: 0}}>
            <FormControl
            sx={{
                minHeight:300,
                padding: 3
            }}
            onSubmit={handleSubmit}>
                <div className='inputContainer'>
                <InputLabel sx={{marginBottom:30}} htmlFor="email">Email</InputLabel>
                <Input name="email" type="email" onChange={handleChange}></Input>
                </div>
                <div className='inputContainer'>
                <InputLabel  htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" onChange={handleChange}></Input>                    
                </div>
                <Button>Login</Button>
            </FormControl>                
            </Card>

            <p>{JSON.stringify(values)}</p>            
        </section>

       
    );
    
}
 
export default HooksUseStateObject