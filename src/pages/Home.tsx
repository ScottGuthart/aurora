import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { DawnGradient } from '@/components/DawnGradient'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: "Dr. Goodkind helped us develop an AI system that analyzes thousands of research papers to identify promising drug combinations. What amazed me was how it surfaced connections our team hadn't considered, leading to two breakthrough discoveries in our cancer research.",
    author: "Dr. Rachel K.",
    role: "Director of Research, BioTech Institute"
  },
  {
    quote: "As a judge handling complex cases, I was drowning in precedents and statutes. Sam's team created an AI system that helps me see patterns across similar cases and relevant laws. It's like having centuries of judicial wisdom at my fingertips while preserving my discretion.",
    author: "Hon. Marcus B.",
    role: "Federal Court Judge"
  },
  {
    quote: "I was hesitant about AI in education, but Dr. Goodkind showed me how it could help identify struggling students early. Now our teachers can spot learning gaps in real-time and provide targeted support. Our student success rate has improved by 40%.",
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
  const { toast } = useToast()
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
              Transform your expertise with AI that amplifies human wisdom. Dr. Sam Goodkind and our team help visionaries like you unlock new possibilities.
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

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,202,170,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(191,185,255,0.15),transparent_50%)]" />
        </div>
        <DawnGradient className="absolute inset-0 opacity-10" />
        <div className="container px-4 mx-auto relative z-10">
          <motion.h2 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16"
          >
            Client Reflections
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-3xl bg-white/60 shadow-lg backdrop-blur-xl border border-slate-100" />
                
                {/* Content Container */}
                <div className="relative p-8 flex flex-col">
                  <blockquote className="mb-6">
                    <p className="text-slate-700 leading-relaxed">{testimonial.quote}</p>
                  </blockquote>
                  <footer className="mt-auto">
                    <p className="font-semibold text-[#8B8BFF]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </footer>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
} 