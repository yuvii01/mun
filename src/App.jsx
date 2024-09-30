import React, { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" min-h-screen py-10 px-[50px] md:px-[100px] font-sans text-gray-900">

      <div className="h-screen">

      </div>
      {/* Navbar */}
      <header className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#work" className="hover:text-black">
            Work
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-[#f8f0e8] p-6 text-lg md:hidden shadow-lg">
            <a href="#about" className="block py-2 hover:text-black">
              About
            </a>
            <a href="#work" className="block py-2 hover:text-black">
              Work
            </a>
            <a href="#contact" className="block py-2 hover:text-black">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="mt-16 grid md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
        <p className="text-lg mb-6 font-semibold">
            Branding | Image Making
          </p>
          <div className="text-5xl md:text-6xl font-bold leading-tight my-6">
            Visual Designer
          </div>
         
          <p className="mb-8 text-gray-600">
            This is a template Figma file, turned into code using Anima.
            <br />
            Learn more at AnimaApp.com
          </p>
          <button className="bg-black text-white px-[60px] py-[20px] rounded-md font-medium hover:bg-gray-800">
            Contact
          </button>
        </div>

        {/* Right Section */}
        <div className="flex mt-[-20px] pb-[20px] justify-center">
          <img
            src="/imges/HeaderImage 1.png"
            alt="Visual Designer"
            className="h-auto rounded-full"
          />
          {/* Decorative shapes */}
          {/* <div className="absolute top-0 right-0 bg-red-500 h-16 w-16 rounded-bl-full"></div>
          <div className="absolute top-0 left-8 bg-green-500 h-16 w-16 rounded-tr-full"></div> */}
        </div>
      </main>

      {/* Companies Section */}
      {/* <section className="flex ">
        <img src="https://via.placeholder.com/100" alt="Google" className="w-20 md:w-24" />
        <img src="https://via.placeholder.com/100" alt="Nike" className="w-20 md:w-24" />
        <img src="https://via.placeholder.com/100" alt="Samsung" className="w-20 md:w-24" />
        <img src="https://via.placeholder.com/100" alt="Apple" className="w-20 md:w-24" />
        <img src="https://via.placeholder.com/100" alt="Adidas" className="w-20 md:w-24" />
      </section> */}

      <section className="grid grid-cols-5  md:mx-10 flex-wrap justify-center mt-20 ">
     <div className='flex justify-center items-center'>
     <img src="/imges/Group 5334.png" alt="Google" className="w-15 md:w-36 h-5 md:h-10 " />
     </div>
     <div className='flex justify-center items-center'>
     <img src="/imges/image 1 (Traced).png" alt="Google" className="w-15 md:w-[120px] h-5 md:h-9"/>
      </div>
      <div className='flex justify-center items-center'>
      <img src="/imges/image 5 (Traced).png" alt="Google" className="w-15 md:w-[140px] h-5 md:h-8" />
      </div>
      <div className='flex justify-center items-center'>
      <img src="/imges/image 2 (Traced).png" alt="Google" className="w-15 md:w-20 md:h-10 h-5 " />
      </div>
      <div className='flex justify-center items-center'>
      <img src="/imges/image 7 (Traced).png" alt="Google" className="w-15 md:w-[110px] md:h-12 h-5" />
      </div>
    </section>

      {/* Cards Section */}
      <section className="mt-16 grid md:grid-cols-3 gap-12 text-center">
        {/* Card 1 */}
        <div className="p-8 ">
          <div className="relative mb-8 flex justify-center ">
            <img className="w-[25%]" src="/imges/Skills Card Icon.png" alt="" />
            {/* <div className="w-16 h-16 bg-red-200 rounded-full mx-auto"></div>
            <div className="absolute top-4 left-6 h-6 w-6 bg-black rotate-45 transform origin-bottom-right"></div> */}
          </div>
          <h3 className="text-xl font-semibold">Product Design</h3>
          <p className="mt-4 text-gray-600">
            This is a template Figma file, turned into code using Anima.
            <br />
            Learn more at AnimaApp.com
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 ">
          <div className="relative mb-8 flex justify-center ">
          <img className="w-[25%]" src="/imges/Skills Card Icon (1).png" alt="" />
          </div>
          <h3 className="text-xl font-semibold">Visual Design</h3>
          <p className="mt-4 text-gray-600">
            This is a template Figma file, turned into code using Anima.
            <br />
            Learn more at AnimaApp.com
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 ">
        <div className="relative mb-8 flex justify-center ">
            <img className="w-[25%]" src="/imges/Skills Card Icon (2).png" alt="" />
            {/* <div className="w-16 h-16 bg-red-200 rounded-full mx-auto"></div>
            <div className="absolute top-4 left-6 h-6 w-6 bg-black rotate-45 transform origin-bottom-right"></div> */}
          </div>
          <h3 className="text-xl font-semibold">Art Direction</h3>
          <p className="mt-4 text-gray-600">
            This is a template Figma file, turned into code using Anima.
            <br />
            Learn more at AnimaApp.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
