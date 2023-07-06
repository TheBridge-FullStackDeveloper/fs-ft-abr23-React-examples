import {useState} from 'react';
import DestinationItem from '../DestinationList/DestinationItem/DestinationItem';
import { FormControl, Input, Button, TextField, Card, InputLabel } from '@mui/material';


import data from './data.js';

function DestinationList() {

  const [destinations, setDestinations] = useState(data); // [{},{},{},{}] carga los datos del fichero


  const paint = () => destinations.map((item,i) => <DestinationItem name={item.name} price={item.price} url={item.url} key={i} deleteItem={()=>deleteItem(i)}/>)

  const styleButton = {
    margin: 1
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const url = e.target.url.value;

    const new_dest = {name,price,url}; 

    // Actualizar estado
    const confirmated = confirm(`¿Deseas crear nuevo destino?: 
      Name: ${name}, 
      Price: ${price}, 
      URL: ${url}
    `);

    confirmated?
              setDestinations([...destinations, new_dest])
              :alert("Operación anulada por user");
  }

  const deleteDestinations = () => {

    const confirmated = confirm(`¿Deseas borrar todos los destinos?`);
    
    confirmated?
    setDestinations([])
    :alert("Operación anulada por user"); 
  }
  const reloadDestinations = () => {
    
    const confirmated = confirm(`¿Deseas recargar destinos?`);

    confirmated?
    setDestinations(data)
    :alert("Operación anulada por user");
  }

  const deleteItem = (i) => { // i es posición 0,1,2,3,4 del [{},{},{},{}]

      setDestinations(destinations.filter((item,j)=> i !== j));
  }
  
  return (
    <section>
      <h2>Destinos</h2>

      <h3>Crear destino</h3>

      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <Input type="text" name="name" />

        <InputLabel htmlFor="price">Precio</InputLabel>
        <Input type="number" name="price" />

        <InputLabel htmlFor="url">URL imagen</InputLabel>
        <Input type="url" name="url"/>

        <Button type="submit">Send</Button>
      </form>

      <div className='buttonsContainer'>
      <Button sx={styleButton} onClick={deleteDestinations}>Borrar todo</Button>
      <Button sx={styleButton} onClick={reloadDestinations}>Recargar destinos</Button>        
      </div>


      <h3>Mi lista de destinos</h3>
      <section className='cardsContainer'>
      {paint()}
      </section>

    </section>
  )
}

export default DestinationList