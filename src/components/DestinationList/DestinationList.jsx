import {useState} from 'react';
import DestinationItem from '../DestinationList/DestinationItem/DestinationItem';

import data from './data.js';

function DestinationList() {

  const [destinations, setDestinations] = useState(data); // [{},{},{},{}] carga los datos del fichero


  const paint = () => destinations.map((item,i) => <DestinationItem name={item.name} price={item.price} url={item.url} key={i} deleteItem={()=>deleteItem(i)}/>)


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
        <label htmlFor="name">Nombre</label><br />
        <input type="text" name="name" /><br />

        <label htmlFor="price">Precio</label><br />
        <input type="number" name="price" /><br />

        <label htmlFor="url">URL imagen</label><br />
        <input type="url" name="url"/><br />

        <button type="submit">Send</button>
      </form>

      <button onClick={deleteDestinations}>Borrar todo</button>
      <button onClick={reloadDestinations}>Recargar destinos</button>

      <h3>Mi lista de destinos</h3>
      <section className='cardsContainer'>
      {paint()}
      </section>

    </section>
  )
}

export default DestinationList