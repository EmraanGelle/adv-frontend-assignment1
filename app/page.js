'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to My React App!</h1>
      <nav>
        <ul>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </main>
  );
}
