import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiRedis,
  // SiDocker,
  // SiNaver,
  // SiGoogle,
} from "react-icons/si";
// import { FaAws } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs /> },
      // { name: "Gemini API", icon: <SiGoogle /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  // {
  //   title: "DevOps",
  //   skills: [
  //     { name: "AWS", icon: <FaAws /> },
  //     { name: "Docker", icon: <SiDocker /> },
  //     { name: "NCP", icon: <SiNaver /> },
  //   ],
  // },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-left mb-12 md:mb-0">
              Skills
            </h2>
          </motion.div>
          <motion.div
            className="md:w-2/3 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-bold mb-6 text-left text-[#A5EF2F]">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="text-5xl text-gray-700 hover:text-[#A5EF2F] transition-colors">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
