"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { skills, projects, education, experience } from "@/lib/data";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check if user has a saved preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/user_img.png" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Kent</h1>
              <p className="text-muted-foreground">AI/ML Engineer</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button
              variant={activeSection === 'hero' ? 'secondary' : 'ghost'}
              onClick={() => scrollToSection('hero')}
            >
              About
            </Button>
            <Button
              variant={activeSection === 'skills' ? 'secondary' : 'ghost'}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </Button>
            <Button
              variant={activeSection === 'projects' ? 'secondary' : 'ghost'}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button
              variant={activeSection === 'education' ? 'secondary' : 'ghost'}
              onClick={() => scrollToSection('education')}
            >
              Education
            </Button>
            <Button
              variant={activeSection === 'experience' ? 'secondary' : 'ghost'}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Button>
            <Button
              variant={activeSection === 'contact' ? 'secondary' : 'ghost'}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="h-9 w-9"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Accelerate our future with AI
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {`
            I'm Kent, an AI/ML Engineer passionate about leveraging artificial intelligence to solve real-world problems. Also, I have some experience that building LLM from scratch and deploying AI system to production.
            `}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Technologies I Work With</h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {edu.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <CardDescription className="mt-3">
                    {exp.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">{`Let's Work Together`}</CardTitle>
            <CardDescription>
            {`
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Send Message
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Kent. Built with Next.js and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  );
}
