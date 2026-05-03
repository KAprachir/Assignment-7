"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    {
      href: "/timeline",
      label: "Timeline",
      icon: <RiTimeLine />,
    },
    {
      href: "/stats",
      label: "Stats",
      icon: <TfiStatsUp />,
    },
  ];

  return (
    <nav className="glass sticky top-0 z-[100] px-6 py-3 border-b border-white/20 transition-all">
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-2xl w-52 border border-slate-100">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={pathname === link.href ? "text-primary font-bold bg-primary/5" : ""}>
                    {link.icon} {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className="relative z-10 hover:opacity-80 transition-opacity">
          <Image
            src={logo}
            width={160}
            height={50}
            alt="Keen Keeper"
            className="w-32 md:w-40 h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-colors relative z-10 ${
                    isActive ? "text-primary" : "text-neutral/50 hover:text-neutral"
                  }`}
                >
                  {link.icon}
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white shadow-sm border border-slate-200 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button (Optional placeholder for balance) */}
        <div className="hidden lg:block">
          <button className="btn-premium px-6 py-2.5 bg-neutral text-white rounded-xl text-sm font-bold shadow-lg shadow-neutral/20 hover:bg-neutral/90">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

