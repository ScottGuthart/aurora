import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface DawnGradientProps {
  className?: string
}

export function DawnGradient({ className }: DawnGradientProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {/* Base gradient layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#8B8BFF]/30 via-[#F4CAA9]/20 to-[#BFB9FF]/10"
      />
      
      {/* Radial overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
      />
      
      {/* Animated aurora effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-[#8B8BFF]/20 via-[#F4CAA9]/15 to-[#BFB9FF]/20"
      />
      
      {/* Shimmer effect */}
      <motion.div
        initial={{ x: '-100%', opacity: 0.5 }}
        animate={{ x: '200%', opacity: 0 }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 5
        }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
      />
    </div>
  )
} 