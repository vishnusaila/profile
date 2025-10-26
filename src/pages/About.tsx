import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Layout,
  Palette,
  Server,
  Smartphone,
  GraduationCap,
  Briefcase,
  Rocket,
  Home,
  Star,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import herobg from "@/assets/aboutbg.webp";
import profileImage from "@/assets/profile.jpg"; // optional, if used

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Layout,
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "State Management",
      icon: Code,
      items: ["Redux", "Context API", "React Query", "Zustand"],
    },
    {
      category: "Styling",
      icon: Palette,
      items: ["Styled Components", "SCSS", "Material-UI", "shadcn/ui"],
    },
    {
      category: "Tools",
      icon: Server,
      items: ["Git", "Webpack", "Vite", "npm/yarn", "VS Code"],
    },
    {
      category: "Backend Basics",
      icon: Database,
      items: ["Node.js", "REST APIs", "GraphQL", "Firebase"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      items: ["React Native", "Responsive Design", "PWA"],
    },
  ];

  const journey = [
    {
      icon: Home,
      title: "Family Background",
      description:
        "Born in Chittapur to a hardworking family. My father, Chenna Rao, is a farmer, and my mother, Tirupathamma, is a tailor and homemaker. Their discipline and humility shaped who I am.",
      color: "text-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Education Journey",
      description:
        "Completed schooling at ZPH School, Chittapur, where I was an active volleyball player and earned district-level trophies. Later, I joined Sri Srinivasa Junior College (MPC).",
      color: "text-green-500",
    },
    {
      icon: Briefcase,
      title: "College & Internships",
      description:
        "Pursued B.Tech in CSE (2021–2024). Completed multiple internships in Python, Web Development, Android, and AI. Also served as a Teaching Assistant & Team Leader guiding juniors.",
      color: "text-orange-500",
    },
    {
      icon: Rocket,
      title: "IIIT Hyderabad Internship",
      description:
        "Interned in the FMML program, gaining deep insights into AI and machine learning applications. Enhanced my ability to integrate theory with real-world tech challenges.",
      color: "text-purple-500",
    },
    {
      icon: Star,
      title: "Present & Future Goals",
      description:
        "Now focusing on becoming a full-stack and AI developer, with a long-term vision of leading impactful IT solutions and eventually becoming a CEO.",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">

        {/* Hero Section */}
        <section
          className="-mt-16 py-24 md:py-32 bg-primary dark:bg-card text-white dark:text-foreground relative overflow-hidden"
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Opacity overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-up">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary-foreground dark:text-primary" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4 light:text-foreground dark:text-foreground">
              React JS Developer
              <span className="block mt-2 text-primary">Experienced in Dynamic & Responsive Interfaces</span>
            </h1>
            <p className="text-lg md:text-xl text-white-700 dark:text-white/80 max-w-3xl mx-auto mb-6">
              Crafting interactive, high-performance web applications using React.js. I focus on building seamless, responsive user interfaces that deliver excellent user experiences across all devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
              <Link to="/projects">
                <button className="group bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center justify-center hover:bg-primary/90 transition">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="text-foreground border border-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </section>


        <div className="container mx-auto px-4 pb-16">

          {/* Professional Summary */}
          <Card className="-mt-16 mb-16 relative z-20 border-border shadow-2xl animate-fade-up">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Professional Summary
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a dedicated <strong>Frontend Developer</strong> and <strong>React Engineer</strong> with a strong foundation in building scalable, performant web applications. My journey in technology has equipped me with comprehensive knowledge of modern web development practices and emerging technologies.
                </p>
                <p>
                  Specializing in <strong>React and TypeScript</strong>, I create intuitive user interfaces that combine aesthetic appeal with functional excellence. I'm passionate about writing clean, maintainable code and staying current with the latest industry trends.
                </p>
                <p>
                  My approach to development emphasizes collaboration, continuous learning, and delivering solutions that exceed expectations. I thrive in environments that challenge me to grow and innovate.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* My Journey Section */}
          <section className="py-10">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground animate-fade-up">
                My Life & Career Milestones
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 animate-fade-up">
                Every step taught me something — from humble beginnings to building real-world technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {journey.map((item, index) => (
                <Card
                  key={index}
                  className="group bg-card border-border hover:border-primary transition-all hover:shadow-xl animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 mb-5 group-hover:bg-primary transition-all">
                      <item.icon
                        className={`h-7 w-7 ${item.color} group-hover:text-primary-foreground transition-all`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <div className="py-10 mt-8">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card 
                  key={index} 
                  className="border-border hover:border-primary transition-all group animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all">
                        <skillGroup.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Learning */}
          <Card className="border-border mt-16 animate-fade-up">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Education & Learning
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Continuous Learning Journey</h3>
                  <p className="text-muted-foreground">
                    I'm committed to staying at the forefront of web development through continuous education, online courses, and hands-on projects. My learning path includes advanced <strong>React patterns</strong>, <strong>performance optimization</strong>, and modern <strong>architecture principles</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Areas of Expertise</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Modern React development with hooks and functional components</li>
                    <li>TypeScript for type-safe application development</li>
                    <li>Responsive and mobile-first design principles</li>
                    <li>State management and data flow optimization</li>
                    <li>Performance monitoring and optimization techniques</li>
                    <li>Accessibility (a11y) and SEO best practices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
