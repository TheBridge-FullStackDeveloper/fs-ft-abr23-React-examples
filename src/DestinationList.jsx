import React from 'react'
import DestinationItem from './DestinationItem'

function DestinationList() {
  return (
    <section>
        <h2>Mi lista de destinos</h2>
        <DestinationItem name="Bahamas"/>
        <DestinationItem name="Chiang Mai"/>
        <DestinationItem name="Islas griegas"/>
    </section>
  )
}

export default DestinationList