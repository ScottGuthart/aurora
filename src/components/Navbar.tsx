import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { createEmailLink } from '@/lib/utils'
import { AuroraLogo } from '@/components/AuroraLogo'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <AuroraLogo className="h-8 w-8" />
          <span className="font-bold text-xl">Aurora</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link to="/philosophy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Philosophy
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild>
              <a href={createEmailLink(
                "Aurora Intelligence Inquiry",
                "I'm interested in learning more about Aurora Intelligence and how we could potentially work together. Could you please provide more information about your services and approach?"
              )}>
                Contact Us
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem asChild>
                <Link to="/about" className="w-full">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services" className="w-full">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/philosophy" className="w-full">Philosophy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={createEmailLink(
                  "Aurora Intelligence Inquiry",
                  "I'm interested in learning more about Aurora Intelligence and how we could potentially work together. Could you please provide more information about your services and approach?"
                )} className="w-full">
                  Contact Us
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
} 