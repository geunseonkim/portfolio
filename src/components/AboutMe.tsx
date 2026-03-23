import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-6 sm:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-left mb-12 md:mb-0">
              About Me
            </h2>
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-8 text-left">
              <p className="leading-relaxed">
                안녕하세요. 반갑습니다.{" "}
                <span className="text-[#A5EF2F] hover:underline transition-colors">
                  등산을 좋아하는 개발자
                </span>
                입니다.
              </p>
              <div>
                <h3 className="text-lg font-bold mb-2 bg-[#A5EF2F] text-black px-1 inline-block ">
                  시작한 계기
                </h3>
                <p className="leading-relaxed">
                  직접 무언가를 만들 수 있다는 매력에 이끌려 개발 공부를
                  시작했습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 bg-[#A5EF2F] text-black px-1 inline-block ">
                  동기부여
                </h3>
                <p className="leading-relaxed">
                  꾸준한 스터디와 그룹 프로젝트를 통해 함께 성장하는 즐거움을
                  경험했습니다. 특히 협업 과정에서 혼자보다 더 큰 시너지를
                  만들어낼 수 있다는 점을 깨달았고, 이러한 경험이 개발자로서의
                  진로를 자연스럽게 선택하게 되었습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 bg-[#A5EF2F] text-black px-1 inline-block ">
                  다짐
                </h3>
                <p className="leading-relaxed">
                  단순한 기능 구현을 넘어서 내부 동작 원리를 이해하고, 기본기가
                  탄탄한 개발자가 되고자 합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
