import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import ServiceSection from "@/components/sections/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">#1 Appliance Repair Company</h1>
            <p className="py-6">
              UAE Repair Expert is the best appliance repair company in Dubai
              and Abu Dhabi. We serve repair services for all home appliances of
              siemens, bosch, lg and samsung.
            </p>
            <button className="btn btn-primary">Call: +971000000000</button>
          </div>
        </div>
      </div>
      <ServiceSection />
      <Footer />
    </main>
  );
}
