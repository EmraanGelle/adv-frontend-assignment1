import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <nav>
        <Link href="/features">Features</Link> |{' '}
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
