import {motion, AnimatePresence} from "framer-motion";
import {ArrowRight, Download} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useState, useEffect} from "react";
import rizkiPortrait from "@/assets/rizki-portrait.png";

const Hero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const rotatingTexts = ["Muhammad Rizki Ramadhan", "Young Developer", "Build Anything!"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        element?.scrollIntoView({behavior: "smooth", block: "start"});
    };

    const scrollToProjects = () => {
        const element = document.getElementById("projects");
        element?.scrollIntoView({behavior: "smooth", block: "start"});
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradient glow */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="inline-block"
                    ></motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"
                    >
                        Hi, Saya{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentTextIndex}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.5}}
                                className="bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent inline-block"
                            >
                                {rotatingTexts[currentTextIndex].split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{opacity: 0, x: -10}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: index * 0.05, duration: 0.2}}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </AnimatePresence>
                    </motion.h1>

                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground"
                    ></motion.h2>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                    >
                        Freelancer Website AI yang bantu anak muda mulai cuan dari ngefreelance, sambil nerima jasa
                        pembuatan website buat bisnis kamu naik kelas.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6}}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg hover:shadow-primary/50 transition-all duration-300"
                            onClick={() => {
                                window.open("https://rizkch-easycode.web.app/", "_blank");
                            }}
                        >
                            Jasa Pembuatan Webstie
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        {/* <Button
                            onClick={scrollToProjects}
                            variant="outline"
                            size="lg"
                            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                        >
                            View Projects
                            <Download className="ml-2 h-4 w-4" />
                        </Button> */}
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.6, delay: 0.3}}
                    className="relative hidden lg:block"
                >
                    <motion.div
                        animate={{y: [0, -10, 0]}}
                        transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <img
                                src={rizkiPortrait}
                                alt="Rizki - Young Developer Portrait"
                                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
