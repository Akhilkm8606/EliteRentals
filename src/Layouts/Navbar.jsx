import React, { useState } from "react";
import Dropdown from "../Components/Dropdown";
import DropI from "../Assets/Icons/stat_minus_1_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import LoginIcon from "@mui/icons-material/Login";
import WidgetsIcon from "@mui/icons-material/Widgets";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="p-4 sm:p-6 shadow-lg bg-black text-white">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between">
        {/* Logo + Toggle Button */}
        <div className="flex justify-between items-center w-full md:w-auto md:justify-center lg:justify-start px-4 sm:px-6">
          <a
            href="/"
            className="text-3xl sm:text-4xl font-premium font-extrabold text-gold tracking-wider"
          >
            <span className="text-white">Elite</span>Rentals
          </a>
          {/* Toggle Button (Hidden in lg, Right-aligned when visible) */}
          <button
            className="lg:hidden md:hidden text-white md:absolute md:right-6 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <WidgetsIcon />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
  className={`w-full lg:w-auto flex flex-col md:flex-row sm:mt-3 sm:ml-6 sm:items-start sm:border-l-2 sm:border-gold md:border-none sm:w-fit lg:mt-0 md:justify-center lg:flex-row lg:justify-end md:items-center gap-4 lg:gap-10 sm:px-6 lg:px-4
  transition-all duration-700 ease-in-out transform origin-top overflow-hidden
  ${
    isMobileMenuOpen
      ? "opacity-100 translate-y-0 scale-y-100 max-h-[500px]"
      : "opacity-0 -translate-y-5 scale-y-0 max-h-0"
  } md:opacity-100 md:max-h-full md:h-auto md:translate-y-0 md:scale-y-100`}
>


          <ul className="flex flex-col md:flex-row lg:flex-row  sm:items-start md:items-center lg:items-center  gap-4 lg:gap-6">
            <li className="hover:text-gold transition duration-700">Home</li>
            <Dropdown
              title="Premium Cars"
              options={[
                { label: "Ferrari", href: "/cars", icon: "🏎️" },
                { label: "Lamborghini", href: "/trucks", icon: "🔥" },
                { label: "Rolls Royce", href: "/bikes", icon: "👑" },
                { label: "Bentley", href: "/bikes", icon: "💎" },
                { label: "Porsche", href: "/bikes", icon: "⚡" },
              ]}
              icon={DropI}
            />
            <li className="hover:text-gold transition duration-700">
              Rental Plans
            </li>
            <li className="hover:text-gold transition duration-700">
              Locations
            </li>
            <li className="hover:text-gold transition duration-700">Account</li>
            <li className="hover:p-2 rounded-full border border-transparent transition-all duration-700 ease-in-out hover:text-gold hover:border-gold">
              Book Now
            </li>
            <li className="hover:text-gold transition duration-500">
              <LoginIcon />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
