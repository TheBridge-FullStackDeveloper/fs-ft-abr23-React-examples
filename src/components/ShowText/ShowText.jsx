import { useState } from 'react';
    
const ShowText = ()=> {
const [showText, setShowText] = useState(false);

// Cambia el estado entre
const toggle = () => setShowText(!showText);


return (
          <div>
              <button type="button" onClick={() =>toggle()}>  
              {showText ? "Ocultar texto" : "Mostrar texto"}
              </button>
              <br />
              {
              showText?"¡Se muestra el texto!":""
              }
          </div>
        );
}

export default ShowText;