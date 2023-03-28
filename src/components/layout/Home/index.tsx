import React from "react";
import Image from 'next/image'

import img from '../../../../public/images/revolt-164_6wVEHfI-unsplash (1).png'

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col text-center align-middle justify-center mt-20">
        <h1 className=" text-4xl font-bold  text-blue-500 ">
          Hire the professionals for your work.
        </h1>
        <p className="mt-4 text-2xl font-semibold">
          Work must be done with perfection!
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-4 text-center content-center">
  <div className="..."><Image src={img} alt="#" className="rounded min-w-full	h-30	"/></div>
  <div className="..."><Image src={img} alt="#" className=" rounded min-w-full h-30"/></div>
  <div className="..."><Image src={img} alt="#" className=" rounded min-w-full h-30"/></div>
  <div className="col-span-2 ..."><Image src={img} alt="#" className="rounded min-w-full h-11"/></div>
  <div className="..."><Image src={img} alt="#" className="rounded min-w-full	 h-100"/></div>
  <div className="..."><Image src={img} alt="#" className="rounded min-w-full	 h-30"/></div>
  <div className="col-span-2 ..."><Image src={img} alt="#" className="rounded min-w-full h-30"/></div>
</div>
    </div>
  );
};

export default Home;
