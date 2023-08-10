import Image from "next/image";
import React from "react";
import BoschCallButton1 from "../buttons/BoschCallButton1";

const BoschServiceSection = ({ image, heading, desc }) => {
  return (
    <div className="hero min-h-screen bg-primary-focus text-black" id="services">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={image}
          className="max-w-sm w-52 h-fit sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96"
          width={300}
          height={300}
        />
        <div>
          <h1 className="text-4xl font-bold border-y border-black pt-1 pb-2">
            {heading}
          </h1>
          <ul className="list-disc list-inside py-6">
            <li>Bosch Washing Machine Repair</li>
            <li>Bosch Dryer Repair</li>
            <li>Bosch Oven Repair</li>
            <li>Bosch Stove Repair</li>
            <li>Bosch Cooker Repair</li>
            <li>Bosch Refrigerator Repair</li>
          </ul>
          <BoschCallButton1 />
        </div>
      </div>
    </div>
  );
};

export default BoschServiceSection;
