import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

import logoblue from "@/assets/blue-logo.png";
import logosky from "@/assets/sky-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Internships", path: "/internships" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-background/80 via-background/70 to-background/80 border-b border-border shadow-lg transition-all duration-300 dark:from-neutral-900/80 dark:via-neutral-900/60 dark:to-neutral-900/80"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 🔹 Logo */}
          {/* 🔹 Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link to="/">
              {/* Light Theme Logo */}
              <img
                src={logoblue}
                alt="Vishnu Portfolio"
                className="h-20 w-auto dark:hidden"
              />
              {/* Dark Theme Logo */}
              <img
                src={logosky}
                alt="Vishnu Portfolio"
                className="h-20 w-auto hidden dark:block"
              />
            </Link>
          </motion.div>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-6 py-3 text-base md:text-lg font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-[3px] after:bg-primary after:rounded-full"
                      : "text-muted-foreground hover:text-primary hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-3/5 hover:after:h-[3px] hover:after:bg-primary/60 hover:after:rounded-full"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* 🔹 Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-muted/50 dark:hover:bg-neutral-800 transition-transform duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: isOpen ? 180 : 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-8 w-8 text-primary" /> : <Menu className="h-8 w-8" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* 🔹 Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden border-t border-border/40 dark:border-neutral-700/50"
            >
              <motion.div
                className="py-4 flex flex-col space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 rounded-md text-lg font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground hover:bg-primary/10 hover:text-primary dark:hover:bg-neutral-800 dark:hover:text-primary-light"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
