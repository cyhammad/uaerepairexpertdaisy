"use client";


import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";
import Image from "next/image";

const Header = () => {


  return (
    <header>
      <div className="  justify-center py-1 sm:py-0  text-black bg-[url(/images/backgrounds/main-bg.jpg)] bg-fixed font-raleway z-50">
        <div
          id="header"
          className="navbar max-w-7xl bg-transparent py-5"
        
        >
          <div className="navbar-start ">
            <div className="dropdown m-0">
              <label
                tabIndex={0}
                className="btn btn-ghost px-3 lg:hidden"
                onClick={() => toggleMenu()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 mt-10 md:mt-0 w-6"
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
            
                <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-primary rounded-box z-50">
                  <li className="hover:bg-black rounded-lg">
                    <Link className="text-black hover:text-white" href="/companies/bosch">Home</Link>
                  </li>
                  <li className="hover:bg-black rounded-lg">
                    <Link href="/companies/bosch hover:text-black" className="text-black hover:text-white">About Us</Link>
                  </li>
                  <li>
                    <summary>Services</summary>
                    <ul className="p-2 z-50 focus:!bg-primary hover:!bg-primary">
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices" className="hover:text-white">
                          Washing Machine Repair
                        </Link>
                      </li>
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices"  className="hover:text-white">
                          Refrigerator Repair
                        </Link>
                      </li>
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices"  className="hover:text-white">
                          Dishwasher Repair
                        </Link>
                      </li>
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices"  className="hover:text-white">
                          TV Repair
                        </Link>
                      </li>
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices"  className="hover:text-white">Dryer Repair</Link>
                      </li>
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices"  className="hover:text-white">
                          Stove / Cooker Repair
                        </Link>
                      </li>
                      <li className="hover:bg-black">
                        <Link href="/companies/bosch#boschservices"  className="hover:text-white">
                          Gas Oven Repair
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:bg-black rounded-lg">
                    <Link href="/companies/bosch" className="text-black hover:text-white">Contact Us</Link>
                  </li>
                </ul>
              
            </div>
      
            <Link
              href="/companies/bosch"
              className="btn btn-ghost h-[80px] rounded-xl normal-case sm:text-lg px-1"
            >
              <Image src="/logo.svg" className="overflow-hidden mt-1  md:mt-0" width={200} height={200} />
              <span className="ml-[-120px] mt-[-100px] md:ml-[-120px] md:mt-[-100px]  font-bold text-xl md:text-2xl">UAE REPAIR EXPERT</span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex z-50 text-info-content font-extrabold">
            <ul className="menu menu-horizontal px-1">
              <li className="hover:bg-black rounded">
                <Link href="/companies/bosch " className="hover:text-white ">Home</Link>
              </li>
              <li className="hover:bg-black rounded">
                <Link href="/companies/bosch"  className="hover:text-white " >About Us</Link>
              </li>
              <li className="hover:bg-black rounded">
                <Link href="/companies/bosch#boschservices"  className="hover:text-white ">Services</Link>
              </li>
              <li>
                <button
                  className="px-5 ml-2 bg-[black] text-white hover:bg-[white] hover:text-black rounded duration-150 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-[url(/images/backgrounds/main-bg.jpg)] bg-fixed">
      <div className="hero-overlay bg-opacity-60" />
        <div
          className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10"
          style={{ zIndex: 0 }}
        >
       
          <div>
            <h1 className="text-5xl font-bold font-raleway text-yellow-300 leading-tight">
              UAE Appliances Service & Repair Center
            </h1>
            <p className="py-6 text-lg text-white font-raleway">
              UAE Appliances Repairs is an authorised Bosch Service Centre in
              Dubai and Abu Dhabi. Trust our well-trained technicians to deliver
              professional & reliable Bosch repairs, backed by our authorization
              from the brand itself, ensuring your appliances are in capable
              hands.
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-base-300 rounded-xl text-white hover:text-black hover:font-extrabold hover:bg-[white]  duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4  bg-base-300 rounded-xl text-white hover:text-black hover:font-extrabold hover:bg-[white] duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
