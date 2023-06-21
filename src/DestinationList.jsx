import React from 'react'
import DestinationItem from './DestinationItem'
import bahamas from './assets/DestinationList/bahamas.jpg';
import chiangmai from './assets/DestinationList/chiangmai.jpg';
import griegas from './assets/DestinationList/islas-griegas.jpg';
import benidorm from './assets/DestinationList/benidorm.jpg';

function DestinationList() {

  const data = [
    {name:"Bahamas", price:"600", url:bahamas},
    {name:"Chiang Mai", price:"800", url:chiangmai},
    {name:"Islas griegas", price:"600", url:griegas},
    {name:"Benidorm", price:"100", url:benidorm}
  ]; 

  const paint = () => data.map((item,i) => <DestinationItem name={item.name} price={item.price} url={item.url} key={i}/>)
  
  return (
    <section>
        <h2>Mi lista de destinos</h2>
        {/* <DestinationItem name="Bahamas" price="600"/>
        <DestinationItem name="Chiang Mai" price="800"/>
        <DestinationItem name="Islas griegas" price="500"/>
        <DestinationItem name="Islas griegas" price="500"/> */}

        {paint()}
    </section>
  )
}

export default DestinationList