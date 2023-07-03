import React, { useState } from 'react';
import FormProfile from './FormProfile';
import CardProfile from './CardProfile';

const Profile = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <FormProfile setMessage={setMessage} />
      <CardProfile message={message} />
    </div>
  );
};

export default Profile;
