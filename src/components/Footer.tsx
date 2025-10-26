import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoblue from "@/assets/blue-logo.png";
import logosky from "@/assets/sky-logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background/80 via-background/70 to-background/90 border-t border-border backdrop-blur-lg dark:from-neutral-900/80 dark:via-neutral-900/60 dark:to-neutral-900/90">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🔹 Logo & Brand / Description */}
          <motion.div
            className="flex flex-col items-start space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoblue} alt="Logo Light" className="h-14 w-auto dark:hidden" />
              <img src={logosky} alt="Logo Dark" className="h-14 w-auto hidden dark:block" />
            </Link>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs">
              Frontend Developer & React Engineer creating modern web experiences,
              performance-focused solutions, and scalable digital products.
            </p>
          </motion.div>

          {/* 🔹 Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                { name: "About Me", to: "/about" },
                { name: "Projects", to: "/projects" },
                { name: "Certificates", to: "/certificates" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔹 Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
              Connect
            </h4>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com/vishnusaila", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/vishnu-saila/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://x.com/VishnuSaila", icon: Twitter, label: "Twitter" },
                { href: "mailto:sailavishnu12@gmail.com", icon: Mail, label: "Mail" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 md:p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <social.icon className="h-5 md:h-6 w-5 md:w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🔹 Divider & Bottom Text */}
        <div className="mt-10 pt-6 border-t border-border/60 text-center text-sm md:text-base text-muted-foreground">
          <p>© {new Date().getFullYear()} Vishnu’s Portfolio. All rights reserved.</p>
        </div>
      </div>

      {/* 🔹 Subtle Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-blue-500 to-cyan-400" />
    </footer>
  );
};

export default Footer;
