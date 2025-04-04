import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { DawnGradient } from '@/components/DawnGradient'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
              AI Clarified, Human Amplified
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Aurora Intelligence guides you to harness the intuitive power of AI through personalized coaching, clear teaching, and intuitive insight. We empower your autonomy, creativity, and growth.
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
    </div>
  )
} 