
import Head from "next/head";
import Navigator from "@/components/Navigator";
import Hero from '@/components/Hero';
import Features from '@/components/Features';

import Footer from '@/components/Footer';
import CTA from '@/components/CTA2';

export default function Home() {

  return (

    <main className="overflow-hidden duration-500 border-box">

      <Head>
        <link rel="icon" href="" /> 
        <meta name="description" content="" />
      </Head>

      <Navigator/>


      <Hero/>
      <Features/>
      <CTA />
      <Footer />

    </main>
  )
}
