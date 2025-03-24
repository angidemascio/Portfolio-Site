"use client";

import { JSX, useState } from 'react';
import Image from 'next/image';
import {
  Heart,
  Github,
  Mail,
  Linkedin,
  Star,
  BookOpen,
  Code,
  Calendar,
  MapPin,
  User,
  Trophy
} from 'lucide-react';

interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  location: string;
  email: string;
  linkedin: string;
  gpa: string;
  graduationDate: string;
  minor: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  timeline: string;
  github: string;
}

interface Education {
  degree: string;
  institution: string;
  timeline: string;
  details: string[];
}

interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export default function Home(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('projects');

  const personalInfo: PersonalInfo = {
    name: "Angelina Demascio",
    title: "Computer Science Student",
    university: "Florida Atlantic University",
    location: "Boca Raton, FL",
    email: "angidemascio@outlook.com",
    linkedin: "https://www.linkedin.com/in/angidemascio",
    gpa: "3.76",
    graduationDate: "May 2025",
    minor: "Artificial Intelligence"
  };

  const skills: Skill[] = [
    { category: "Programming Languages", items: ["Rust", "Python", "C++", "JavaScript", "Java", "HTML", "CSS", "TypeScript"] },
    { category: "Technologies", items: ["IDA Pro", "Next.js", "React", "Node.js", "Git", "Postman", "TensorFlow", "PyTorch"] },
    { category: "Other Skills", items: ["Web Development", "Functional Programming", "Relational Databases", "Object-Oriented Programming", "Compilers", "Git", "Software Development", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Reverse Engineering", "Networking", "Binary Analysis"] },
    { category: "Languages", items: ["English (Native)", "Spanish (Professional Working)", "Portuguese (Limited Working)", "American Sign Language (Limited Working)"] }
  ];

  const projects: Project[] = [
    {
      title: "Luau Parser",
      description: "Building a recursive descent parser and lexer in Rust to tokenize and parse Luau code, handling expressions, assignments, and function calls with operator precedence and syntax tree generation.",
      tech: ["Rust", "Compilers", "Parser Design"],
      timeline: "Nov 2024 - Present",
      github: "https://github.com/angidemascio/Luau-Parser"
    },
    {
      title: "Huffman Encoder",
      description: "Developed a C++ command-line tool for efficient text compression and decompression using Huffman Coding. The project includes building a frequency table, constructing a Huffman tree, and generating binary codes to reduce file sizes.",
      tech: ["C++", "Data Structures", "Algorithms", "Compression"],
      timeline: "Feb 2025 - Mar 2025",
      github: "https://github.com/angidemascio/Huffman-Encoder"
    },
    {
      title: "Multi-Level Feedback Queue Scheduler",
      description: "Implemented SJF, FCFS, and MLFQ scheduling algorithms in Rust, with features for process tracking and performance reporting.",
      tech: ["Rust", "Operating Systems", "Scheduling Algorithms"],
      timeline: "Oct 2023 - Feb 2024",
      github: "https://github.com/angidemascio/MLFQ-Scheduler-Simulation"
    },
    {
      title: "Secure TCP Communication Framework",
      description: "Developed a Rust framework for secure TCP communication using Yak key exchange and Rc4 encryption with custom packet serialization.",
      tech: ["Rust", "Cryptography", "Networking", "Security"],
      timeline: "Nov 2022 - May 2023",
      github: "https://github.com/angidemascio/Secure-Chat-Application"
    }
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Florida Atlantic University",
      timeline: "Jun 2021 - May 2025",
      details: [
        "Minor: Artificial Intelligence",
        "GPA: 3.76 (Magna Cum Laude)",
        "SOAR-in-4 Scholar"
      ]
    }
  ];

  const awards: Award[] = [
    {
      title: "Dean's List",
      issuer: "Florida Atlantic University",
      date: "",
      description: "Excellent academic performance recognition. 7-time recipient."
    },
    {
      title: "President's List",
      issuer: "Florida Atlantic University",
      date: "",
      description: "Top academic performance recognition. 3-time recipient."
    },
    {
      title: "Florida Medallion Scholarship",
      issuer: "Florida Department of Education",
      date: "Jun 2021",
      description: "Merit-based scholarship for academic achievement in Florida."
    },
    {
      title: "First Place, DECA Quick Serve Restaurant Management Series",
      issuer: "DECA, Inc.",
      date: "May 2020",
      description: "First place at the state level for analyzing real-world business scenarios, formulating strategic solutions, and effectively presenting recommendations to industry professionals."
    },
    {
      title: "Most Likely to Succeed — High School Senior Recognition",
      issuer: "Spanish River High School",
      date: "May 2020",
      description: "Recognized for exceptional academic achievement, leadership, and potential for future success."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name} <Heart className="w-4 h-4 inline-block" /></h1>
              <h2 className="text-xl md:text-2xl mb-6">{personalInfo.title}</h2>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>{personalInfo.university}</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Graduating: {personalInfo.graduationDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center bg-white/30 hover:bg-white/40 rounded-full px-4 py-2 transition shadow-md"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>{personalInfo.email}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/30 hover:bg-white/40 rounded-full px-4 py-2 transition shadow-md"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/angidemascio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/30 hover:bg-white/40 rounded-full px-4 py-2 transition shadow-md"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/50 mx-auto shadow-lg relative">
                <div className="w-full h-full bg-purple-300 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">AD</span>
                  {<Image
                    src="/photo.jpg"
                    alt="Angelina Demascio"
                    fill
                    sizes="(max-width: 768px) 0px, 192px"
                    className="object-cover"
                    priority
                  />
                  }
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <Heart className="w-6 h-6 text-pink-200 animate-bounce" />
                <Heart className="w-6 h-6 text-pink-300 animate-bounce delay-75" />
                <Heart className="w-6 h-6 text-pink-200 animate-bounce delay-150" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative waves */}
        <div className="relative h-24 w-full overflow-hidden">
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%' }}
          >
            <path
              fill="white"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-6 font-medium transition-colors flex items-center ${activeTab === 'projects'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-600 hover:text-pink-500'
                }`}
            >
              <Code className="w-4 h-4 mr-2" />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`py-4 px-6 font-medium transition-colors flex items-center ${activeTab === 'skills'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-600 hover:text-pink-500'
                }`}
            >
              <Star className="w-4 h-4 mr-2" />
              Skills
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`py-4 px-6 font-medium transition-colors flex items-center ${activeTab === 'education'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-600 hover:text-pink-500'
                }`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`py-4 px-6 font-medium transition-colors flex items-center ${activeTab === 'awards'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-600 hover:text-pink-500'
                }`}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Awards
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-6 font-medium transition-colors flex items-center ${activeTab === 'about'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-600 hover:text-pink-500'
                }`}
            >
              <User className="w-4 h-4 mr-2" />
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 bg-white/80 rounded-lg shadow-md mt-8 mb-8">
        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-pink-50 rounded-lg shadow-md p-6 hover:shadow-lg transition border-2 border-pink-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-pink-700">{project.title}</h3>
                    <span className="text-sm text-pink-500 bg-pink-100 px-2 py-1 rounded-full">{project.timeline}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full border border-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 hover:text-pink-800 group"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>View on GitHub</span>
                    <Heart className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-pink-50 rounded-lg shadow-md p-6 border-2 border-pink-100">
                  <h3 className="text-lg font-semibold text-pink-700 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm border border-purple-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              My Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-pink-50 rounded-lg shadow-md p-6 mb-6 border-2 border-pink-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-pink-700">{edu.degree}</h3>
                  <span className="text-sm text-pink-500 bg-pink-100 px-2 py-1 rounded-full">{edu.timeline}</span>
                </div>
                <p className="text-lg text-pink-600 mb-4">{edu.institution}</p>
                <ul className="space-y-2">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <Heart className="w-4 h-4 mr-2 text-pink-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Awards Tab */}
        {activeTab === 'awards' && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              My Awards
            </h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-pink-50 rounded-lg shadow-md p-6 border-2 border-pink-100">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      🏆
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-pink-700">{award.title}</h3>
                        <span className="text-sm text-pink-500 bg-pink-100 px-2 py-1 rounded-full">{award.date}</span>
                      </div>
                      <p className="text-md text-pink-600 mb-2">{award.issuer}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-pink-600 flex items-center">
              <User className="w-6 h-6 mr-2" />
              About Me
            </h2>
            <div className="bg-pink-50 rounded-lg shadow-md p-6 border-2 border-pink-100">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-md mb-4 relative h-64">
                    <div className="bg-purple-200 w-full h-full flex items-center justify-center">
                      <Image
                        src="/boca_beach.jpg"
                        alt="Beach scene"
                        width={400}
                        height={256}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Quick Facts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        Computer Science at {personalInfo.university}
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        Minor in {personalInfo.minor}
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        GPA: {personalInfo.gpa} (Magna Cum Laude)
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        Graduating: {personalInfo.graduationDate}
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        Based in {personalInfo.location}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">Hello there! 👋</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If there&apos;s one thing you should know about me, it&apos;s that I <b>live</b> for optimization—not just in code, but in everything I do. I don&apos;t just want to understand how things work; I want to break them apart, push them to their limits, and rebuild them better than before.
                    </p>
                    <p>
                      You&apos;ll find me in the gym as often as you&apos;ll find me buried in code—because to me, progressive overload applies to everything. I break down my own performance—tracking every variable, optimizing every rep, every rest period, every meal. The same instinct that makes me obsessed with squeezing every last drop of performance out of a system is the one that drives me to push past my limits, over and over again.
                    </p>
                    <p>
                      I believe that growth happens not only through self-improvement but through collaboration and learning from others. Whether in a team or at the gym with my friends, I value those who push me to be better and challenge my perspectives. If you&apos;re all about lifelong learning, pushing boundaries, or simply enjoy diving into conversations about tech, fitness, or everything in between: let&apos;s connect!
                    </p>
                    <p>
                      (Bonus points if you love Rust as much as I do! 🦀)
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-pink-700">What I Love Digging Into:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                          <Code className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-gray-600"><b>Compilers & Programming Languages</b> – The magic behind turning code into something a machine understands. Parsing, optimization, and making things run faster, smarter, and more efficiently is my kind of challenge.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                          <Code className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-gray-600"><b>Reverse Engineering & Binary Analysis</b> – Nothing is truly a black box. Whether it’s disassembling executables, analyzing opcodes, or uncovering hidden behaviors, I love figuring out how things work at the lowest level.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                          <Code className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-gray-600"><b>Cryptography & the Math Behind It</b> – Prime numbers, modular arithmetic, and breaking down the fundamentals of secure systems. I love understanding how cryptographic protocols work, why they’re secure (or not), and how to implement them efficiently.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                          <Code className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-gray-600"><b>Operating Systems & Low-Level Systems Programming</b> – Memory management, process scheduling, and kernel internals—the foundation of everything we build. I’m fascinated by how the OS optimizes resources, handles security, and runs the software we rely on every day.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-8 rounded-t-3xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <a href={`mailto:${personalInfo.email}`} className="text-purple-200 hover:text-white transition">
                <Mail className="w-6 h-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/angidemascio" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-purple-200 text-sm">
            © {new Date().getFullYear()} Angelina Demascio. All rights reserved. <Heart className="w-4 h-4 inline-block" />
          </div>
        </div>
      </footer>
    </div>
  );
}