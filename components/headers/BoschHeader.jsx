import { phoneNumber } from "@/lib/phoneNumber";
import Image from "next/image";
import React from "react";

const BoschHeader = () => {
  return (
    <header className="fixed w-full z-50">
      <div className="h-[6px] w-full bg-[url('/boschstrip.png')] bg-cover"></div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/logos/boschdark.svg"
              width={160}
              height={50}
              alt="Bosch Logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white" href={`tel:${phoneNumber}`}>
            Call Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default BoschHeader;
