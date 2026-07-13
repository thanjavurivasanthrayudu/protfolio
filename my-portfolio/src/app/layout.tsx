import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thanjavuri Vasanth Rayudu | Portfolio',
  description: 'Computer Science Engineering student passionate about software development, Java programming, and building scalable web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen selection:bg-red-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
