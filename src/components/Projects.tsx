import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
  details: string[];
  githubUrl: string;
  deployUrl?: string;
}

const mainProjectsData: Project[] = [
  {
    title: "쇼미더구조",
    imageUrl: "/src/assets/main.png",
    description:
      "사용자가 업로드한 프로젝트를 AI로 분석해서 시각화 다이어그램과 주요 파일 요약을 제공하는 서비스",
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ"],
    details: [
      "단일 프롬프트의 얕은 분석 문제를 해결하기 위해 구조 파악 → 관계 추출 → 요약의 3단계 AI 파이프라인 설계",
      "단계별 pipelineContext와 Redis 기반 상태 저장으로 장애 발생 시 재시작 가능 구조 구현",
      "CoT 기반 evidence, confidence 필드를 도입해 추론 과정의 신뢰성 확보 및 할루시네이션 감소",
      "BullMQ + Semaphore 기반 동시성 제어 및 Exponential Backoff 재시도 로직 구현",
      "SSE 기반 실시간 진행 상태 전송으로 UX 개선 및 불필요한 요청 최소화",
      "GraphBuilder를 통해 AI 결과를 Node-Edge 구조로 변환하여 시각화 성능 개선",
    ],
    githubUrl: "https://github.com/boostcampwm2025/web28-show-me-the-gujo",
    deployUrl: "https://showmethegujo.site",
  },
];

// const subProjectsData: Project[] = [
//   {
//     title: "서브 프로젝트 1",
//     imageUrl: "/src/assets/me.png",
//     description:
//       "서브 프로젝트",
//     tags: ["JavaScript", "Node.js", "Express"],
//     details: [
//       "",
//     ],
//     githubUrl: "#",
//   },
// ];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={index}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-400 shadow-lg transition-all duration-300 hover:shadow-gray-600"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-opacity duration-300 "
        />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h4 className="mb-2 text-lg">{project.title}</h4>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-xs border border-gray-40 opacity-80 px-1 text-xs font-medium text-gray"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex items-center py-20 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
          </motion.div>
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 text-left text-[#A5EF2F]">
                Main Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mainProjectsData.map(renderProjectCard)}
              </div>
            </div>
            {/* <div>
              <h3 className="text-2xl font-bold mb-8 text-left text-[#A5EF2F]">
                Sub Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subProjectsData.map(renderProjectCard)}
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-black border border-gray-500 rounded-lg shadow-xl max-w-3xl w-full md:w-2/3 lg:w-1/3 min-h-[75vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl z-10"
              >
                <IoClose />
              </button>
              <div className="p-8 mb-2">
                <h3 className="text-2xl mb-3">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-3">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-xs border border-gray-40 opacity-80 px-1.5 py-0.5 text-xs font-medium text-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <hr className="border-gray-700 my-6" />
                <ul className="space-y-4 mb-8 list-disc list-inside text-gray-300">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 flex gap-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-gray"
                >
                  <SiGithub />
                </a>
                {selectedProject.deployUrl && (
                  <a
                    href={selectedProject.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg text-white "
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
