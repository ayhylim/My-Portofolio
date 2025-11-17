import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Code2, Rocket, Zap, Target} from "lucide-react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});

    const highlights = [
        {
            icon: Code2,
            title: "Full-Stack Developer",
            description: "Membangun Sistem Dari Frontend Hingga Backend"
        },
        {
            icon: Rocket,
            title: "Sistem Design",
            description: "Membuat Arsitektur Yang Scaleable Dan Maintainable"
        },
        {
            icon: Zap,
            title: "Automation",
            description: "Alur Kerja Dengan Penjelasan Yang Mudah Dimengerti"
        },
        {
            icon: Target,
            title: "AI Integration",
            description: "Implementasi Teknologi Ai Pada Platform Jika Dibutuhkan"
        }
    ];

    return (
        <section id="about" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Tentang <span className="text-primary">Saya</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                            <span className="text-primary font-semibold">16 Years Old Developer</span>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Seorang pengembang muda yang bersemangat, saya berdedikasi menciptakan solusi dunia nyata,
                            dari rasa ingin tahu hingga aplikasi siap produksi. Keahlian inti saya mencakup pengembangan
                            web, sistem otomasi, teknologi keuangan (FinTech), dan integrasi AI.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Saya memiliki spesialisasi mendalam dalam React, Node.js, MongoDB, dan JavaScript modern,
                            didukung oleh fokus kuat pada prinsip UI/UX. Dengan menganut prinsip belajar sambil
                            membangun, saya menghadapi setiap tantangan mulai dari sistem penagihan otomatis hingga
                            integrasi AI untuk pendampingan keuangan dengan dedikasi dan inovasi untuk menciptakan hasil
                            yang bermakna.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">

                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{opacity: 0, y: 20}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.4, delay: 0.2 * index}}
                                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                    <highlight.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h3>
                                <p className="text-sm text-muted-foreground">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
