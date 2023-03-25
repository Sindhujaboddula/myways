import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://example.com/getUser?email=${email}`);
      if (response.data) {
        alert('User Found');
      } else {
        await axios.post('https://example.com/createUser', { name, email, phone });
        alert('User Created Successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;