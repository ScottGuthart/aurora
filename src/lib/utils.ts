import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createEmailLink(subject: string, body: string) {
  const email = "sgoodkind221@gmail.com"
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
} 