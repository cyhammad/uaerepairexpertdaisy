'use client';

import Link from 'next/link';
import phoneNumber from '../../content/phoneNumber';
import Image from 'next/image';
import ServicesSection from "../services/page"
function page () {
  return (
    <div >
      <div className=" w-full bg-black h-auto md:h-[500px] ">
        <div className="hero min-h-screen bg-[#fafafa]">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <img
              src="/section-bg.jpg"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                Enter the world of solutions!
              </h1>
              <p className="py-6 text-black">
                LG Service Center Dubai is dedicated to providing high-quality service and repairs of LG kitchen appliances. We provide repair services for all kinds of LG kitchen appliances, including fridges, cooking ranges, dishwashers, microwaves, and more. Our experienced technicians are available 24/7 to provide fast and efficient repairs for both residential and commercial customers. With our reliable LG service center in Dubai, you can rest assured that your appliance will be fixed quickly and efficiently with the highest quality parts available. We guarantee a fast response time for any repair requests and aim to ensure complete customer
              </p>
              <button
                className="btn btn-primary bg-base-300 text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50px] bg-white" />

      <div className="hero bg-primary ">
        <div className="flex flex-wrap px-2 md:px-10 justify-center lg:justify-between items-center py-5 w-full max-w-6xl gap-1">
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat  place-items-center">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="stat-title ">More than</div>
              <div className="stat-value">50+</div>
              <div className="stat-desc">years of field experience</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="stat-title">Around</div>
              <div className="stat-value">18000+</div>
              <div className="stat-desc">clients satisfied by service</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div className="stat-title">More than</div>
              <div className="stat-value">70+</div>
              <div className="stat-desc">services provided</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <div className="stat-title">More than</div>
              <div className="stat-value">800+</div>
              <div className="stat-desc">technicians available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[30px] bg-white" />
      <div className="w-full h-[100px] bg-white flex justify-center flex-col items-center">
        <div className="w-full h-[80px] bg-white md:h-full  md:mt-0 flex flex-col text-center align-middle">
          <h1 className="md:text-4xl text-3xl font-extrabold">Our Salient Distinctions</h1>
        </div>
        </div>
        <div className="w-full h-[30px] bg-white" />

      {/* features */}
      <div className="w-full h-auto bg-white md:h-[450px]  flex justify-center ">
        <div className="w-full h-auto md:h-full px-5   ">
          <div className="full h-auto md:h-full  bg-white flex items-center justify-evenly flex-col md:flex-row ">
            <div
              className="md:w-[300px] w-[340px] h-[430px] mt-3 md:mt-0  rounded-2xl "
              style={{backgroundImage: "url('/images/dryer/service.jpg')"}}
            >
              <div className="w-full  h-[150px] flex flex-col items-center mt-4  ">
                <div className="text-center">
                  <h1 className="text-black p-3 text-2xl font-bold">
                    Certified Technicians you can Trust
                  </h1>
                </div>
                <div>
                  <button
                    className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call US Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="md:w-[300px] w-[340px] h-[430px] mt-3 md:mt-0  rounded-2xl "
              style={{backgroundImage: "url('/images/stove/1.jpg')"}}
            >
              <div className="w-full h-[150px] flex flex-col items-center mt-4  ">
                <div className="text-center">
                  <h1 className="text-black p-3 text-2xl font-bold">
                    Get All OF Your Appliances Repaired
                  </h1>
                </div>
                <div>
                  <button
                    className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call US Now
                  </button>
                </div>
              </div>
            </div>

            <div
              className="md:w-[300px] w-[340px] h-[430px] mt-3 md:mt-0  rounded-2xl "
              style={{backgroundImage: "url('/images/fridge/1.jpg')"}}
            >
              <div className="w-full h-[150px] flex flex-col items-center mt-4  ">
                <div className="text-center">
                  <h1 className="text-black p-3 text-2xl font-bold">
                    Trusted and Preferred By Customers
                  </h1>
                </div>
                <div>
                  <button
                    className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call US Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="md:w-[300px] w-[340px] h-[430px] mt-3 md:mt-0  rounded-2xl "
              style={{backgroundImage: "url('/images/tv/service.jpg')"}}
            >
              <div className="w-full h-[150px] flex flex-col items-center mt-4  ">
                <div className="text-center">
                  <h1 className="text-black p-3 text-2xl font-bold">
                    Get Your Appliances Serviced At Same Day
                  </h1>
                </div>
                <div>
                  <button
                    className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call US Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] bg-white" />
      <div className="w-full h-[100px] bg-white flex justify-center flex-col items-center">
        <div className="w-full h-[80px] bg-white md:h-full  md:mt-0 flex flex-col text-center align-middle">
          <h1 className="md:text-4xl text-3xl font-extrabold">Our Services</h1>
        </div>
        </div>
      <ServicesSection   />
    </div>
    
  );
}

export default page;
