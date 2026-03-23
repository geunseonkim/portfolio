import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "/src/assets/me.png";

const Hero = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // const textX = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  // const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={targetRef}
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center relative pt-20 overflow-hidden"
    >
      {/* Image Section */}
      <motion.div
        style={{ x: imageX, opacity: imageOpacity }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex items-center justify-center z-10 relative py-8 md:py-0"
      >
        <img
          src={profileImage}
          alt="김근선 프로필 이미지"
          className="w-full max-w-xs md:max-w-md lg:max-w-xl shadow-2xl object-contain"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        // style={{ x: textX, opacity: textOpacity }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full md:w-1/2 flex items-center sm:px-6 md:pr-20 z-10 relative pb-20 md:pb-0"
      >
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
            문제를 해결하며 성장하는,
            <br />
            프론트엔드 개발자{" "}
            <span className="bg-[#A5EF2F] text-black font-bold">김근선</span>
            입니다.
          </h1>
          <p className="text-base md:text-xl lg:text-md mb-8 ">
            사용자에게 더 나은 경험을 제공하기 위해 끊임없이 고민하고, 새로운
            기술을 배우는 것을 즐깁니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
