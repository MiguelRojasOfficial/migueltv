'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, Github } from "lucide-react";
import { SiVercel } from "react-icons/si";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface State {
  success: boolean;
  errors: Record<string, string[]>;
  loading: boolean;
}

export default function PortfolioPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState<State>({
    success: false,
    errors: {},
    loading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ success: false, errors: {}, loading: true });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setState({ success: true, errors: {}, loading: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setState({ success: false, errors: result.errors || {}, loading: false });
      }
    } catch {
      setState({ success: false, errors: { general: ["Error de red"] }, loading: false });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Miguelflix",
      description: "Next + React + Typescript + Tailwind + CSS + API de Contentful",
      image: "/images/miguelflix.png",
      url: "https://miguelflix.onrender.com",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "CSS", "Contentful API"]
    },
    {
      id: 2,
      title: "Migueltify",
      description: "Next + React + Typescript + Tailwind + CSS + API de Deezer + Multilenguaje",
      image: "/images/migueltify.png",
      url: "https://migueltify.onrender.com",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Deezer API", "CSS"]
    },
    {
      id: 3,
      title: "MiguelStore",
      description: "Next + React + Typescript + Tailwind + CSS",
      image: "/images/miguelstore.png",
      url: "https://miguelstore.onrender.com",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "CSS"]
    },
    {
      id: 4,
      title: "Miguel CRM",
      description: "Next + React + Typescript + Tailwind + CSS",
      image: "/images/miguelcrm.png",
      url: "https://miguelcrm.onrender.com",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "CSS"]
    },
    {
      id: 5,
      title: "Airport 3D",
      description: "React + Three.js + Tailwind - Simulación 3D de aeropuerto interactivo",
      image: "/images/airplane.png",
      url: "https://miguelrojasoficial.onrender.com/",
      technologies: ["React", "Three.js", "Tailwind", "CSS"]
    }
  ];

  const socialLinks = [
    { id: 1, name: "GitHub", icon: <Github className="w-6 h-6" />, url: "https://github.com/MiguelRojasOfficial", text: "@MiguelRojasOfficial" },
    { id: 2, name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/miguelrojasoficial", text: "@miguelrojasoficial" },
    { id: 3, name: "Render", icon: (     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M26.827.01c-4.596-.216-8.461 3.107-9.12 7.487-.027.203-.066.4-.099.596-1.025 5.454-5.797 9.584-11.53 9.584a11.67 11.67 0 0 1-5.634-1.442.298.298 0 0 0-.444.262v18.854h17.602V22.097c0-2.439 1.971-4.419 4.4-4.419h4.4c4.982 0 8.99-4.15 8.795-9.197C35.02 3.937 31.35.226 26.827.01Z"/>
        </svg>
      ), 
      url: "https://miguelrojasoficial.onrender.com", text: "@miguelrojasofficial" },
    { id: 4, name: "Correo", icon: <Mail className="w-6 h-6" />, url: "mailto:miguelrojasy3@gmail.com", text: "miguelrojasy3@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Mis Proyectos
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
      				  key={project.id}
      				  initial={{ opacity: 0, y: 20 }}
      				  animate={{ opacity: 1, y: 0 }}
      				  transition={{ delay: index * 0.1 }}
      				  className="flex-none bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group relative flex flex-col h-full"
      				>
      				  <div className="overflow-hidden rounded-t-lg">
      				    <img
      				      src={project.image}
      				      alt={project.title}
      				      className="w-full h-auto object-cover transition-transform duration-300"
      				    />
      				  </div>
      				  
      				  <div className="p-4 flex flex-col flex-grow">
      				    <h3 className="font-semibold text-white text-lg mb-2">{project.title}</h3>
      				    <p className="text-gray-400 text-sm mb-3 leading-relaxed flex-grow">{project.description}</p>
      				    
      				    <div className="flex flex-wrap gap-1 mb-3">
      				      {project.technologies.map((tech, techIndex) => (
      				        <span 
      				          key={techIndex}
      				          className="bg-red-600 text-white text-xs px-2 py-1 rounded-full"
      				        >
      				          {tech}
      				        </span>
      				      ))}
      				    </div>
      				    
      				    <div className="flex justify-end w-full mt-auto">
      				      <a
      				        href={project.url}
      				        target="_blank"
      				        rel="noopener noreferrer"
      				        className="text-red-500 hover:text-red-400 font-semibold text-sm transition-colors inline-flex items-center"
      				      >
      				        Ver proyecto →
      				      </a>
      				    </div>
      				  </div>
      				</motion.div>
            ))}

            <motion.div
      			  initial={{ opacity: 0, y: 20 }}
      			  animate={{ opacity: 1, y: 0 }}
      			  transition={{ delay: 0.5 }}
      			  className="flex-none bg-gradient-to-br from-red-600 to-red-700 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between"
      			>
      			  <div className="md:pt-10">
      			    <h3 className="font-bold text-center text-white text-2xl md:pt-5 mb-4">Conecta conmigo</h3>
      			    
      			    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      			      {socialLinks.map((item) => (
      			        <a
      			          key={item.id}
      			          href={item.url}
      			          {...(item.name !== "Correo" && { target: "_blank", rel: "noopener noreferrer" })}
      			          className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
      			        >
      			          <span className="text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
      			            {item.icon}
      			          </span>
      			          <div className="flex-1 min-w-0">
      			            <p className="font-semibold text-white text-sm">{item.name}</p>
      			            <p className="text-red-100 text-xs truncate">{item.text}</p>
      			          </div>
      			        </a>
      			      ))}
      			    </div>
      			  </div>
      			</motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}