import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DawnGradient } from '@/components/DawnGradient'
import { Brain, Sparkles, Scale } from 'lucide-react'

export function About() {
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
      <section className="relative h-[40vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building AI that reflects and amplifies human wisdom
          </p>
        </motion.div>
      </section>

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-32">
          {/* Our Story Section */}
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
                  <div className="mb-8">
                    <div className="inline-block p-3 bg-indigo-50 rounded-2xl mb-4">
                      <Brain className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Our Story
                    </h2>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Aurora Intelligence emerged from a profound realization: the most powerful AI systems
                      are those that reflect and amplify human wisdom.
                    </p>
                    <p>
                      Like the dawn that inspired our name, we believe in the gradual, natural emergence
                      of understanding.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p className="text-lg">
                      Our approach combines cutting-edge AI technology with deep respect for human insight
                      and experience.
                    </p>
                    <p className="text-lg font-medium text-indigo-600">
                      "We see artificial intelligence not as a replacement for human wisdom, but as a mirror
                      that reflects and enhances our collective knowledge."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Our Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-rose-50 rounded-2xl mb-4">
                    <Sparkles className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Enhance Potential
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We develop AI systems that enhance and amplify human potential while maintaining ethical principles.
                </p>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-purple-50 rounded-2xl mb-4">
                    <Scale className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Deepen Understanding
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our technology advances capabilities while deepening human understanding and insight.
                </p>
              </div>

              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-sky-50 rounded-2xl mb-4">
                    <Brain className="w-8 h-8 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Collective Wisdom
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We demonstrate that the most powerful AI solutions mirror and magnify humanity's collective wisdom.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
} 