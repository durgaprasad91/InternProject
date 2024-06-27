import Head from 'next/head';
import '../styles/Home.module.css'
import Navbar from '@/components/navbar';
import { Hero } from '@/components/hero';
import Footer from '@/components/footer';






export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="A simple hello world page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <Footer/>
      <main >
        
        
      </main>
    </div>
  );
}
