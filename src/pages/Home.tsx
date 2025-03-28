import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { DawnGradient } from '@/components/DawnGradient'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: "Sam and his team helped us develop an AI system that analyzes thousands of research papers to identify promising drug combinations. What amazed me was how it surfaced connections our team hadn't considered, leading to two breakthrough discoveries in our cancer research.",
    author: "Dr. Rachel K.",
    role: "Director of Research, BioTech Institute"
  },
  {
    quote: "As a judge handling complex cases, I was drowning in precedents and statutes. Sam's team created an AI system that helps me see patterns across similar cases and relevant laws. It's like having centuries of judicial wisdom at my fingertips while preserving my discretion.",
    author: "Hon. Marcus B.",
    role: "Federal Court Judge"
  },
  {
    quote: "I was hesitant about AI in education, but Sam showed me how it could help identify struggling students early. Now our teachers can spot learning gaps in real-time and provide targeted support. Our student success rate has improved by 40%.",
    author: "Patricia M.",
    role: "High School Principal"
  }
]

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <DawnGradient className="absolute inset-0 opacity-20" />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            ref={heroRef}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="aurora-title text-4xl md:text-7xl font-bold mb-8 leading-normal tracking-tight"
            >
              Aurora Intelligence
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Transform your expertise with AI that amplifies human wisdom. Sam Goodkind and our team help visionaries like you unlock new possibilities.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white transition-all duration-300 ease-out transform hover:scale-105"
                asChild
              >
                <Link to="/philosophy">
                  Explore Our Philosophy 
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/4 -left-12 w-24 h-24 bg-gradient-to-r from-rose-200/30 to-sky-200/30 dark:from-rose-500/20 dark:to-sky-500/20 rounded-full blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            className="absolute bottom-1/3 -right-12 w-32 h-32 bg-gradient-to-r from-sky-200/30 to-rose-200/30 dark:from-sky-500/20 dark:to-rose-500/20 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Client Reflections */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Client Reflections
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-3xl bg-card shadow-sm border border-border" />
                
                {/* Content Container */}
                <div className="relative p-8 flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-2xl inline-block">
                      <svg className="w-6 h-6 text-[#8B8BFF]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-muted-foreground mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                        <span className="text-[#8B8BFF] font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
} 