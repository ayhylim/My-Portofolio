import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Postman", "Figma"],
    },
    {
      category: "Specializations",
      skills: [
        "API Integration",
        "WhatsApp Automation",
        "Invoice Systems",
        "UI/UX Design",
        "AI Integration",
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas
            to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-primary/80 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
