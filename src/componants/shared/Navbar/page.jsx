import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className="hover:text-primary transition-all duration-300 active:scale-95"
        >
          <FaHome className="text-lg" /> Home
        </Link>
      </li>
      <li>
        <Link
          href={"/timeline"}
          className="hover:text-primary transition-all duration-300 active:scale-95"
        >
          <RiTimeLine className="text-lg" /> Timeline
        </Link>
      </li>
      <li>
        <Link
          href={"/stats"}
          className="hover:text-primary transition-all duration-300 active:scale-95"
        >
          <TfiStatsUp className="text-lg" /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar justify-between lg:justify-around bg-base-100/70 backdrop-blur-md shadow sticky top-0 z-[100] px-4 md:px-10 border-b border-base-200/50 transition-all">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-primary/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-4 w-56 p-3 shadow-xl border border-base-200"
          >
            {links}
          </ul>
        </div>

        <Link href={"/"} className="hover:opacity-90 transition-opacity">
          <Image
            src={logo}
            width={180} // Reduced for a more elegant profile
            height={60}
            alt="logo of keen-keeper"
            className="w-36 md:w-44 h-auto"
            priority
          />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 font-medium text-base-content/80">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
