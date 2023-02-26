import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex item-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contained"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
