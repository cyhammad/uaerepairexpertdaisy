import React from "react";
import Service from "../Service";

const ServiceSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content py-32">
        <div className="max-w-7xl">
          <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
          <p className="mb-5">
            We provide the best services in Dubai and Abu Dhabi.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Service
              title="Washing Machine Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/washing-machine.png"
            />
            <Service
              title="Dishwasher Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/dishwasher-repair.png"
            />
            <Service
              title="Dryer Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/dryer-repair.jpg"
            />
            <Service
              title="Stove / Cooker Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/washing-machine.png"
            />
            <Service
              title="Gas Oven Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/oven-repair.png"
            />
            <Service
              title="Refrigerator Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/refrigerator-repair.jpg"
            />
            <Service
              title="Television Repair"
              desc="The best washing machine repair in dubai and abu dhabi"
              img="/tv-repair.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
