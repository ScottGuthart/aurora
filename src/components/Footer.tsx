import { Link } from 'react-router-dom'
import { AuroraLogo } from '@/components/AuroraLogo'
import { createEmailLink } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AuroraLogo className="h-8 w-8" />
              <span className="font-bold text-xl">Aurora</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              AI that amplifies human wisdom. Sam Goodkind and our team help visionaries unlock new possibilities in research, workflow, and decision-making.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Philosophy
              </Link>
              <a 
                href={createEmailLink(
                  "Aurora Intelligence Inquiry",
                  "I'm interested in learning more about Aurora Intelligence and how we could potentially work together."
                )}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aurora Intelligence. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href={createEmailLink(
                  "Aurora Intelligence Inquiry",
                  "I'm interested in learning more about Aurora Intelligence and how we could potentially work together."
                )}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 