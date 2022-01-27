import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import grad from "../assets/grad.png"

const Home: NextPage = () => {
  return (
   <div className="relative h-60 flex items-center justify-center m-2" >
    <Head>
      <title>Blog do Marcelo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Image 
    src={grad} 
    width={200} 
    height={100}
    className="z-0"
    layout="fill" />

    <div className="relative z-20 flex flex-col justify-center items-center">
      <h1 className="text-blue-800 font-semibold text-7xl">GM</h1>
      <Link href="/posts">
        <a className="font-semibold text-4xl">Post Page</a>
      </Link>
    </div>
  </div>
  )
}

export default Home
