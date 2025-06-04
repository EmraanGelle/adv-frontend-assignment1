// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'My App',
  description: 'React + Next.js Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
