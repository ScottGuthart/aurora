import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { createEmailLink } from '@/lib/utils'
import { DawnGradient } from '@/components/DawnGradient'

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,202,170,0.15),transparent_50%)] dark:opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(191,185,255,0.15),transparent_50%)] dark:opacity-10" />
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Illuminate Your Vision
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join Sam Goodkind and our team in transforming your expertise with AI. Turn hours of research into moments of insight, and complex decisions into confident actions.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Liaison Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
            className="relative p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border"
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Liaison Consulting</h3>
            <ul className="space-y-4 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Personalized psychometric profiling (MBTI, Enneagram) to customize AI tools to your style</span>
              </li>
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Intuitive guidance and tailored teaching, bridging the gap between AI capabilities and human needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Ongoing insights to empower you in leveraging AI tools independently and confidently</span>
              </li>
            </ul>
          </motion.div>

          {/* Intuitive Coaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border"
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Intuitive Coaching</h3>
            <ul className="space-y-4 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Practical, insightful personal coaching for creatives, executives, and high-performers</span>
              </li>
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Utilizing MBTI and Enneagram frameworks to enhance emotional intelligence and strategic thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Emphasis on autonomy, emotional clarity, and strategic personal growth</span>
              </li>
            </ul>
          </motion.div>

          {/* Personalized AI Integration Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border"
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Integration Workshops</h3>
            <ul className="space-y-4 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Group or individual workshops teaching intuitive, effective use of AI tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Tailored to unique cognitive and emotional styles</span>
              </li>
              <li className="flex items-start">
                <span className="text-dawn-slate mr-2">•</span>
                <span>Ideal for creative teams, executive leadership, and professionals in transition</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Differentiators Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Why Aurora Intelligence?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">Personalized, Human-Centric AI</h3>
              <p className="text-muted-foreground">Custom-fit AI integration specifically tailored to your personality and cognitive style</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">Intuitive Teaching Style</h3>
              <p className="text-muted-foreground">Leveraging deep emotional intelligence and expert teaching ability to ensure understanding and practical mastery</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">Empowering Autonomy</h3>
              <p className="text-muted-foreground">We don't just implement AI—we empower you to independently understand, adopt, and confidently apply AI tools</p>
            </motion.div>
          </div>
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let Sam and our team show you how AI can enhance your expertise and transform your work in ways you never imagined possible.
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