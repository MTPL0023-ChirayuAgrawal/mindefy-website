"use client";

import { useState } from "react";
import ServicesDrop from "./ServicesDrop";
import Link from "next/link";
import ProductsDropdown from "./ProductsDropdown";
import { ProjectDropdown } from "./ProjectDropdown";
import Image from "next/image";

export default function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#ebdad4] px-6 md:px-16 py-4 sticky top-0 z-20 shadow">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <Link href="/">
          <div className="relative w-36 md:w-44 aspect-[3.88/1] cursor-pointer">
            <Image
              src="/images/nav-logo.svg"
              alt="Mindefy Logo"
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Hamburger menu toggle (checkbox hack) */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden text-2xl font-bold cursor-pointer"
        >
          ☰
        </label>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-baseline space-x-6 font-semibold text-sm md:text-base text-[#3B3C4A]">
          <a href="#" className="hover:text-[#2c2178]">
            About Us
          </a>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5  cursor-pointer py-2">
              Services
              <Image
                src="/images/dropdown-icon.png"
                alt="All Screens"
                width={10}
                height={10}
                className="object-contain"
              />
            </p>

            {/* Services Dropdown with hover bridge */}
            {showServicesDropdown && (
              <>
                {/* Invisible hover bridge that spans full width */}
                <div className="fixed left-0 top-[4rem] w-full h-[5rem] z-30"></div>

                {/* Actual dropdown positioned from left edge */}
                <div className="fixed left-0 top-[4.5rem] w-full flex justify-start  z-40">
                  <ServicesDrop />
                </div>
              </>
            )}
          </div>

          {/* Products with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5  cursor-pointer py-2">
              Products
              <Image
                src="/images/dropdown-icon.png"
                alt="All Screens"
                width={10}
                height={10}
                className="object-contain"
              />
            </p>

            {/* Products Dropdown with hover bridge */}
            {showProductsDropdown && (
              <>
                {/* Actual dropdown positioned from left edge */}
                <div className="fixed left-[45%] top-[4.5rem] z-40">
                  <ProductsDropdown />
                </div>
              </>
            )}
          </div>

          {/* Projects with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowProjectsDropdown(true)}
            onMouseLeave={() => setShowProjectsDropdown(false)}
          >
            <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2">
              Projects
              <Image
                src="/images/dropdown-icon.png"
                alt="All Screens"
                width={10}
                height={10}
                className="object-contain"
              />
            </p>

            {/* Projects Dropdown with hover bridge */}
            {showProjectsDropdown && (
              <>
                {/* Actual dropdown positioned from left edge */}
                <div className="fixed left-[50.5%] top-[4.5rem] z-40">
                  <ProjectDropdown />
                </div>
              </>
            )}
          </div>

          <span className="hover:text-[#2c2178] cursor-pointer">
            Mindful UX &quot;Design Studio&quot;
          </span>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white">
            Let&apos;s Talk
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="peer-checked:flex hidden md:hidden flex-col gap-4 mt-4 text-sm font-medium text-[#3B3C4A]">
        <a href="#" className="hover:text-[#2c2178]">
          About Us
        </a>

        {/* Mobile Services (no hover, could add click toggle if needed) */}
        <span className="hover:text-[#2c2178] cursor-pointer">Services</span>

        <span className="hover:text-[#2c2178] cursor-pointer">Products</span>
        <span className="hover:text-[#2c2178] cursor-pointer">Projects</span>
        <span className="hover:text-[#2c2178] cursor-pointer">
          Mindful UX &quot;Design Studio&quot;
        </span>
        <button className="mt-2 px-4 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white">
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}
