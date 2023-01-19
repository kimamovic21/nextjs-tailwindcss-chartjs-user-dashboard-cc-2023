import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
      </main>
    </>
  );
};


// 1. brisemo nepotrebne HTML elemente
// 2. importujemo jsx komponente
// 3. kreiramo i uredujemo nove HTML elemente