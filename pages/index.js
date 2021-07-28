import Head from "next/head";
import Image from "next/image";
import img from "../public/man.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className=" p-5 sm:p-1 sm:px-5 px-16 h-4/5  mt-8 ">
        <div className="container mx-auto h-full ">
          <div className="grid   lg:grid-cols-2 sm:grid-cols-1 gap-4 h-full justify-center items-center ">
            <div className=" bg-white rounded-full  w-2/3 mx-auto sm:p-2  lg:p-5 grid justify-center items-center shadow-lg ">
              <Image
                className="object-cover rounded-full"
                src={img}
                alt="man"
                width={400}
                height={400}
              />
            </div>
            <div className="bg-white flex flex-col text-justify justify-center  lg:h-96 sm:h-auto shadow-lg p-10 rounded-2xl">
              <h1 className="text-3xl font-bold">I'm Arshad </h1>
              <p className="mt-10 lg:leading-10 sm:leading-4 text-lg">
                My name is
                <span className="font-bold"> Mo Arshadraza Mo Qayyum</span>. I
                am living in Sangli (Maharshtra). I did my graduation in BCA
                from Shivaji University Kolhapur. My strengths are I am self
                motivated, Hard working and a disciplined person. My short term
                goal is to get a job in a reputed company and my long term goal
                is to achieve a good position where I can build my career and
                help the organization too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
