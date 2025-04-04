import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { createEmailLink } from '@/lib/utils'
import { DawnGradient } from '@/components/DawnGradient'
import { Brain, Sparkles, Scale } from 'lucide-react'

export function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [storyRef, storyInView] = useInView({
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
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About Aurora Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bridging the human-AI divide with clarity and intuitive wisdom
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aurora Intelligence was founded to bridge the human-AI divide, bringing clarity and intuitive wisdom to the rapidly evolving intelligence landscape. AI, as a learning machine, absorbs patterns from human communication—speech, text, forums, scripts—and mirrors them back to us.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By seamlessly integrating psychological insights (MBTI, Enneagram) with AI expertise, we enable clients to harness technology as an intuitive partner in their journey toward growth, creativity, and autonomy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach recognizes that AI is not just technology—it's an algorithmic reflection of human intuition, creativity, and insight. By learning from the collective wisdom of human expression, AI provides a powerful mirror that amplifies your unique human potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0, y: 20 }}
          animate={storyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-950 rounded-2xl mb-4">
                  <Brain className="w-8 h-8 text-[#8B8BFF]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Personalized Approach
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We customize AI integration to your unique personality and cognitive style through psychometric profiling.
              </p>
            </div>
            
            <div className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-950 rounded-2xl mb-4">
                  <Scale className="w-8 h-8 text-[#8B8BFF]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Intuitive Teaching
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our clear, intuitive teaching style ensures deep understanding and practical mastery of AI tools.
              </p>
            </div>

            <div className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-950 rounded-2xl mb-4">
                  <Sparkles className="w-8 h-8 text-[#8B8BFF]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Empowered Growth
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We empower you to independently understand and confidently apply AI tools in your journey of growth.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Your Expertise?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let Sam and our team show you how AI can enhance your work in ways you never imagined possible.
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