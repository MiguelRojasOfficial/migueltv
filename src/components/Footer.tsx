import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

const socialIcons = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tu-perfil' },
  { icon: FaGithub, href: 'https://github.com/tu-usuario' },
  { icon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M26.827.01c-4.596-.216-8.461 3.107-9.12 7.487-.027.203-.066.4-.099.596-1.025 5.454-5.797 9.584-11.53 9.584a11.67 11.67 0 0 1-5.634-1.442.298.298 0 0 0-.444.262v18.854h17.602V22.097c0-2.439 1.971-4.419 4.4-4.419h4.4c4.982 0 8.99-4.15 8.795-9.197C35.02 3.937 31.35.226 26.827.01Z" />
    </svg>
  ),
  href: 'https://miguelrojasoficial.onrender.com/',
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-6 px-4 border-t border-zinc-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm flex-wrap justify-center md:justify-start">
          <p className="text-white opacity-70">© 2025 Miguel TV. Todos los derechos reservados.</p>
        </div>

        <div className="flex gap-4">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;