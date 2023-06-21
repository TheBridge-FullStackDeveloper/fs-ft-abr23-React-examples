import { useState } from 'react';

const HooksUseState = () => {
  
    const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    return (
        <>
            <button name='add' onClick={handleAddClick} >+</button>
            <h1>The value is: {count}</h1>
            <button name='sub' onClick={handleSubClick} >-</button>
        </>
    );
    
}
 
export default HooksUseState