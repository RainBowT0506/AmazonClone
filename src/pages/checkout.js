import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { RESOURCE_DOMAIN } from "../Constant";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src={RESOURCE_DOMAIN + "/ikj"}
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
          </div>
        </div>
        {/* Right */}
      </main>
    </div>
  );
}

export default Checkout;
