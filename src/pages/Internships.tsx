import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Code } from "lucide-react";
import heroBg from "@/assets/internship.jpg"; // Hero background image
import growth from "@/assets/growth.jpg";

import vtriage from "@/assets/vtriage.png";
import viise from "@/assets/viise.png";
import zentraa from "@/assets/zentra.png";
const Internships = () => {
  const topInternship = {
    title: "Frontend Developer Intern",
    company: "VtriageIT Solutions",
    duration: "Sep 2025 – Dec 2025",
    location: "Miyapur, Hyderabad",
    type: "Internship",
    responsibilities: [
      "Hands-on experience with live frontend projects",
      "Worked with React, TypeScript, and Tailwind CSS",
      "Collaborated closely with the development team",
      "Gained real-time industry experience in IT field",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS","SQL", "Git", "HTML", "CSS","Jira"],
  };

  const internships = [
    {
      title: "FMML - IIIT Hyderabad",
      duration: "July 2022 – August 2023",
      description:
        "Completed a 50-week internship focused on Machine Learning fundamentals, data-driven methods, and neural networks. Gained experience in Python, NumPy, and TensorFlow.",
      certificate: "https://drive.google.com/file/d/1-Fociy3cCweGD3N-KLGoQSaMUtLJ1cWk/view?usp=sharing",
    },
    {
      title: "Web Full Stack Developer - AICTE",
      duration: "October 2024 – January 2025",
      description:
        "Developed responsive web applications using HTML, CSS, JavaScript, and backend integration with Flask/Django. Built full-stack projects with database connectivity.",
      certificate: "https://drive.google.com/file/d/13vd-RFOj_uiF0ghlsWdi9MFQrDXG1lW_/view?usp=sharing",
    },
    {
      title: "Web Developer Intern - Prodigy InfoTech",
      duration: "August 2024 – September 2024",
      description:
        "Completed a one-month internship focused on web development. Worked on frontend technologies like HTML, CSS, and JavaScript, and contributed to responsive website projects.",
      certificate: "https://drive.google.com/file/d/1jPHnUg13-3DHQeQQbnAh79iiWYYauIHx/view?usp=sharing",
    },
    {
      title: "Python Intern - Technohacks EduTech",
      duration: "September 2023 – October 2023",
      description:
        "Successfully completed a one-month internship focused on Python programming. Worked on mini projects such as a language translator, currency converter, and conditional logic apps.",
      certificate: "https://drive.google.com/file/d/1jgKCO1MM68DU752UfDBvK2sbqffEA4sA/view?usp=sharing",
    },
    {
      title: "Python Programming Intern - CodSoft",
      duration: "August 2023 – September 2023",
      description:
        "Completed a one-month internship in Python programming. Gained hands-on experience by developing basic Python applications and enhancing logical problem-solving skills.",
      certificate: "https://drive.google.com/file/d/1jYshZeU9qD_9ct_TW302A0hK8naikzLi/view?usp=sharing",
    },
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
    "Redux", "Material-UI", "Git", "SQL", "Python", "Flask", "Jira"
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative w-full h-[450px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white px-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-primary">Internships</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            These internships shaped my skills, knowledge, and experience in web development, Python, and machine learning.
          </p>
        </div>
      </section>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">

          {/* Top Internship Card */}
          <Card 
            className="border-border hover:border-primary transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300 group mb-12"
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground dark:text-white">{topInternship.title}</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground-dark font-medium">{topInternship.company}</p>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit">{topInternship.type}</Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground dark:text-muted-foreground-dark mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{topInternship.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{topInternship.location}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground dark:text-white">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {topInternship.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground dark:text-muted-foreground-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-foreground dark:text-white mt-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {topInternship.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="dark:border-white dark:text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Internship Projects under VtriageIT Solutions */}
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


          {/* Other Internship Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {internships.map((internship, idx) => (
              <Card 
                key={idx} 
                className="border-border hover:border-primary transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                      <Briefcase className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground dark:text-white">{internship.title}</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground-dark font-medium">{internship.duration}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4">
                    {internship.description}
                  </p>
                  <a 
                    href={internship.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Marquee Section */}
          <section className="mt-16 text-center overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Technologies</h2>
            <div className="relative mx-auto w-full max-w-4xl overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {skills.concat(skills).map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="inline-flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-foreground dark:text-white px-4 py-3 rounded-lg m-2 flex-shrink-0"
                  >
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          

          {/* Summary / Professional Growth Section */}
          <section className="mt-16">
          <div 
            className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url(${growth})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "400px", // increases height
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <CardContent className="relative p-12 md:p-16 text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Professional Growth
              </h2>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Through these experiences, I've developed strong technical skills, learned to work 
                effectively in team environments, and gained valuable insights into the software 
                development lifecycle. Each role has contributed to my growth as a developer, 
                teaching me not only technical skills but also the importance of communication, 
                collaboration, and continuous improvement.
              </p>
            </CardContent>
          </div>
        </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Internships;
