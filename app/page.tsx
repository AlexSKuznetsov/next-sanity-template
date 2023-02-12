import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <p className='font-bold text-xxl pt-8 pl-4'>Hello world</p>
    </main>
  );
}
