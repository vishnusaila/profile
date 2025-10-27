import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Award,
  
} from "lucide-react";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import vtriage from "@/assets/vtriage.png";
import viise from "@/assets/viise.png";
import zentraa from "@/assets/zentra.png";

import bg from "@/assets/project.avif";

import hireme from "@/assets/key.png";
import key from "@/assets/hireme.png";

import edu from "@/assets/eduquizz.jpg";
import expenses from "@/assets/expenses.webp";
import language from "@/assets/lan.jpeg";
import stop from "@/assets/stop.png";
import chat from "@/assets/chat.jpg";
import student from "@/assets/student.jpg";

const Projects = () => {
  const projects = [
    
    {
      title: "📚 EduQuizzer – Interactive Quiz Web App",
      description:
        "EduQuizzer is a lightweight, responsive quiz app built with HTML, CSS, and JavaScript. Interactive multiple-choice questions on web development topics with instant feedback and scoring.",
      image: edu ,
      tags: ["HTML", "CSS", "JavaScript", "Quiz App"],
      github: "https://github.com/vishnusaila/Eduquizz",
      demo: "https://eduquizz.onrender.com/",
      status: "Active",
    },
    
   
    {
      title: "💰 Expense Tracker Application",
      description:
        "Responsive and user-friendly app to manage daily expenses. Users can add, edit, delete transactions, categorize expenses, and view summaries for financial decisions.",
      image: expenses,
      tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Node.js"],
      github: "https://github.com",
      demo: "https://my-xpense-tracker.netlify.app/",
      status: "Active",
    },
    {
      title: "🌍 Language Translator Application",
      description:
        "Powerful app translating text between multiple languages using NLP and APIs. Features clean backend logic for real-time translations.",
      image: language,
      tags: ["Python", "Flask", "FastAPI", "Google Translate API"],
      github: "https://github.com/KIET-NEST-PROJECTS-KBH/E-3F-317",
      demo: "https://github.com/KIET-NEST-PROJECTS-KBH/E-3F-317",
      status: "Development",
    },
    {
      title: "Stop Watch – Interactive Time Tracking Web App",
      description:
        "A lightweight, responsive stopwatch built using HTML, CSS, and JavaScript. Users can start, pause, reset the timer. Suitable for workouts, study sessions, and tasks.",
      image: stop,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vishnusaila/stop_watch",
      demo: "https://vishnusaila.github.io/stop_watch/one.html",
      status: "Active",
    },
    {
      title: "Realtime Chat Web App",
      description:
        "A real-time chat web app built with React.js and Firebase. Supports user registration, login, and instant messaging with Firebase Authentication and Firestore.",
      image: chat,
      tags: ["React.js", "Firebase", "Realtime Chat","Tailwind CSS"],
      github: "https://console.firebase.google.com/u/0/project/login-app-157a3/overview",
      demo: "https://login-app-157a3.web.app/",
      status: "Production",
    },
    {
      title: "Student Management System",
      description:
        "Full-stack web app built with Django for managing students, staff, and academic operations. Role-based authentication for Admins, Staff, and Students ensures secure data management.",
      image: student,
      tags: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "PostgreSQL"],
      github: "https://github.com/vishnusaila/student-management-system",
      demo: "https://student-management-system-9xkm.onrender.com/",
      status: "Production",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Active":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Development":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section
          className="-mt-24 py-24 md:py-32 text-center relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-3xl px-4 text-center animate-fade-up">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 mx-auto">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-primary">
              Latest Projects
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Explore my projects showcasing frontend, backend, and full-stack development skills
                with modern technologies.
            </p>
          </div>
        </section>

        <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">

        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Internship Projects at VtriageIT Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Vtriage IT Solutions",
                  image: vtriage, // you can replace with screenshot
                  description:
                    "Developed a professional IT company website showcasing services, client testimonials, and contact forms. Focused on responsiveness and SEO optimization.",
                  tools: ["React", "TypeScript", "Tailwind CSS", "Git", "GoDaddy", "PostgreSQL"],
                  liveLink: "https://vtriageit.com/",
                },
                {
                  title: "Viise Solutions",
                  image:viise, // update if needed
                  description:
                    "Designed and developed Viise Solutions’ corporate site highlighting its technology services. Integrated smooth animations, responsive layouts, and contact management.",
                  tools: ["React", "JavaScript", "MySQL", "EmailJS", "GitHub"],
                  liveLink: "https://viisesolutions.com/",
                },
                {
                  title: "Zentraa Technologies",
                  image: zentraa, // update image link
                  description:
                    "Built a modern business website for Zentraa Technologies featuring dynamic service pages and user-friendly design for improved customer engagement.",
                  tools: ["React", "Tailwind", "PostgreSQL", "Git", "BigRock"],
                  liveLink: "https://zentraahub.com/",
                },
              ].map((project, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  {/* Top Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark mb-4">
                      {project.description}
                    </p>

                    {/* Tools Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="dark:border-white dark:text-white text-xs px-2 py-1"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/80 transition-colors"
                      >
                        View Site
                      </a>
                      <a
                        href="https://github.com/vishnusaila"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-primary text-primary px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

      
          {/* Header */}
          {/* 🔹 Hero Section with Background Image */}
          {/* 🔹 WordPress Projects Section */}
{/* 🔹 WordPress Projects Section */}
          <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background dark:from-neutral-900 dark:via-neutral-800/40 dark:to-neutral-900">
            <div className="container mx-auto px-6 text-center">
              {/* Heading */}
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  WordPress Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore my WordPress projects that showcase theme customization, plugin integration, and SEO-friendly design built for real-world clients.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "🛒 Kavas Wholesale Hub",
                    desc: "An eCommerce WordPress platform for wholesale product sales, featuring WooCommerce integration and dynamic category management.",
                    link: "https://kavaswholesalehub.com/",
                  },
                  {
                    title: "💎 ULifestyle World",
                    desc: "A luxury lifestyle and shopping WordPress site built with Elementor, showcasing premium products and engaging visual design.",
                    link: "https://ulifestyle.world/",
                  },
                  {
                    title: "🌶️ Savorix Spices",
                    desc: "A spice brand WordPress website built for an authentic digital presence with custom theme styling and product catalog setup.",
                    link: "https://savorixspices.com/",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl bg-card shadow-md hover:shadow-lg border border-border/30 dark:border-neutral-700/40 text-left"
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.desc}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Visit Website →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          



          {/* Recruiter Attraction Section 1 */}
          <motion.div
            className="relative rounded-xl p-8 mb-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-white-500/20 dark:bg-blue-900/20 -z-10 rounded-xl"></div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">Why Hire Me?</h2>
              <p className="text-muted-foreground">
                I deliver clean, scalable, and responsive web applications with expertise in full-stack development. 
                Passionate about problem-solving and implementing modern web technologies to drive results.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={key} alt="Why Hire Me" className="w-58 h-48 object-contain" />
            </div>
          </motion.div>

          {/* Recruiter Attraction Section 2 */}
          <motion.div
            className="relative rounded-xl p-8 mb-12 flex flex-col md:flex-row-reverse items-center gap-6 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-green-500/20 dark:bg-green-900/20 -z-10 rounded-xl"></div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">Key Achievements</h2>
              <p className="text-muted-foreground">
                Completed multiple full-stack projects, internships, and hands-on experience with React, Typescript, Django, Flask, and database management. 
                Consistently delivered projects with responsive design, clean code, and modern UI/UX practices.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={hireme} alt="Key Achievements" className="w-58 h-48 object-contain" />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-border shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col bg-background"
              >
                {/* Image 40% */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content 60% */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      

      <Footer />
    </div>
  );
};

export default Projects;
