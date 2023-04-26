import React from 'react';
import Head from 'next/head';
import NewsLetter from '@/components/Newsletter';
import { FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'
import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>UnclutteredDesk - Coming Soon</title>
        <link rel="icon" href="../fav.svg" />
      </Head>
      <div className="container background mx-auto flex flex-col md:flex-row h-screen md:max-h-screen justify-center items-center gap-4 bg-black">
      <video src="../ud.mp4" alt="coming soon" className="w-full md:w-half h-full" muted autoPlay loop preload/>
        <div className="container bg-white background mx-auto flex flex-col h-full justify-center items-center">
          <h1 className="text-4xl font-bold mb-6 tracking-wider font-Comfortaa mt-4">Coming Soon</h1>
          <CountdownTimer/>
          <div className="mt-6 text-center font-medium px-2">
            <p className="mb-3 tracking-wider">We are excited to announce that we are in the process of creating something amazing that we can't wait to share with you.</p>
            <p className="font-normal transition duration-300 scale-95">Subscribe to our newsletter to stay updated and be the first to know when we launch!</p>
          </div>
          <NewsLetter />
          <div className="flex gap-5 mt-5 mb-4">
            <Link href="https://www.instagram.com/uncluttereddesk" className="text-ligthblack-0 text-opacity-40 hover:text-opacity-100"> <FaInstagram size={25} /> </Link>
            <a href="mailto:info.uncluttereddesk@gmail.com" className="text-ligthblack-0 text-opacity-40 hover:text-opacity-100"> <HiMail size={25} /> </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
