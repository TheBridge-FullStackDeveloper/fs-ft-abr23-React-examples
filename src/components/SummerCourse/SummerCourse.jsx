import React, {useState, useEffect}from "react";
import { FormControl, Input, Button, TextField, Card } from '@mui/material';



  export const SummerCourse= () => {
    //Iniciamos el estado formulario con un valor por defecto
     const [formulario, setFormulario] = useState({
            nombre: 'Pepe',
            email: 'pepe@pepe.es',
            curso: 'React.js',
        })
    const {nombre,email,curso} = formulario;
    
     const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value //[] establece propiedad computada del objeto, si no puesieramos [] crearría una nueva propiedad del objeto
        })
      }
    //Usamos el useEffect, es recomendable disparar por separado los useEffect que tengan responsabilidad Única
     //este sólo se ejecutará la primera vez que se carge el componente
    useEffect(() => {
                console.log('se ejecuta el useEffect')
            }, [])
    //este se ejecutará cada vez que cambie el estado del formulario
    useEffect(() => {
                console.log('ha cambiado el estado del formulario')
            }, [formulario])
     //este se ejecutará cada vez que cambie el estado del nombre
    useEffect(() => {
        console.log('Ha cambiado el nombre')
    }, [nombre])

    const handleSubmit = (e) => {
      e.preventDefault()

      const data = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        curso: e.target.curso.value,
    }
    setFormulario(data);
  }

    return(
      <section>
        <Card sx={{
          paddingTop:8,
          paddingBottom: 0
        }} className='formContainer'>
        <FormControl onSubmit={handleSubmit}>
            <h3>Pedir info de cursos</h3>
            <Input sx={{margin:3}} type="text" name='nombre' placeholder="Nombre"/>
            <Input sx={{margin:3}} type="email" name='email' placeholder="Email"/>
            <Input sx={{margin:3}} type="text" name='curso' placeholder="Curso"/>
            <TextField sx={{margin:3}} name="comentario" placeholder='Comentario' />
            <Button sx={{margin:3}} type='submit' >Enviar</Button>
        </FormControl>           
        </Card>
       
      </section>

    )
};
export default SummerCourse;