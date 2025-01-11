'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { SkillBadge } from "@/components/skill-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusAnimation } from "@/components/status-animation"
import { CursorAnimation } from "@/components/cursor-animation"

export default function Page() {
  const [currentLang, setCurrentLang] = useState(0)
  const welcomeTexts = [
    "Welcome", "欢迎", "مرحباً", "স্বাগত", "स्वागत", "いらっしゃいませ", 
    "Bienvenue", "Willkommen", "Bienvenido", "Bem-vindo", "Добро пожаловать", 
    "Hoş geldiniz", "Selamat datang", "환영합니다", "Καλώς ήρθατε"
  ];
  const learningTechs = [
    "Python", "C++", "JavaScript", "TypeScript", "React", "Flask", 
    "AWS", "Docker", "Kubernetes", "CI/CD", "TDD", "Spring Boot"
  ];
  const [currentTech, setCurrentTech] = useState(0)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {

    const langInterval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % welcomeTexts.length)
    }, 2000) // Changed from 3000 to 2000

    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % learningTechs.length)
    }, 2000)

    return () => {
      clearInterval(langInterval)
      clearInterval(techInterval)
    }
  }, [])

  const skills = [
    "Python", "C++", "SQL", "Java", "JavaScript", "TypeScript", "XML", "HTML/CSS",
    "Flask", "React", "Spring Boot", "wxWidgets", "pandas", "JWT", "Requests",
    "AWS (IAM, EC2, S3)", "Docker", "Kubernetes", "REST APIs", "TDD", "Agile",
    "CI/CD", "Git", "Jenkins", "CMake", "Visual Studio", "CLion", "PyCharm",
    "Doxygen", "UML", "Visual Paradigm", "GoogleTest"
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <StatusAnimation />
      <div className="absolute left-1/2 -translate-x-1/2 top-8">
        <motion.p
          key={currentLang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-gray-400"
        >
          {welcomeTexts[currentLang]}
        </motion.p>
      </div>
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="relative w-24 h-24">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_memoji-dJIJCNvlOr7AqxJwQOBlV76w4cZ2UX.png"
            alt="Sharf Logo"
            width={100}
            height={100}
            className="absolute top-0"
          />
        </Link>
        <nav className="space-x-8">
          <Link href="#experience" className="text-white hover:text-gray-300 transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-white hover:text-gray-300 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.section 
          id="hero" 
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-8">
                Hello there 👋🏽,
                <br />
                My name is Sharf.
              </h1>
              
              <div className="flex items-center text-2xl text-gray-400 mb-12">
                <span>I&apos;m a senior learning</span>
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="ml-2 text-blue-500"
                >
                  {learningTechs[currentTech]}
                </motion.span>
              </div>

              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  I&apos;m a motivated Computer Science student with expertise in{" "}
                  <span className="text-white">software development</span>,{" "}
                  <span className="text-white">cloud infrastructure</span>, and{" "}
                  <span className="text-white">security engineering</span>. With a strong foundation in designing scalable
                  systems and a commitment to delivering impactful solutions, I strive to enhance user experiences and drive
                  innovation.
                </p>
                <p>
                  My passion lies in applying technical skills to drive{" "}
                  <span className="text-white">mobility solutions</span> and{" "}
                  <span className="text-white">vehicle software innovation</span>. I have a proven track record in leading
                  cross-functional projects and delivering measurable results.
                </p>
              </div>

              <div className="mt-8 flex space-x-4">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-black" >Download Resume</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laptop-kw9aPOvj5h45hH3bMLKAbFzPfjxCLj.png"
                alt="Sharf with Laptop"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="experience" 
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Undergraduate Learning Assistant"
              company="Michigan State University"
              date="Aug. 2024 – Present"
              description="Mentored over 100 students in CSE 102, enhancing programming proficiency and Python problem-solving skills."
              achievements={[
                "Resulted in an average 35% improvement in student assessments and feedback",
                "Developed session plans and led programming workshops, increasing student engagement by 60%",
                "Collaborated with faculty and TAs to track student progress and align course content with learning objectives"
              ]}
            />
            <ExperienceCard
              title="Service Center Supervisor"
              company="Michigan State University - Student Life and Engagement"
              date="August 2023 – Present"
              description="Managed 60+ employees, streamlining workflows and improving service quality by 25%."
              achievements={[
                "Designed and implemented employee scheduling software solutions, reducing workload conflicts and increasing shift coverage by 20%",
                "Trained 45+ new hires, cutting onboarding time by 42% and boosting team productivity",
                "Resolved 10+ customer and employee issues weekly, maintaining satisfaction ratings above 95%"
              ]}
            />
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="ZenMate Productivity App"
              description="A productivity-focused web application featuring a Pomodoro timer with brown noise, Spotify integration, and user-friendly reminders."
              technologies={["React.js", "Tailwind CSS", "Node.js", "Firebase", "Spotify Web API"]}
              date="Nov. 2024 – Present"
              achievements={[
                "30% increase in user retention during initial beta testing",
                "Seamless frontend experience using React.js and Tailwind CSS",
                "Integrated Spotify Web API for playlist control",
                "Secure backend with Node.js, Express.js, and Firebase",
                "Optimized performance with frontend on Vercel and backend on Render"
              ]}
            />
            <ProjectCard
              title="Cloud-Based Security Monitoring System"
              description="Developed a real-time security monitoring platform that reduced vulnerabilities by 40%."
              technologies={["Python", "Flask", "AWS (IAM, EC2, S3)"]}
              date="Aug. 2024 – Nov. 2024"
              achievements={[
                "Designed and implemented a data-driven dashboard for security alerts and analytics",
                "Improved response times by 30%",
                "Leveraged AWS for infrastructure scanning and compliance checks",
                "Enabled easy integration with third-party systems"
              ]}
            />
            <ProjectCard
              title="Dockerized Document Management System"
              description="Designed and deployed a secure, scalable document management system with 4 microservices using Docker and Flask."
              technologies={["Python", "Flask", "React", "Docker", "SQLite", "JWT", "hashlib"]}
              date="Oct. 2024 – Dec. 2024"
              achievements={[
                "Increased user task efficiency by 25% through intuitive navigation and real-time document visualization",
                "Reduced request latency by 20% using Docker network configuration",
                "Implemented JWT-based APIs for role-based access control, supporting 1,000+ daily operations",
                "Secured user data with robust password hashing using SHA256, hashlib, and salt",
                "Optimized SQLite schemas, improving query efficiency by 35%"
              ]}
            />
            <ProjectCard
              title="Modular Machine Simulation System"
              description="Engineered a modular simulation system for mechanical components, adhering to object-oriented principles."
              technologies={["C++", "wxWidgets", "XML", "UML", "Doxygen"]}
              date="Oct. 2024 – Dec. 2024"
              achievements={[
                "Designed and implemented a modular simulation system for mechanical components, adhering to object-oriented principles",
                "Developed reusable components such as pulleys, cams, and shafts using inheritance and interfaces, reducing development time by 25%",
                "Built an XML-based persistence system for saving and reloading simulation configurations",
                "Created detailed UML diagrams and Doxygen documentation to streamline collaboration and future development"
              ]}
            />
          </div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
          <Card className="bg-[#0a0a0a] border-gray-800">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex items-center space-x-4">
                <Button asChild>
                  <a href="mailto:sharf.workmail@gmail.com">Email Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/sharfsadman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/SAADMAN-N" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
      <CursorAnimation />
      <footer className="bg-[#0a0a0a] py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-gray-400 text-sm">
          <p>Created with ❤️ by Sharf!</p>
          <p>&copy; Sharfuzzaman Noor Sadman 2025</p>
        </div>
      </footer>
    </div>
  )
}

