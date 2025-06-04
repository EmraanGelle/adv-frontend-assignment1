'use client';
import { useState } from 'react';

export default function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <p>Hello! This message is toggled by state.</p>}
    </div>
  );
}
