import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'
import { createEmailLink } from '@/lib/utils'

export function Philosophy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Our Philosophy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI is not just technology—it's an algorithmic reflection of human intuition, creativity, and insight. By learning from the collective wisdom of human expression, AI provides a powerful mirror that amplifies your unique human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Explanation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Human-Centric AI Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Aurora Intelligence, we guide you to harness the intuitive power of AI through personalized coaching, clear teaching, and intuitive insight. Our role isn't simply to implement AI—it's to help you deeply understand and integrate it.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                By seamlessly integrating psychological insights with AI expertise, we empower your autonomy, creativity, and growth. Our approach is deeply personalized, considering your unique cognitive and emotional style.
              </p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-dawn-slate text-dawn-slate"
                      asChild
                    >
                      <a href={createEmailLink(
                        "Aurora Philosophy Inquiry",
                        "I'm interested in learning more about Aurora's human-centric AI approach. Could you please provide more information about how you integrate psychological insights with AI expertise?"
                      )}>
                        Learn More
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contact us to learn more about our human-centric AI approach</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dawn-peach/20 to-dawn-sky/20 rounded-lg backdrop-blur-sm" />
              <div className="relative p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Our Core Principles
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-dawn-slate mr-2">•</span>
                    <span className="text-muted-foreground">
                      Personalized AI Integration: Custom-fit solutions tailored to your unique style
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dawn-slate mr-2">•</span>
                    <span className="text-muted-foreground">
                      Intuitive Teaching: Clear guidance ensuring practical understanding and mastery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dawn-slate mr-2">•</span>
                    <span className="text-muted-foreground">
                      Empowered Growth: Supporting your journey toward independent AI mastery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dawn-slate mr-2">•</span>
                    <span className="text-muted-foreground">
                      Psychological Integration: Using MBTI and Enneagram insights for deeper understanding
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 