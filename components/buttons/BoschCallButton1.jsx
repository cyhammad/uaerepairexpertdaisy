"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import React from "react";

const BoschCallButton1 = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        window.open(`tel:${phoneNumber}`);
      }}
    >
      Call Now
    </button>
  );
};

export default BoschCallButton1;
