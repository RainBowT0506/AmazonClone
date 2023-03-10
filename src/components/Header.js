import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { RESOURCE_DOMAIN } from "../Constant";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  function renderLogo() {
    return (
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          onClick={() => router.push("/")}
          src={RESOURCE_DOMAIN + "/f90"}
          width={150}
          height={40}
          style={{ objectFit: "contain" }}
          className="cursor-pointer"
        />
      </div>
    );
  }

  function renderSearch() {
    return (
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ml-5">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          type="text"
        />
        <MagnifyingGlassIcon className="h-12 p-4" />
      </div>
    );
  }

  function renderLoginAndLogout() {
    return (
      <div onClick={signIn} className="link">
        <p>Hello RainBowT</p>
        <p className="font-extrabold md:text-sm">Account & Lists</p>
      </div>
    );
  }

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Logo */}
        {renderLogo()}

        {/* Search */}
        {renderSearch()}

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* Login/Logout */}
          {renderLoginAndLogout()}

          <div onClick={() => router.push("/orders")} className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          {/* Shopping Cart */}
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full 
            text-black font-bold"
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          ??????
        </p>
        <p className="link">????????????</p>
        <p className="link">???????????????</p>
        <p className="link">?????????</p>
        <p className="link hidden lg:inline-flex">?????????</p>
        <p className="link hidden lg:inline-flex">????????????</p>
        <p className="link hidden lg:inline-flex">??????????????????</p>
      </div>
    </header>
  );
}

export default Header;
