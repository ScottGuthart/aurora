import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Brain, Sparkles, Shield } from 'lucide-react'
import { createEmailLink } from '@/lib/utils'
import { DawnGradient } from '@/components/DawnGradient'

const services = [
  {
    title: "AI-Enhanced Professional Research",
    description: "Discover how AI can transform your daily work and decision-making. Dr. Sam Goodkind and our team help you harness AI's potential in ways that feel natural and empowering - from analyzing years of case law in minutes to uncovering patterns in complex medical histories.",
    icon: Brain,
    emailSubject: "AI Research Enhancement Inquiry",
    emailBody: "I'm interested in learning how AI could transform my work and decision-making process. Could you share some examples of how your AI research enhancement service could help enhance my expertise?",
    testimonial: {
      quote: "I was skeptical at first, but Sam and the team showed me how AI could analyze decades of my legal cases in minutes. Now I can instantly find relevant precedents and craft stronger arguments. It's like having a brilliant associate who's read every case I've ever handled.",
      author: "Richard M., Corporate Attorney"
    }
  },
  {
    title: "Custom AI Workflow Design",
    description: "We create AI solutions that work the way you do. Whether you're reviewing patient histories, analyzing market trends, or exploring research papers, Dr. Goodkind's team ensures the technology adapts to your workflow - not the other way around.",
    icon: Sparkles,
    emailSubject: "Custom AI Workflow Inquiry",
    emailBody: "I'd like to explore how we could integrate AI in a way that feels natural and enhances our capabilities. Could you share examples of how you've helped others?",
    testimonial: {
      quote: "Dr. Goodkind helped me set up an AI system that automatically summarizes my patients' complex medical histories and flags potential drug interactions. What used to take hours now takes minutes, and I can focus more on patient care. It's transformed my practice.",
      author: "Dr. Sarah P., Internal Medicine"
    }
  },
  {
    title: "Professional AI Safeguards",
    description: "Navigate AI's possibilities with confidence and clarity. Sam and our team ensure your AI implementation respects privacy, maintains human judgment, and enhances rather than replaces your expertise - all while amplifying your capabilities.",
    icon: Shield,
    emailSubject: "Professional AI Safeguards Inquiry",
    emailBody: "I want to ensure our AI implementation respects human values and wisdom. Could you tell me more about your approach to ethical AI integration?",
    testimonial: {
      quote: "As a therapist, I was concerned about AI and patient confidentiality. Sam's team developed a system that helps me identify patterns in session notes while maintaining absolute privacy. It's helped me be more proactive in my treatment plans while upholding the highest ethical standards.",
      author: "Jennifer L., Clinical Psychologist"
    }
  },
]

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,202,170,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(191,185,255,0.15),transparent_50%)]" />
      </div>
      <DawnGradient className="absolute inset-0 opacity-10" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Illuminate Your Vision
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join Dr. Sam Goodkind and our team in transforming your expertise with AI. Turn hours of research into moments of insight, and complex decisions into confident actions.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 rounded-3xl bg-white shadow-sm border border-slate-100" />
              
              {/* Content Container */}
              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="p-4 rounded-2xl bg-blue-50">
                    <service.icon className="w-8 h-8 text-[#8B8BFF]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Testimonial */}
                <div className="mb-8 text-sm">
                  <div className="italic text-slate-500 mb-2">
                    "{service.testimonial.quote}"
                  </div>
                  <div className="text-slate-400">
                    — {service.testimonial.author}
                  </div>
                </div>
                
                <Button 
                  className="bg-[#8B8BFF] hover:bg-[#7878FF] text-white transition-colors duration-300"
                  asChild
                >
                  <a href={createEmailLink(service.emailSubject, service.emailBody)}
                     className="px-6 py-2"
                  >
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Experience the Difference?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Let Dr. Goodkind and our team show you how AI can enhance your expertise and transform your work in ways you never imagined possible.
          </p>
          <Button 
            size="lg"
            className="bg-[#8B8BFF] hover:bg-[#7878FF] text-white transition-colors duration-300"
            asChild
          >
            <a href={createEmailLink(
              "Aurora Intelligence Partnership Inquiry",
              "I'm interested in learning more about how Aurora Intelligence could help transform my work. Could you share some specific examples of how you've helped others in similar situations?"
            )}
             className="px-8 py-2"
            >
              Start the Conversation
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  )
} 