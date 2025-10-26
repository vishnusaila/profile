import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import {
  Award,
  Calendar,
  ExternalLink,
  Brain,
  TrendingUp,
  Cpu,
  Zap,
  ArrowRight,
  BookOpen,
  FileText,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import bgResume from "@/assets/resume.png";
import herobg from "@/assets/bg-home.jpg";
import cta from "@/assets/bg-home.jpg";

const ctaBg = herobg;
const bg = cta;

const Certificates = () => {
  const certificates = [
    {
      title: "Bharat Intern - Web Development Internship",
      issuer: "Bharat Intern",
      date: "2024",
      category: "Web Development",
      description:
        "Completed a 2-month internship focused on frontend and backend web technologies, developing responsive websites and dynamic features.",
      link: "https://drive.google.com/file/d/1kUIQ1sWHZio8mw3OHIUvuZrH-hm4-TJs/view?usp=drive_link",
    },
    {
      title: "IBM SkillBuild – Artificial Intelligence",
      issuer: "IBM SkillBuild",
      date: "2023",
      category: "Artificial Intelligence",
      description:
        "Completed a certified course on foundational concepts of Artificial Intelligence, including machine learning, neural networks, and real-world AI applications.",
      link: "https://drive.google.com/file/d/1kWIH6uVrQ1yd9cZSN7gizqKj0zkZnQ_A/view?usp=drive_link",
    },
    {
      title: "Board Infinity – Data Science Certification",
      issuer: "Board Infinity",
      date: "2023",
      category: "Data Science",
      description:
        "Completed a certified program covering data analysis, visualization, and machine learning techniques using Python and real-world datasets.",
      link: "https://drive.google.com/file/d/1kKgi3dgEkABoWht0maMCG4OGx_XotJgT/view?usp=drive_link",
    },
    {
      title: "College Hackathon Participation",
      issuer: "College",
      date: "2023",
      category: "Project / Hackathon",
      description:
        "Built a basic calculator web app using HTML, CSS, and Python as part of a team-based coding event at college.",
      link: "https://drive.google.com/file/d/1k9L7djD9gl3feTBelFPviwKc9bfI17Z9/view?usp=drive_link",
    },
    {
      title: "Cybersecurity Fundamentals – IBM SkillBuild",
      issuer: "IBM SkillBuild",
      date: "2023",
      category: "Cybersecurity",
      description:
        "Completed a foundational course on cybersecurity concepts, threats, and protection techniques through IBM SkillBuild.",
      link: "https://drive.google.com/file/d/1kWkwQAc6ykYQwdC6L5bmwpOylFvYhvCc/view?usp=drive_link",
    },
    {
      title: "Master AI Class – Freedom with AI",
      issuer: "Freedom with AI",
      date: "2024",
      category: "Artificial Intelligence",
      description:
        "Attended an intensive masterclass focused on Artificial Intelligence fundamentals, real-world applications, and future career paths.",
      link: "https://drive.google.com/file/d/1kRiJOBfzEG5245wArMQhD2zEt-9fHSG2/view?usp=drive_link",
    },
    {
      title: "SE & Testing with Agile – Infosys Springboard",
      issuer: "Infosys Springboard",
      date: "2023",
      category: "Software Engineering",
      description:
        "Completed a course covering Agile methodologies, software development life cycle (SDLC), and testing principles using real-world scenarios.",
      link: "https://drive.google.com/file/d/1kTabJ_ZJ3OcL5jwl0C1LSUGZMar57ODh/view?usp=drive_link",
    },
    {
      title: "Cybersecurity Essentials – Cisco",
      issuer: "Cisco Networking",
      date: "2023",
      category: "Cybersecurity",
      description:
        "Learned foundational concepts of cybersecurity including network security, threats, and best practices to protect digital assets.",
      link: "https://drive.google.com/file/d/1kFTIzyvQhjbrSkPQxfcZaKMbb0UWjNPB/view?usp=drive_link",
    },
    {
      title: "Python Intro & Advance – Edyst",
      issuer: "Edyst",
      date: "2023",
      category: "Programming (Python)",
      description:
        "Completed a 10-week course covering Python basics to advanced topics, including OOPs, file handling, and problem-solving.",
      link: "https://drive.google.com/file/d/1jvQU8x_iGWWkChroGkjnDRBTJvujVotk/view?usp=drive_link",
    },
    {
      title: "HTML – Infosys Springboard",
      issuer: "Infosys Springboard",
      date: "2023",
      category: "Web Development",
      description:
        "Completed a foundational course covering HTML elements, structure, and best practices for web development.",
      link: "https://drive.google.com/file/d/1jy1d7Gtq-0pniyfDhXvIJ0QbKe105y25/view?usp=drive_link",
    },
  ];

  const interestAreas = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      description:
        "Focus on LLMs, Neural Networks, and practical integration in web apps.",
    },
    {
      title: "Machine Learning",
      icon: Cpu,
      description:
        "Expertise in model training, validation, and data pipeline management.",
    },
    {
      title: "Data Science",
      icon: TrendingUp,
      description:
        "Proficiency in Python analysis tools (Pandas, NumPy) and visualization.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
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
              Certificates & Credentials
            </h1>
            <p className="text-xl text-white/90">
              Professional certifications demonstrating commitment to continuous learning
              and expertise in modern web technologies, AI, and data science.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 mt-12">
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all hover:shadow-lg group animate-slide-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {cert.category}
                      </Badge>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-glow transition-all">
                      <Award className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-primary/80 transition-colors dark:hover:text-white"
                      >
                        View Credential
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          

          {/* 🚀 NEW SECTION 3: Testimonials / Endorsements */}
          <section className="py-20 bg-gradient-to-b from-background to-muted/40 rounded-3xl mt-20 overflow-hidden">
            <div className="text-center mb-12 animate-fade-up">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3 animate-bounce" />
              <h2 className="text-3xl font-bold text-foreground">What Others Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
                Feedback and recommendations that reflect my teamwork, dedication, and growth mindset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Anita Sharma",
                  role: "Team Lead, Bharat Intern",
                  feedback:
                    "Vishnu consistently delivered high-quality work with attention to detail. His curiosity and learning attitude made a strong impact on our team.",
                },
                {
                  name: "Dr. Ramesh Kumar",
                  role: "Professor, KIET",
                  feedback:
                    "A bright student with deep enthusiasm for technology. Vishnu shows excellent initiative and leadership in every project he undertakes.",
                },
                {
                  name: "Priya Nair",
                  role: "Mentor, TechnohacksEdutec",
                  feedback:
                    "Highly committed and responsible intern. His problem-solving skills and communication stood out throughout the internship.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 text-center border-border bg-card/80 backdrop-blur-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500">
                    <CardContent>
                      <p className="text-muted-foreground mb-4 italic">
                        “{testimonial.feedback}”
                      </p>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 🚀 NEW SECTION 4: Tech Stack & Tools */}
          <section className="py-24 text-center mt-24 bg-gradient-to-r from-[#eaf1ff] via-[#f5f9ff] to-[#eef3ff] dark:from-[#0b1120] dark:via-[#0e1628] dark:to-[#101b33] rounded-3xl">
            <div className="mb-12 animate-fade-up">
              <Cpu className="h-8 w-8 text-primary mx-auto mb-3 animate-spin-slow" />
              <h2 className="text-3xl font-bold text-foreground">Tech Stack & Tools</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
                My toolbox blends creativity and performance — powering intelligent and scalable digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {[
                { name: "HTML", color: "bg-gradient-to-r from-[#e44d26] to-[#f16529]" },
                { name: "CSS", color: "bg-gradient-to-r from-[#2965f1] to-[#3c99dc]" },
                { name: "JavaScript", color: "bg-gradient-to-r from-[#f0db4f] to-[#f7e018]" },
                { name: "React", color: "bg-gradient-to-r from-[#61dafb] to-[#007acc]" },
                { name: "TypeScript", color: "bg-gradient-to-r from-[#3178c6] to-[#235a97]" },
                { name: "Python", color: "bg-gradient-to-r from-[#3776ab] to-[#1f5b91]" },
                { name: "Flask", color: "bg-gradient-to-r from-[#000000] to-[#4e4e4e]" },
                { name: "MySQL", color: "bg-gradient-to-r from-[#00758f] to-[#00618a]" },
                { name: "Git & GitHub", color: "bg-gradient-to-r from-[#f34f29] to-[#24292e]" },
                { name: "Bootstrap", color: "bg-gradient-to-r from-[#563d7c] to-[#7952b3]" },
                { name: "Tailwind CSS", color: "bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]" },
                { name: "VS Code", color: "bg-gradient-to-r from-[#007acc] to-[#004e8c]" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div
                    className={`rounded-xl text-center text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 p-4 ${tech.color}`}
                  >
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-16"
            >
              <Button
                variant="default"
                className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Explore My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </section>

          {/* Future Growth & Interests */}
          <section className="py-20">
            <div className="text-center mb-12 animate-fade-up">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-3xl font-bold text-foreground">
                Future Growth & Interests
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
                My curiosity extends beyond frontend into high-impact fields
                where my skills intersect with cutting-edge data science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {interestAreas.map((area, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <area.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Career CTA */}
          <section
            className="relative py-24 text-center overflow-hidden rounded-xl shadow-2xl"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-primary/80 dark:bg-primary/60"></div>

            <div className="relative z-10 container mx-auto px-4 max-w-3xl text-white">
              <Zap className="h-12 w-12 text-primary-foreground mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-up">
                Ready to Invest in Growth?
              </h2>
              <p
                className="text-xl text-white/90 mb-8 animate-fade-up"
                style={{ animationDelay: "150ms" }}
              >
                My skills, proven by these credentials, are ready to drive
                innovation and deliver measurable results for your team.
              </p>
              <Link to="/contact">
                        <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                          Connect for Opportunities
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
              
              
                
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certificates;
