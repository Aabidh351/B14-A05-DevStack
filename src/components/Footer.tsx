import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white md:mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row gap-40">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img src={logo} alt="DevStack" className="h-8 w-auto object-contain"/>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm text-gray-600">
              <a href="#" className="transition hover:text-[#D91B7E] font-bold">
                GitHub
              </a>
              <a href="#" className="transition hover:text-[#D91B7E] font-bold">
                Twitter
              </a>
              <a href="#" className="transition hover:text-[#D91B7E] font-bold">
                LinkedIn
              </a>
            </div>

          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-900">
              Product
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="/" className="hover:text-[#D91B7E]">
                Home
              </a>
              <a href="/technologies" className="hover:text-[#D91B7E]">
                Technologies
              </a>
              <a href="/projects" className="hover:text-[#D91B7E]">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="/about" className="hover:text-[#D91B7E]">
                About
              </a>
              <a href="/contact" className="hover:text-[#D91B7E]">
                Contact
              </a>
              <a href="#" className="hover:text-[#D91B7E]">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-[#D91B7E]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D91B7E]">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        <div className="my-8 border-t border-gray-200" />
        <div className="flex flex-col gap-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D91B7E]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#D91B7E]">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;