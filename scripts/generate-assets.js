import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function generateAssets() {
  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '..', 'public')

  // Convert social preview SVG to PNG
  await sharp(path.join(publicDir, 'social-preview.svg'))
    .png()
    .toFile(path.join(publicDir, 'social-preview.png'))

  // Generate favicon assets from aurora.svg
  const sizes = [16, 32, 180, 192, 512]
  const baseIcon = path.join(publicDir, 'aurora.svg')

  for (const size of sizes) {
    const outputName =
      size === 180
        ? 'apple-touch-icon.png'
        : size === 192
        ? 'android-chrome-192x192.png'
        : size === 512
        ? 'android-chrome-512x512.png'
        : `favicon-${size}x${size}.png`

    await sharp(baseIcon)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, outputName))
  }

  console.log('✨ Generated all assets successfully!')
}

generateAssets().catch(console.error)
