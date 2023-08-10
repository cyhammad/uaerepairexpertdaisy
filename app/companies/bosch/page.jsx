import BoschAboutSection from "@/components/sections/BoschAboutSection";
import BoschMainSection from "@/components/sections/BoschMainSection";
import BoschServiceSection from "@/components/sections/BoschServiceSection";
import React from "react";

const BoschPage = () => {
  return (
    <div>
      <BoschMainSection />
      <BoschAboutSection />
      <div className="bg-secondary text-center py-10 text-3xl font-bold">
        OUR SERVICES
      </div>
      <BoschServiceSection
        heading="Bosch Repair Center"
        desc="Experience unparalleled Bosch washing machine repair excellence in
            Dubai and Abu Dhabi with UAE Repair Expert, your trusted destination
            for top-tier appliance restoration."
        image="/appliances/boschwm.png"
      />
    </div>
  );
};

export default BoschPage;
