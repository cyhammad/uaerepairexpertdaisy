import React from "react";
import BoschCallButton1 from "../buttons/BoschCallButton1";

const BoschAboutSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/boschaboutbg.png)",
      }}
      id="about"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          <p className="mb-5">
            Delivering unparalleled home appliance repair services in Dubai and
            Abu Dhabi, UAERepairExpert stands as your ultimate choice for
            exceptional quality and reliability.
          </p>
          <BoschCallButton1 />
        </div>
      </div>
    </div>
  );
};

export default BoschAboutSection;
