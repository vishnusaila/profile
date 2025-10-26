import { ArrowRight, Code2, Zap, Award, CheckCircle2, Server, LayoutGrid, Database, Palette, TrendingUp, Cpu, Flame, MousePointer2, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import herobg from "@/assets/bg-home.jpg";
import wordpress from "@/assets/word.png";
import frontend from "@/assets/fd.jpeg";
import po from "@/assets/PO.jpeg";
import practice from "@/assets/practice.jpg";
import practicee from "@/assets/vis.jpg";

const heroImage = herobg;
const profileImage = practicee;

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Home = () => {
  const features: Feature[] = [
    { icon: Code2, title: "Frontend Development", description: "Expert in React, TypeScript, and modern web technologies" },
    { icon: Zap, title: "Performance Optimization", description: "Building fast, responsive, and scalable applications" },
    { icon: Award, title: "Best Practices", description: "Clean code, testing, and industry-standard methodologies" },
  ];

  const techStack: Feature[] = [
    { icon: CheckCircle2, title: "HTML/CSS/JS", description: "Foundational mastery in semantic structure and modern CSS techniques." },
    { icon: Code2, title: "ReactJS & TypeScript", description: "Advanced component development and type-safe, scalable single-page applications." },
    { icon: Database, title: "MySQL/Python", description: "Experience building robust REST APIs and database queries." },
    { icon: LayoutGrid, title: "WordPress Ecosystem", description: "Custom theme development and API integrations." },
  ];

  const coreSkills: { name: string; icon: React.ElementType; level: string }[] = [
    { name: "ReactJS", icon: Code2, level: "Advanced" },
    { name: "TypeScript", icon: Zap, level: "Proficient" },
    { name: "JavaScript (ES6+)", icon: TrendingUp, level: "Expert" },
    { name: "HTML5 & CSS3", icon: Palette, level: "Expert" },
    { name: "Responsive Design", icon: LayoutGrid, level: "Advanced" },
  ];

  const backendDatabase: { name: string; icon: React.ElementType; color: string }[] = [
    { name: "Python", icon: Server, color: "text-blue-500" },
    { name: "MySQL", icon: Database, color: "text-yellow-600" },
  ];

  const fullStackExtension = [
    { name: "Firebase (NoSQL)", icon: Flame, color: "text-orange-500", detail: "Real-time data synchronization and secure authentication." },
    { name: "Django (Framework)", icon: Cpu, color: "text-green-600", detail: "Experience with Pythonic, scalable web application architecture." },
    { name: "WordPress", icon: Box, color: "text-blue-600", detail: "Building dynamic websites and managing content with WordPress CMS." },
    { name: "React", icon: Code2, color: "text-cyan-500", detail: "Creating interactive, component-based user interfaces with React." },
  ];

              const marqueeSkills = ["HTML5","CSS3","JAVASCRIPT","REACT","TYPESCRIPT","RESPONSIVE","WORDPRESS","MYSQL","PYTHON","ZERA"];
              const skillText = marqueeSkills.join(" • ");

          return (
            <div className="min-h-screen bg-background text-foreground dark:text-white">
              <Navigation />

              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute inset-0 bg-background/50 dark:bg-background/80" />
                </div>

                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12 pt-20 pb-16">
                  <div className="max-w-xl mx-auto md:mx-0 animate-fade-up text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">
                      React JS Developer
                      <span className="block mt-2 text-primary">Crafting Dynamic & Responsive Interfaces</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-white/80 mb-8">
                      I specialize in building interactive, high-performance web applications using React.js. Leveraging modern web technologies, I create seamless, responsive user interfaces that deliver exceptional user experiences across devices.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Link to="/projects">
                        <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                          View My Work
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button size="lg" variant="outline" className="text-foreground border-primary hover:bg-primary/10">
                          Get In Touch
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: '300ms' }}>
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl z-0 animate-pulse" />
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-2xl shadow-primary/50 animate-float"
                        style={{ animationDuration: '6s' }}
                      />
                    </div>
                  </div>
                </div>
              </section>


              <section className="py-20 bg-card">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-up">
                    What I Bring to the Table
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                      const bgImages = [frontend, po, practice];

                      return (
                        <div
                          key={index}
                          className="group relative rounded-2xl overflow-hidden shadow-lg border border-border cursor-pointer"
                        >
                          {/* Top Image Part */}
                          <div
                            className="h-48 w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${bgImages[index]})` }}
                          >
                            {/* Optional overlay for contrast */}
                            <div className="h-full w-full bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                          </div>

                          {/* Bottom Text Part */}
                          <div className="p-6 bg-card relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg transition-all">
                              <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>

                          {/* Motion overlay (optional glow on hover) */}
                          <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-black/20 transition-all"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>


              {/* Core Skills Section */}
              <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-up">
                    My Core Technology Stack
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                    {coreSkills.map((skill, index) => {
                      const animationClass = index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right";
                      return (
                        <Card key={index} className={`border-border p-6 text-center transition-all duration-300 hover:scale-110 hover:shadow-xl group bg-card ${animationClass}`} style={{ animationDelay: `${index * 150}ms` }}>
                          <skill.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:animate-bounce-y" />
                          <p className="font-semibold text-lg text-card-foreground">{skill.name}</p>
                          <span className="text-sm text-muted-foreground block mt-1">{skill.level}</span>
                        </Card>
                      );
                    })}
                  </div>

                  
                </div>
              </section>
            {/* 🌐 2. Responsive Skills Marquee Section with Moving Cards */}
            <section className="py-20 bg-card border-t border-border">
              <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-up">
                  Responsive & Modern Web Standards
                </h2>

                {/* Moving Skill Cards */}
                <div className="relative overflow-hidden py-6 border-y border-border">
                  <div className="flex animate-marquee space-x-6">
                    {[...[
                      { name: "HTML5", icon: "🌐", color: "#E44D26" },
                      { name: "CSS3", icon: "🎨", color: "#1572B6" },
                      { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
                      { name: "React", icon: "⚛️", color: "#61DAFB" },
                      { name: "TypeScript", icon: "🔷", color: "#3178C6" },
                      { name: "Tailwind CSS", icon: "💨", color: "#38BDF8" },
                      { name: "Python", icon: "🐍", color: "#3776AB" },
                      { name: "Flask", icon: "🔥", color: "#000000" },
                      { name: "Firebase", icon: "☁️", color: "#FFA611" },
                    ], ...[
                      { name: "HTML5", icon: "🌐", color: "#E44D26" },
                      { name: "CSS3", icon: "🎨", color: "#1572B6" },
                      { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
                      { name: "React", icon: "⚛️", color: "#61DAFB" },
                      { name: "TypeScript", icon: "🔷", color: "#3178C6" },
                      { name: "Tailwind CSS", icon: "💨", color: "#38BDF8" },
                      { name: "Python", icon: "🐍", color: "#3776AB" },
                      { name: "Flask", icon: "🔥", color: "#000000" },
                      { name: "Firebase", icon: "☁️", color: "#FFA611" },
                    ]].map((skill, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-44 h-44 rounded-2xl bg-white/5 border border-border shadow-md flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-lg"
                      >
                        <span
                          className="text-4xl mb-3"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-10 animate-fade-up">
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Continuously evolving stack for performance, design precision, and accessibility.
                  </p>
                </div>
              </div>
            </section>

            
            {/* 3. Focused Expertise (Motion Card Display) */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Beyond the Browser</h2>
                            <p className="text-xl text-muted-foreground">
                                While my primary focus is frontend, I possess essential full-stack knowledge crucial for API communication, performance, and data integration.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {techStack.map((item, index) => (
                                <Card 
                                    key={index}
                                    // 🚨 MOTION: Slide in from right, staggered
                                    className="p-6 bg-card border-border shadow-md transition-transform hover:scale-[1.02] animate-slide-in-right"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <item.icon className="h-8 w-8 text-primary mb-3" />
                                    <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Backend & Data Foundations (MySQL & Python) */}
            
            
                        {/* 5. Full-Stack Extension (Firebase & Django) with Fixed Background */}
            <section 
              className="relative py-24 overflow-hidden text-center text-white"
              style={{
                backgroundImage: `url(${practice})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed", // Parallax effect
              }}
            >
              {/* Dark Overlay for Readability */}
              <div className="absolute inset-0 bg-black/60" />

              <div className="container mx-auto px-4 relative z-10">
                {/* 🚨 MOTION: Fade up on title and text */}
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 animate-fade-up">
                  Extending to the Full Stack
                </h2>
                <p
                  className="text-xl mb-12 max-w-3xl mx-auto animate-fade-up"
                  style={{ animationDelay: "150ms" }}
                >
                  I leverage robust frameworks and fast database solutions to build scalable,
                  fully integrated applications.
                </p>

                {/* ✅ Responsive Grid for Mobile + Animation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                  {fullStackExtension.map((stack, index) => (
                    <Card
                      key={index}
                      className="p-6 w-full sm:w-72 bg-black/40 border-primary transition-transform hover:scale-105 hover:shadow-lg animate-slide-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <stack.icon
                        className={`h-10 w-10 mx-auto mb-3 ${stack.color} transition-transform duration-300 hover:rotate-6`}
                      />
                      <h3 className="text-xl font-semibold text-white">{stack.name}</h3>
                      <p className="text-sm text-white/80 mt-2">{stack.detail}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>


            <section className="py-20 bg-card">
              <div className="container mx-auto px-4 text-center">
                {/* 🚨 MOTION: Fade up on title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-up">
                  Backend & Data Foundations
                </h2>
                
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    ...backendDatabase,
                    { name: "Node.js", icon: Server, color: "text-green-500" } // Added Node.js
                  ].map((stack, index) => {
                    // Define different animations based on index
                    const animations = [
                      "animate-slide-in-left",
                      "animate-slide-in-right",
                      "animate-slide-in-top",
                      "animate-slide-in-bottom"
                    ];
                    const animationClass = animations[index % animations.length];

                    return (
                      <Card 
                        key={index}
                        className={`p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-card border-border shadow-lg transition-transform hover:rotate-2 ${animationClass}`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <stack.icon className={`h-12 w-12 mx-auto mb-3 ${stack.color}`} />
                        <h3 className="text-xl font-semibold text-card-foreground">{stack.name}</h3>
                        <p className="text-sm text-muted-foreground">Used for REST APIs and data integrity.</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>


           <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">

                  {/* Left Side Image with opacity overlay */}
                  <Card className="flex-shrink-0 w-full md:w-1/2 overflow-hidden shadow-xl relative animate-slide-in-left">
                    <img
                      src={wordpress} // make sure frontend is imported
                      alt="WordPress Projects"
                      className="w-full h-64 md:h-full object-cover"
                    />
                    {/* Optional colored overlay */}
                    <div className="absolute inset-0 "></div>
                  </Card>

                  {/* Right Side Content */}
                  <Card className="flex-1 p-8 md:p-12 shadow-xl animate-slide-in-right">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      Platform Flexibility: WordPress
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Experienced in custom WordPress theme development and using platforms as headless CMS for modern React/Next.js projects.
                    </p>
                    
                    <Link to="/projects">
                        <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                          See CMS Projects
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                  </Card>

                </div>
              </div>
            </section>





            {/* 6. Skills Showcase (Flip Cards) */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    {/* 🚨 MOTION: Fade up on title */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground animate-fade-up">
                        Showcase My Frontend Developer Skills
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { name: "React", detail: "State management, Hooks, Component Lifecycle." },
                            { name: "TypeScript", detail: "Type safety, Interface definition, Utility types." },
                            { name: "Python", detail: "REST API development with Django/Flask." },
                            { name: "WordPress", detail: "Headless CMS integration via REST/GraphQL." },
                        ].map((skill, index) => (
                            <div 
                                key={index} 
                                // 🚨 MOTION: Scale in, staggered
                                className="group h-64 perspective animate-scale-in" 
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Flip Card Container */}
                                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                                    
                                    {/* Front Side */}
                                    <div className="absolute w-full h-full backface-hidden bg-card border border-primary/50 shadow-elegant rounded-xl flex items-center justify-center p-6 transition-all duration-700">
                                        <div className="space-y-3">
                                            <Code2 className="h-10 w-10 text-primary mx-auto" />
                                            <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
                                            <p className="text-sm text-muted-foreground">Hover to see expertise</p>
                                        </div>
                                    </div>
                                    
                                    {/* Back Side */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary text-primary-foreground shadow-elegant rounded-xl flex items-center justify-center p-6">
                                        <div className="space-y-3">
                                            <Zap className="h-8 w-8 mx-auto" />
                                            <h4 className="text-lg font-semibold">{skill.name} Expertise</h4>
                                            <p className="text-sm">{skill.detail}</p>
                                            <Link to="/projects" className="text-xs underline opacity-80 hover:opacity-100 transition-opacity">View Projects</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 7. CMS/Platform Expertise (WordPress) */}
            

            {/* Final CTA Section (Retained) */}
            <section
              className="relative py-20 text-center overflow-hidden"
              style={{
                backgroundImage: `url(${practice})`, // imported image
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/60"></div> {/* Increased opacity to 60% */}

              <div className="relative container mx-auto px-4 border-t border-white/10 pt-20 text-white z-10">
                {/* 🚨 MOTION: Fade up on title and text */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
                  Let's Build Something Amazing
                </h2>
                <p
                  className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up"
                  style={{ animationDelay: "150ms" }}
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <Link to="/contact">
                        <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 ">
                          Start a Conversation
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                  </Link>
              </div>
            </section>


            <Footer />
        </div>
    );
};

export default Home;
