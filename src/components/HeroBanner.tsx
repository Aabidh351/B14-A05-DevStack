import heroImage from "../assets/banner-stack.png";
import gradientStyle from "../Styles/gradientStyle.ts"
const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <div className="flex flex-col md:flex-row items-center gap-12">

        <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Your Ideal
              <br />
              <span className={`${gradientStyle} bg-clip-text text-transparent`}>
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>


            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className={`${gradientStyle} px-7 py-3 text-white font-medium rounded-lg`}>
                Explore Technologies
              </button>
              <button className="px-15 py-3 text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-[#D91B7E] hover:text-white">
                Learn More
              </button>

            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Development Stack"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

