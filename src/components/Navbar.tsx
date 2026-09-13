import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <img src={logo} alt="Brand Logo"className="h-10 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-[#D91B7E] transition">
            Home
          </a>

          <a href="/technologies" className="text-gray-700 hover:text-[#D91B7E] transition" >
            Technologies
          </a>

          <a href="/projects" className="text-gray-700 hover:text-[#D91B7E] transition" >
            Projects
          </a>

          <a href="/about" className="text-gray-700 hover:text-[#D91B7E] transition" >
            About
          </a>

          <a href="/contact" className="text-gray-700 hover:text-[#D91B7E] transition">
            Contact
          </a>
        </div>


        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-gray-700 hover:text-[#D91B7E]">
            Sign In
          </button>

          <button className="px-5 py-2 text-white bg-[#D91B7E] rounded-3xl hover:bg-[#8d3de0] transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;