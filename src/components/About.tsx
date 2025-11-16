import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Zap, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building complete systems from frontend to backend",
    },
    {
      icon: Rocket,
      title: "System Design",
      description: "Creating scalable and maintainable architectures",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamlining workflows with intelligent solutions",
    },
    {
      icon: Target,
      title: "AI Integration",
      description: "Implementing cutting-edge AI technologies",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-semibold">16 Years Old Developer</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate young developer focused on creating real-world
              solutions despite my age. My journey in tech started with a
              curiosity about how systems work, and it has evolved into building
              production-ready applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across web development, automation systems,
              financial technologies, and AI integration. I believe in learning
              by building, and every project I undertake is an opportunity to
              push boundaries and create something meaningful.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React, Node.js, MongoDB, and modern JavaScript,
              with a strong focus on UI/UX design principles. Whether it's
              building automated billing systems or integrating AI for financial
              mentoring, I approach each challenge with dedication and
              innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
