import { useState } from 'react';

import {Input, Button, Card, InputLabel } from '@mui/material';

const HooksUseStateObject = () => {

    const styles = {
        minWidth: 300,
        minHeight: 200,
        paddingTop: 2,
        paddingBottom: 0,
        border: 'solid'
    }

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
        alert("Datos enviados de: " + values.email);
    }

    return (
        <section>
            <Card sx={styles}>
                <form
                    onSubmit={handleSubmit}>
                    <InputLabel sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1 }} htmlFor="email">Email</InputLabel>
                    <Input sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1 }} name="email" type="email" onChange={handleChange}></Input>
                    <InputLabel sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1 }} htmlFor="password">Password</InputLabel>
                    <Input sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1 }} name="password" type="password" onChange={handleChange}></Input>
                    <Button>Login</Button>
                </form>
            </Card>

            <p>Email: {values.email}</p>
            <p>Password: {values.password}</p>
        </section>


    );

}

export default HooksUseStateObject