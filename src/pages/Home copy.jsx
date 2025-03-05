import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../components/Menu";
import { useState, useRef } from "react";
import { BANNER_HEADER, BOOKING, DOCTOR_SIGN } from "../assets/imagesControl";
import {
  fadeIn,
  fadeInUp,
  scaleUp,
  staggerContainer,
} from "../styles/Animation";

export default function Home() {
  return (
    <motion.main
      className="bg-teal-50 h-full w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <Hero />
        <ServiceType />
        <section className="px-4 py-20 grid justify-center items-center">
          <AboutSection width="md:w-1/2" />
          <Testimonial />
        </section>
        <ContactSection />
      </div>
      <Footer />
    </motion.main>
  );
}

function Btn({ handleEvent, name, path, id }) {
  const handleClick = (e) => {
    if (id) {
      e.preventDefault();

      const element = document.getElementById(id.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (handleEvent) handleEvent;
  };
  return (
    <Link to={path || "#"}>
      <motion.button
        className="px-6 py-2 bg-[#00a79d] rounded-md my-4 text-white hover:bg-teal-800 hover:text-white"
        onClick={handleClick}
        whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.button>
    </Link>
  );
}

function Paragraph({ children, color = "black/75", bottom = 5 }) {
  return (
    <motion.p
      className={`mb-${bottom} text-${color} text-sm md:text-base`}
      variants={fadeInUp}
    >
      {children}
    </motion.p>
  );
}

function Hero() {
  return (
    <motion.section
      className="px-4 h-screen md:px-4 items-center relative grid grid-cols-2 gap-10"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="col-span-2 md:col-span-1 p-4 h-fit self-center"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-6xl font-bold mb-10 text-[#00a79d]"
          variants={fadeInUp}
        >
          Medly
        </motion.h1>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor
          quod quos repellendus ea nulla accusantium obcaecati aliquid optio
          accusamus quasi delectus eos repellat perspiciatis commodi non cum,
          sapiente perferendis.
        </Paragraph>
        <Btn name="Explore ..." id="#exploration" />
      </motion.div>
      <motion.div
        className="hidden md:block md:col-span-1 object-cover w-full self-center"
        variants={fadeIn}
      >
        <motion.img
          alt={BANNER_HEADER.alt}
          src={BANNER_HEADER.img}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.section>
  );
}

function ServiceType() {
  return (
    <motion.section
      id="exploration"
      className="py-16 md:h-screen items-center relative grid border-y border-gray-200 md:grid-cols-2 gap-10 md:gap-40 p-4"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <ServiceCard
        image={BOOKING.img}
        alt={BOOKING.alt}
        buttonText="Book an Appointment"
        path="/patient-booking"
      />
      <ServiceCard
        image={DOCTOR_SIGN.img}
        alt={DOCTOR_SIGN.alt}
        buttonText="Sign as new Doctor"
        path="/doctor-register"
      />
    </motion.section>
  );
}

function ServiceCard({ image, alt, buttonText, path }) {
  return (
    <motion.div
      className="relative item-center rounded-xl shadow-xl overflow-hidden"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative z-0 object-cover w-full self-center">
        <motion.img
          alt={alt}
          src={image}
          className="col-span-1 w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div
        className="absolute top-0 bg-gradient-to-t from-teal-900 text-white md:p-4 h-full self-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="hi relative md:top-[50%] p-2">
          <Paragraph color="#fff" bottom={0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor
            quod quos repellendus ea nulla accusantium obcaecati aliquid optio
            accusamus quasi delectus eos repellat perspiciatis commodi non cum,
            sapiente perferendis.
          </Paragraph>
          <Btn path={path} name={buttonText} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function AboutSection({ center = "text-center", color, width }) {
  return (
    <motion.div
      className={`${width} mx-auto ${center}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={scaleUp}
    >
      <motion.h2 className="text-3xl mb-4" variants={fadeInUp}>
        About
      </motion.h2>
      <Paragraph color={color}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat
        recusandae quasi atque excepturi error deserunt, vel, natus pariatur
        tempora possimus officia, voluptatibus aspernatur! Iure alias illum
        reiciendis voluptates temporibus.
      </Paragraph>
    </motion.div>
  );
}

function Testimonial() {
  const testimonials = [
    {
      author: "John James",
      opinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      role: "Patient",
    },
    {
      author: "Sarah Smith",
      opinion:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      role: "Doctor",
    },
    {
      author: "Mike Johnson",
      opinion:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      role: "Patient",
    },
    {
      author: "Emily Brown",
      opinion: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      role: "Doctor",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <motion.div
      className="w-full md:w-2/3 mx-auto px-4 py-10"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            className="text-3xl font-bold text-teal-800"
            variants={fadeInUp}
          >
            What Our Users Say
          </motion.h2>
          <div className="flex gap-2">
            <motion.button
              className={`p-2 rounded-full ${
                currentIndex === 0
                  ? "bg-gray-200 text-gray-400"
                  : "bg-teal-100 text-teal-600 hover:bg-teal-200"
              }`}
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              className={`p-2 rounded-full ${
                currentIndex === testimonials.length - 1
                  ? "bg-gray-200 text-gray-400"
                  : "bg-teal-100 text-teal-600 hover:bg-teal-200"
              }`}
              onClick={() => paginate(1)}
              disabled={currentIndex === testimonials.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </div>

        <AnimatePresence initial={false} custom={dragStart}>
          <motion.div
            key={currentIndex}
            custom={dragStart}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={(_, info) => setDragStart(info.point.x)}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full"
          >
            <TestCard
              author={testimonials[currentIndex].author}
              opinion={testimonials[currentIndex].opinion}
              role={testimonials[currentIndex].role}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-teal-600" : "bg-teal-200"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TestCard({ author, opinion, role }) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-8"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="w-16 h-16 bg-teal-100 rounded-full mb-4 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-2xl text-teal-600">{author.charAt(0)}</span>
        </motion.div>
        <p className="text-gray-600 italic mb-4">{opinion}</p>
        <h3 className="font-bold text-lg text-teal-800">{author}</h3>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </motion.div>
  );
}
function ContactSection() {
  return (
    <motion.section
      className="px-4 py-16 items-center grid"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="text-center" variants={fadeInUp}>
        <motion.h2 className="text-3xl mb-4" variants={fadeInUp}>
          Contact US
        </motion.h2>
        <Paragraph>if you face any problem contact us.</Paragraph>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-10 py-4">
        <MessageForm />
        <SocialLinks />
      </div>
    </motion.section>
  );
}

function MessageForm() {
  return (
    <motion.form className="py-4" variants={fadeInUp}>
      <motion.textarea
        type="text"
        name="message"
        placeholder="Type your message ..."
        className="bg-white rounded-md w-full p-4"
        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #00a79d" }}
        transition={{ duration: 0.2 }}
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Email@gmail.com"
        className="bg-white rounded-md w-full px-4 py-2 mt-4"
        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #00a79d" }}
        transition={{ duration: 0.2 }}
      />
      <Btn handleEvent={() => console.log("Message sent")} name="Send" />
    </motion.form>
  );
}

function SocialLinks({ col }) {
  return (
    <motion.div
      className={`flex ${
        col ? "md:flex-col" : "md:flex-row"
      } items-center gap-4 justify-center`}
      variants={fadeInUp}
    >
      {["Facebook", "Instagram", "X", "Whatsapp"].map((platform) => (
        <motion.div
          key={platform}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to={`www.${platform.toLowerCase()}.com`}>{platform}</Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Footer() {
  return (
    <motion.footer
      className="py-10 text-white bg-teal-900 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="w-full grid md:grid-cols-4 gap-8 p-4 items-center">
          <nav className="hidden md:flex justify-evenly items-center gap-4">
            <Menu col={true} color="#fff" />
          </nav>
          <AboutSection width="w-full" center="" color="#fff" />
          <MessageForm />
          <SocialLinks col={true} />
        </div>
      </div>
      <motion.p className="text-center pt-8" variants={fadeInUp}>
        Copyright @Ahmed Omran
      </motion.p>
    </motion.footer>
  );
}
