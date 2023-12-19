/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { LuSlidersHorizontal } from "react-icons/lu";

export default function NavbarNew() {
  return (
    <>
      <div className="fixed top-0 w-full h-14 bg-zinc-50 border-b border-zinc-300 z-10 flex flex-col justify-center px-5">
        <div className="flex justify-between h-10">
          {/* Logo*/}
          <Link href="/" className="flex flex-col justify-center">
            <img
              src="/images/logo-jhunt-text.svg"
              alt="Logo"
              className="h-full"
            />
          </Link>
          {/* search box */}
          <div className="w-full flex justify-center px-5">
            <div className="w-full max-w-[536px] overflow-hidden flex rounded-lg border border-zinc-300 h-10">
              <input className=" w-full h-full px-2"></input>
              <button className="flex items-center justify-center h-full border-l bg-[#1F1695] px-4 font-semibold text-white">
                Cerca
              </button>
            </div>
            <div className="h-full flex flex-col justify-center pl-3">
              <LuSlidersHorizontal size={20} />
            </div>
          </div>
          {/* User */}
          <div className="flex justify-end h-full">
            <div className="flex flex-col justify-center leading-none pr-2">
              <h1 className="text-right">Lavoratore</h1>
              <h1 className="text-right font-bold whitespace-nowrap">
                Nome Cognome
              </h1>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-full bg-black h-10 w-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14"></div>
    </>
  );
}
