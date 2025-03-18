
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import SkillBadge from '@/components/SkillBadge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ChevronDown, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Download,
  Send,
  Code,
  Database,
  Palette,
  LineChart,
  Layout
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = 'John Doe | Portfolio & Resume';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
              Hello, I'm <span className="text-primary">John Doe</span>
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <h2 className="text-xl md:text-3xl mb-8 text-foreground/80">
              Full Stack Developer & UX Designer
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={400}>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              I create beautiful web experiences with a focus on usability and performance,
              helping businesses achieve their goals through technology.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={600}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <Send className="ml-2 h-4 w-4" />
              </Button>
              
              <Button size="lg" variant="outline">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={800}>
            <div className="flex justify-center gap-4 mt-12">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </AnimateOnScroll>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="section-heading">About Me</h2>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="space-y-6">
                <p className="text-lg">
                  I'm a passionate full stack developer with over 5 years of experience 
                  creating modern web applications. I specialize in JavaScript, React, and Node.js, 
                  with a strong focus on creating intuitive user interfaces.
                </p>
                <p className="text-lg">
                  My journey in tech began when I built my first website at 16. Since then, 
                  I've worked with startups and established companies to deliver scalable 
                  and maintainable solutions that solve real business problems.
                </p>
                <p className="text-lg">
                  When I'm not coding, you'll find me hiking, reading science fiction, or 
                  experimenting with new technologies to stay at the cutting edge of web development.
                </p>
                
                <div className="pt-4">
                  <Button variant="outline" size="lg">
                    Learn More About Me
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="rounded-lg overflow-hidden shadow-lg border border-border/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe" 
                  className="w-full h-auto"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="section-heading">Skills & Expertise</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimateOnScroll>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  Creating responsive, accessible, and performant user interfaces with modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Tailwind CSS" />
                  <SkillBadge name="HTML/CSS" />
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Backend Development</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  Building robust APIs, services, and database solutions that power modern applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Express" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="PostgreSQL" />
                  <SkillBadge name="RESTful APIs" />
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={400}>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">UI/UX Design</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  Designing intuitive user experiences and visually appealing interfaces that delight users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Figma" />
                  <SkillBadge name="Adobe XD" />
                  <SkillBadge name="UI Design" />
                  <SkillBadge name="Prototyping" />
                  <SkillBadge name="Wireframing" />
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={600}>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Data Analysis</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  Extracting insights from data to drive business decisions and optimize performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Python" />
                  <SkillBadge name="Pandas" />
                  <SkillBadge name="Data Visualization" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Tableau" />
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={800}>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Tools & Deployment</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  Using modern tooling to streamline development and deploy applications efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" />
                  <SkillBadge name="Docker" />
                  <SkillBadge name="AWS" />
                  <SkillBadge name="CI/CD" />
                  <SkillBadge name="GitHub Actions" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="section-heading">Work Experience</h2>
          </AnimateOnScroll>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <AnimateOnScroll>
              <ExperienceItem 
                title="Senior Frontend Developer"
                company="TechCorp Inc."
                period="Jan 2021 - Present"
                description="Lead the development of the company's flagship SaaS product, improving performance by 40%. Mentored junior developers and implemented modern CI/CD practices."
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <ExperienceItem 
                title="Full Stack Developer"
                company="Innovative Solutions"
                period="Mar 2018 - Dec 2020"
                description="Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX designs."
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={400}>
              <ExperienceItem 
                title="Junior Web Developer"
                company="Digital Agency Co."
                period="Jun 2016 - Feb 2018"
                description="Created websites for clients across various industries. Focused on responsive design, cross-browser compatibility, and performance optimization."
                isLast={true}
              />
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll delay={600}>
            <div className="mt-12 text-center">
              <Button>
                View Full Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="section-heading">Featured Projects</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimateOnScroll>
              <ProjectCard 
                title="E-Commerce Platform"
                description="A full-featured online shopping platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment processing."
                imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                tags={["React", "Node.js", "MongoDB", "Stripe"]}
                liveUrl="#"
                repoUrl="#"
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <ProjectCard 
                title="Task Management App"
                description="A drag-and-drop task management application inspired by Trello. Features include boards, lists, cards, and team collaboration tools."
                imageUrl="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                tags={["React", "Redux", "Firebase", "Material UI"]}
                liveUrl="#"
                repoUrl="#"
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={400}>
              <ProjectCard 
                title="Weather Dashboard"
                description="A real-time weather application that displays current conditions and forecasts for locations worldwide using the OpenWeatherMap API."
                imageUrl="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                tags={["JavaScript", "API Integration", "Chart.js", "Geolocation"]}
                liveUrl="#"
                repoUrl="#"
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={600}>
              <ProjectCard 
                title="Social Media Dashboard"
                description="An analytics dashboard for tracking social media performance across multiple platforms, with data visualization and export capabilities."
                imageUrl="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                tags={["React", "D3.js", "RESTful APIs", "OAuth"]}
                liveUrl="#"
                repoUrl="#"
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={800}>
              <ProjectCard 
                title="Personal Finance Tracker"
                description="A finance management application that helps users track expenses, set budgets, and visualize spending patterns over time."
                imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                tags={["Vue.js", "Express", "PostgreSQL", "Authentication"]}
                liveUrl="#"
                repoUrl="#"
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={1000}>
              <ProjectCard 
                title="Recipe Finder App"
                description="A mobile-responsive recipe application that allows users to search for recipes by ingredients, dietary restrictions, and meal types."
                imageUrl="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
                tags={["React Native", "Firebase", "API Integration", "Mobile"]}
                liveUrl="#"
                repoUrl="#"
              />
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll delay={1200}>
            <div className="mt-12 text-center">
              <Button>
                View All Projects
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="section-heading">Get In Touch</h2>
          </AnimateOnScroll>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimateOnScroll>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-playfair">Contact Information</h3>
                  <p className="mb-6 text-foreground/80">
                    Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
                    I'll get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:hello@johndoe.com" className="hover:text-primary transition-colors">
                        hello@johndoe.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a href="#" className="hover:text-primary transition-colors">
                        linkedin.com/in/johndoe
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <a href="#" className="hover:text-primary transition-colors">
                        github.com/johndoe
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Twitter className="h-5 w-5 text-primary" />
                      <a href="#" className="hover:text-primary transition-colors">
                        twitter.com/johndoe
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={200}>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-accent/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
