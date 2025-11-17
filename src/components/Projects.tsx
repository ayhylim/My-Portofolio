import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/button";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    const projects = [
        {
            title: "Personal Finance Mentor AI – Perfin AI",
            description:
                "Sistem berbasis AI untuk edukasi keuangan dan pengelolaan keuangan pribadi. Dilengkapi rekomendasi penganggaran, simulasi statistik, dan perangkat edukasi ekonomi.",
            tech: ["React", "Node.js", "MongoDB", "AI Integration"],
            features: ["Rekomendasi Kelola Pengeluaran", "Simulasi Statistik", "Edukasi Ekonomi"],
            demoUrl: "https://perfinai.web.app/",
            githubUrl: "#",
            demoStatus: true
        },
        {
            title: "Wi-Fi Customer Billing Management",
            description:
                "Dasbor web lengkap untuk mengelola pelanggan Wi-Fi dengan pembuatan faktur otomatis dan integrasi WhatsApp untuk komunikasi pelanggan.",
            tech: ["React", "TypeScript", "Node.js", "MongoDB", "Baileys/Twilio"],
            features: ["Operasi CRUD Kustomer", "Automated PDF invoice generation", "WhatsApp automation"],
            demoUrl: "#",
            githubUrl: "#",
            demoStatus: false
        },
        {
            title: "WhatsApp Invoice Automation",
            description:
                "Sistem otomatisasi untuk mengirimkan faktur kepada pelanggan secara otomatis melalui WhatsApp. Menerapkan nomor admin untuk penerapan siap produksi.",
            tech: ["Node.js", "WhatsApp API", "Automation"],
            features: ["Notifikasi Kustomer Otomatis", "Set Nomer Admin", "Sistem Siap Produksi"],
            demoUrl: "#",
            githubUrl: "#",
            demoStatus: false
        },
        {
            title: "Portfolio UI/UX & Mini Tools",
            description:
                "Membuat Aplikasi Mini Berupa Todo List Dan Membuat Design UI Yang Menarik Dan UX Yang Baik",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            features: ["Komponen UI Modern", "Tools Interactive", "Design experiments"],
            demoUrl: "#",
            githubUrl: "#",
            demoStatus: false
        }
    ];

    return (
        <section id="projects" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Top 4 Projects Yang Pernah Saya Buat
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {project.features.map(feature => (
                                            <li
                                                key={feature}
                                                className="text-sm text-muted-foreground flex items-start"
                                            >
                                                <span className="text-primary mr-2">▹</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-primary hover:bg-primary/90"
                                        asChild
                                    >
                                        {project.demoStatus ? (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        ) : (
                                            ""
                                        )}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/50 hover:bg-primary/10"
                                        asChild
                                    ></Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
