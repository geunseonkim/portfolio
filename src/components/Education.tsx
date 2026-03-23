import { motion } from "framer-motion";

const activitiesData = [
  {
    period: "2025.06 - 2026.02",
    title: "네이버 부스트캠프 웹・모바일 10기 수료",
    description:
      "웹 풀사이클(Full-cycle) 개발에 대한 심도 깊은 학습과 두 번의 팀 프로젝트를 통해 협업 능력 및 문제 해결 능력을 향상시켰습니다. 또한 코드 리뷰와 피드백을 바탕으로 코드 품질을 개선하는 경험을 했습니다.",
    link: {
      url: "#",
      text: "🔗 관련 내용 보기",
    },
  },
  {
    period: "2024 - 2025",
    title: "코딩알려주는누나 스터디 수료",
    description:
      "HTML/CSS, JavaScript, React, Node.js, TypeScript 스터디에 참여하며 웹 개발의 전반적인 흐름을 학습했습니다. 다양한 개인 및 그룹 프로젝트를 통해 배운 내용을 직접 구현하며 실무 감각을 익혔습니다.",
    link: {
      url: "#",
      text: "🎥 수료 인터뷰 영상 보기",
    },
  },
  {
    period: "2017 - 2021",
    title: "충남대학교 물리학과 졸업",
    description:
      "물리학 전공을 통해 논리적 사고와 문제 해결 능력을 기를 수 있었으며, 복잡한 문제를 분석하고 해결하는 과정에 익숙해졌습니다.",
  },
];

const Education = () => {
  return (
    <section
      id="activities"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-left mb-12 md:mb-0">
              Education &<br />
              Activities
            </h2>
          </motion.div>
          <motion.div
            className="md:w-2/3 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {activitiesData.map((activity, index) => (
              <div key={index} className="text-left">
                <p className="text-sm text-gray-400 mb-1">{activity.period}</p>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-base leading-relaxed mb-3">
                  {activity.description}
                </p>
                {activity.link && (
                  <a
                    href={activity.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-semibold text-[#A5EF2F] hover:underline transition-colors"
                  >
                    {activity.link.text}
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
