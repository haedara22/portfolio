// components/Footer.tsx
import { personalInfo } from "@/data";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;