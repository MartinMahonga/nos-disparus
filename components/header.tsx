"use client"

import { Logo } from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeSwitcher } from "./theme-switcher"
import { ChevronDown, Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils" // Assurez-vous d'avoir cette utilité (standard dans shadcn)

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fonction utilitaire pour vérifier si un lien est actif
  const isActive = (path: string) => pathname === path;
  
  // Vérifie si un groupe de sous-liens est actif (pour les dropdowns)
  const isGroupActive = (paths: string[]) => paths.some(path => pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center md:justify-around justify-between px-2">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              isActive("/") ? "text-accent border-b-2 border-accent" : "text-muted-foreground"
            )}
          >
            Accueil
          </Link>

          {/* Dropdown pour consulter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium cursor-pointer transition-colors hover:text-accent",
                isGroupActive(["/avis"]) ? "text-accent border-b-2 border-accent" : "text-muted-foreground"
              )}>
                Consulter les avis
                <ChevronDown size={14} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="p-2 mt-6">
              <DropdownMenuItem asChild>
                <Link href="/avis/recents" className={cn("w-full cursor-pointer", isActive("/avis/recents") && "bg-accent/10 text-accent font-bold")}>
                  Avis récents
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/avis/urgents" className={cn("w-full cursor-pointer", isActive("/avis/urgents") && "bg-accent/10 text-accent font-bold")}>
                  Cas urgents
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/avis/archives" className={cn("w-full cursor-pointer", isActive("/avis/archives") && "bg-accent/10 text-accent font-bold")}>
                  Archives
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown pour Signaler */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium cursor-pointer transition-colors hover:text-accent",
                isGroupActive(["/report"]) ? "text-accent border-b-2 border-accent" : "text-muted-foreground"
              )}>
                Signaler
                <ChevronDown size={14} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="p-2 mt-6">
              <DropdownMenuItem asChild>
                <Link href="/report" className={cn("w-full cursor-pointer", isActive("/report") && "bg-accent/10 text-accent font-bold")}>
                  Signaler une disparition
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/report/sighting" className={cn("w-full cursor-pointer", isActive("/report/sighting") && "bg-accent/10 text-accent font-bold")}>
                  Signaler un repérage
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/about" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              isActive("/about") ? "text-accent border-b-2 border-accent" : "text-muted-foreground"
            )}
          >
            À propos
          </Link>
        </nav>

        <div className="md:flex hidden items-center gap-2">
          <ThemeSwitcher/>
          <Link href="/auth/login">
            <Button variant="outline" className="hidden md:inline-flex">
              Connexion
            </Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
              Inscription
            </Button>
          </Link>
        </div>
        
        {/*Menu burger */}
        <div className="md:hidden">
          <ThemeSwitcher/>
          <Button variant="outline" size="icon" className="mr-5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Accueil
              </Button>
            </Link>
            <div className="space-y-1">
              <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Consulter les avis</p>
              <Link href="/avis/recents" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Avis récents
                </Button>
              </Link>
              <Link href="/avis/urgents" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Cas urgents
                </Button>
              </Link>
              <Link href="/avis/archives" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Archives
                </Button>
              </Link>
            </div>
            <div className="space-y-1">
              <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Signaler</p>
              <Link href="/report" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Signaler une disparition
                </Button>
              </Link>
              <Link href="/report/sighting" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Signaler un repérage
                </Button>
              </Link>
            </div>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                À propos
              </Button>
            </Link>
            <div className="border-t border-border pt-2 mt-2">
              <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mb-2">
                  Connexion
                </Button>
              </Link>
              <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Inscription</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}