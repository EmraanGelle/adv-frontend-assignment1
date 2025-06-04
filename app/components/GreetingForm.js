'use client';
import { useState } from 'react';

export default function GreetingForm() {
  const [name, setName] = useState('');
  const [greetedName, setGreetedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreetedName(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Enter your name:</label><br />
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <button type="submit">Greet</button>
      </form>

      {greetedName && <h3>Hello, {greetedName}!</h3>}
    </div>
  );
}
