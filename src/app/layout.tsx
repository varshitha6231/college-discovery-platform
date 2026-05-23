import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'College Discovery Platform',
  description: 'Find your perfect college in India',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gray-50 text-gray-900'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
