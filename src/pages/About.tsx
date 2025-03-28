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
            Meet Sam Goodkind
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A visionary in AI and human potential, Sam Goodkind bridges the gap between human intuition and artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sam Goodkind's journey into AI began with a simple observation: the most powerful AI systems don't replace human expertise—they amplify it. With a background in cognitive science and machine learning, Sam has spent years studying how AI can enhance rather than replace human capabilities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Aurora Intelligence, Sam leads a team dedicated to creating AI solutions that respect and enhance human wisdom. Whether working with legal professionals analyzing case law, medical practitioners reviewing patient histories, or researchers exploring complex datasets, Sam ensures that AI serves as a powerful tool for human expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sam's approach combines deep technical knowledge with a profound understanding of human cognition and decision-making. This unique perspective allows Aurora Intelligence to create AI solutions that feel natural and intuitive, amplifying human capabilities without disrupting established workflows.
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
                  Enhance Potential
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We develop AI systems that enhance and amplify human potential while maintaining ethical principles.
              </p>
            </div>
            
            <div className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-950 rounded-2xl mb-4">
                  <Scale className="w-8 h-8 text-[#8B8BFF]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Deepen Understanding
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our technology advances capabilities while deepening human understanding and insight.
              </p>
            </div>

            <div className="p-6 bg-card backdrop-blur-sm rounded-3xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-950 rounded-2xl mb-4">
                  <Sparkles className="w-8 h-8 text-[#8B8BFF]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Collective Wisdom
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We demonstrate that the most powerful AI solutions mirror and magnify humanity's collective wisdom.
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