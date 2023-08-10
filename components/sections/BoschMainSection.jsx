import { phoneNumber } from "@/lib/phoneNumber";
import React from "react";
import BoschCallButton1 from "../buttons/BoschCallButton1";

const BoschMainSection = () => {
  return (
    <div className="hero min-h-screen bg-black" id="home">
      <div className="hero-content">
        <div className="max-w-md">
          <h6 className="text-2xl">Welcome to</h6>
          <h1 className="text-5xl font-bold border-y pt-1 pb-2 my-3">Services & Repairs</h1>
          <p className="pt-6 pb-3">
            We provide authorized bosch home appliances repair services in{" "}
            <span className="text-neutral-content">Dubai & Abu Dhabi</span>.
            Quickly book a repair visit for your appliance to get an authorized
            Bosch servicer.
          </p>
          <p className="pb-6">
            Call us now at{" "}
            <span className="text-neutral-content">{phoneNumber}</span>
          </p>
          <BoschCallButton1 />
        </div>
      </div>
    </div>
  );
};

export default BoschMainSection;
