import React, { useState } from 'react';
import {Input, Button, Card, InputLabel } from '@mui/material';

const FormProfile = ({ setMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setMessage(inputValue); // Pasamos el mensaje al componente hermano a través de la función setMessage
  };

  return (
    <div>
      <Input type="text" value={inputValue} onChange={handleChange} />
      <Button onClick={handleClick}>Enviar mensaje</Button>
    </div>
  );
};

export default FormProfile;