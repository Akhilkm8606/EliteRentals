import React, { useEffect, useRef, useState } from "react";

function Dropdown({ title, options, icon }) {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  let closeTimeout = useRef(null);

  // 🔹 Detect Click Outside and Close Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 // 🔹 Handle Mouse Leave with Delay
 const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 300); // Delay closing by 300ms
  };

  // 🔹 Cancel Close on Mouse Enter
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  return (
    <div
      className="relative group flex flex-col"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter} // ✅ Open when hovering anywhere inside
      onMouseLeave={handleMouseLeave}    >
      {/* 🔹 Dropdown Button */}
      <button
  className="flex items-center gap-2 text-white hover:text-gold transition duration-100 group"
  onClick={() => setOpen(!isOpen)}
>
  {title}
  {icon && (
 <img
 src={icon}
 className={`w-5 transition-transform duration-300 ease-in-out transform
   group-hover:brightness-100 group-hover:invert-[48%] 
   group-hover:sepia-[100%] group-hover:saturate-[300%] 
   group-hover:hue-rotate-[20deg]`}
 style={{
   transform: `rotate(${isOpen ? (window.innerWidth >= 768 ? 180 : 90) : (window.innerWidth >= 768 ? 0 : -90)}deg)`,
 }}
 alt="icon"
/>


  )}
</button>


      {/* 🔹 Dropdown Menu with Smooth Hover Effect */}
      <div
        className={`absolute  md:mt-7 mt-3 w-40 ml-32 md:ml-0  bg-transparent text-white  border border-white shadow-md rounded-md transition-all duration-1000 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-4" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter} // Prevent closing when hovering on dropdown
        onMouseLeave={handleMouseLeave} // Close only after delay
      >
        {options.map((option, index) => (
          <a
            key={index}
            href={option.href}
            className="block px-4 py-2 items-center hover:text-gold transition duration-700"
          >
            {option.icon && <span className="mr-2 ">{option.icon}</span>}
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
