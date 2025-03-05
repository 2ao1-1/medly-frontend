import { motion } from "framer-motion";
import { BANNER_HEADER } from "../assets/imagesControl";

export default function Home() {
  return (
    <motion.main
      className="bg-teal-50 h-full w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* hero section */}
      <section className="w-full h-[650px]">
        <img
          src={BANNER_HEADER.img}
          alt={BANNER_HEADER.alt}
          className="w-full h-[650px] object-cover z-0 relative"
        />
        <div className="bg-teal-600/50 absolute top-0 z-10 w-full h-[650px]">
          <div className="container mx-auto pt-56 space-y-2 w-1/2">
            <h1 className="text-6xl font-bold text-white mb-12">
              Are you Still Waiting?
            </h1>

            <p className="text-2xl font-bold text-white">
              You don't need to wait anymore.
            </p>
            <p className="text-2xl font-bold text-white">
              Now you can book your turn from your place and set your
              appointment without waiting outside.
            </p>

            <button className="bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded-full mt-8">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
