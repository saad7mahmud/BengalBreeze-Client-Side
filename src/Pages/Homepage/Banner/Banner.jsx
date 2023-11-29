import { motion } from "framer-motion";

const Banner = () => {
  const hoverAnimation = {
    hover: {
      scale: 0.5, // Scale the image to 110% on hover
      transition: { duration: 0.2 },
    },
    rest: {
      scale: 1, // Return to the original size when not hovered
    },
  };

  return (
    <div className="p-2 overflow-hidden">
      <div data-aos="fade-left" className="mt-10 mb-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <motion.img
            initial="rest"
            whileHover="hover"
            variants={hoverAnimation}
            src="https://i.ibb.co/LrPvYkx/Real-Estate-Agent-Illustration.png"
            className="max-w-xl w-1/2 rounded-lg "
          />
          <div>
            <h1 className="text-3xl font-light">
              BengalBreeze
              <br />
              <span className="text-[#eb5f31] font-bold">
                Where Dreams Find a Home
              </span>
            </h1>
            <p className="py-6 font-light">
              At BengalBreeze, we redefine the real estate experience by
              offering a unique blend of tradition and modernity in the vibrant
              landscape of Bangladesh. As
              <span className="text-[#2090ca] font-semibold italic">
                {" "}
                a pioneering real estate platform,
              </span>{" "}
              our commitment goes beyond transactions; we are dedicated to
              curating a seamless and inspiring journey for individuals seeking
              their dream homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
