
import Head from "next/head";
import Navigator from "@/components/Navigator";
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {

  return (
    <main className="overflow-hidden duration-500 w-[100%] border-box">
      <Head>
        <link rel="icon" href="" /> 
        <meta name="description" content="" />
      </Head>
      <Navigator/>


      <Hero/>
      <Features/>
    </main>
  )
}
