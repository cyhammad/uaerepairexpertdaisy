import { phoneNumber } from "@/lib/phoneNumber";
import Image from "next/image";
import React from "react";

const FixedCallButtons = () => {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2">
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-circle btn-lg btn-ghost bg-white text-neutral-content"
      >
        <Image src="/call.svg" width={50} height={50} />
      </a>
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="btn btn-square btn-ghost btn-lg bg-transparent text-neutral-content"
      >
        <Image src="/whatsapp.svg" width={150} height={150} />
      </a>
    </div>
  );
};

export default FixedCallButtons;
