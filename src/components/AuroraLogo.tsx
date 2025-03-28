import { motion } from 'framer-motion'

interface AuroraLogoProps {
  className?: string
}

export function AuroraLogo({ className }: AuroraLogoProps) {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="256" cy="256" r="240" fill="url(#gradient-bg)" />
      
      {/* Rotating Gradient Group */}
      <motion.g
        animate={{ 
          rotate: 360
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        {/* Reflective Surface */}
        <path 
          d="M256 16C384 16 480 112 480 240C480 368 384 464 256 464C128 464 32 368 32 240C32 112 128 16 256 16Z" 
          fill="url(#gradient-surface)"
        />
        
        {/* Aurora Effect */}
        <motion.g
          animate={{ 
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path 
            d="M256 64C384 64 448 128 448 256C448 384 384 448 256 448C128 448 64 384 64 256C64 128 128 64 256 64Z" 
            fill="url(#gradient-aurora)"
          />
        </motion.g>
      </motion.g>
      
      {/* Inner Circle */}
      <circle cx="256" cy="256" r="160" fill="url(#gradient-inner)" />
      
      {/* Letter A */}
      <path 
        d="M256 96L384 384H128L256 96Z" 
        fill="white" 
        fillOpacity="0.95"
      />
      
      {/* Shimmer Effect */}
      <motion.path
        d="M256 96L384 384H128L256 96Z"
        stroke="url(#gradient-shimmer)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="15"
        animate={{
          strokeDashoffset: [-30, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Gradients */}
      <defs>
        <radialGradient id="gradient-bg" cx="0.5" cy="0.5" r="0.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        
        <linearGradient id="gradient-surface" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B8BFF" stopOpacity="0.2" />
          <stop offset="25%" stopColor="#F4CAA9" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#BFB9FF" stopOpacity="0.2" />
          <stop offset="75%" stopColor="#F4CAA9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B8BFF" stopOpacity="0.2" />
        </linearGradient>
        
        <linearGradient id="gradient-aurora" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B8BFF" stopOpacity="0.3" />
          <stop offset="25%" stopColor="#F4CAA9" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#BFB9FF" stopOpacity="0.3" />
          <stop offset="75%" stopColor="#F4CAA9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8B8BFF" stopOpacity="0.3" />
        </linearGradient>
        
        <radialGradient id="gradient-inner" cx="0.5" cy="0.5" r="0.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="gradient-shimmer" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
} 