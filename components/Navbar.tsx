// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#1a1a2e]/10"
          : "bg-white/90 backdrop-blur-md"
      } border-b border-[#1a1a2e]/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - مطابق للصورة */}
          <Link href="/" className="group">
            <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col leading-none">
              <span className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: "#1a1a2e" }}>
                HAEDARA
              </span>
              <span className="text-sm md:text-base font-light tracking-[0.3em]" style={{ color: "#0f3460" }}>
                WEBDESIGNER
              </span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:haedarahasan69@gmail.com"
              className="p-2.5 rounded-full text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-colors duration-300"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ahmad655656"
              target="_blank"
              className="p-2.5 rounded-full text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-colors duration-300"
            >
              <BsGithub size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300"
              style={{ backgroundColor: "#0f3460" }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full text-[#1a1a2e] hover:bg-[#1a1a2e]/10 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-[#1a1a2e]/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all duration-300 text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-[#1a1a2e]/10 flex flex-col gap-3"
              >
                <a
                  href="mailto:haedarahasan69@gmail.com"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all duration-300"
                >
                  <Mail size={20} /> Email
                </a>
                <a
                  href="https://github.com/ahmad655656"
                  target="_blank"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all duration-300"
                >
                  <BsGithub size={20} /> GitHub
                </a>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-5 py-4 text-white rounded-xl font-medium transition-all duration-300"
                  style={{ backgroundColor: "#0f3460" }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;