"use client";

import * as React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function HeaderNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const isGroupActive = (paths: string[]) =>
    paths.some((path) => pathname.startsWith(path));

  return (
    <div>
      <nav className="container flex h-16 items-center justify-between md:justify-around px-4">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu.Root className="relative z-10 flex max-w-max flex-1 items-center justify-center">
            <NavigationMenu.List className="group flex flex-1 list-none items-center justify-center gap-1">
              {/* Accueil */}
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className={cn(
                    "group inline-flex w-max items-center justify-center mx-2 rounded-md text-sm font-medium transition-colors hover:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/")
                      ? "text-accent border-b-2 border-accent rounded-none"
                      : "text-muted-foreground"
                  )}
                  href="/"
                >
                  Accueil
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              {/* Menu Consulter */}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={cn(
                    "group inline-flex w-max items-center justify-center mx-2 rounded-md text-sm font-medium transition-colors hover:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-1",
                    isGroupActive(["/avis"])
                      ? "text-accent border-b-2 border-accent rounded-none"
                      : "text-muted-foreground"
                  )}
                >
                  Consulter les avis{" "}
                  <ChevronDown
                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full md:w-auto bg-popover border border-border rounded-lg shadow-lg">
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem href="/avis/recents" title="Avis récents">
                      Les derniers signalements publiés.
                    </ListItem>
                    <ListItem href="/avis/urgents" title="Cas urgents">
                      Alertes nécessitant une attention immédiate.
                    </ListItem>
                    <ListItem href="/avis/archives" title="Archives">
                      Consulter les dossiers résolus.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* Menu Signaler */}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={cn(
                    "group inline-flex w-max items-center justify-center mx-2 rounded-md text-sm font-medium transition-colors hover:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-1",
                    isGroupActive(["/report"])
                      ? "text-accent border-b-2 border-accent rounded-none"
                      : "text-muted-foreground"
                  )}
                >
                  Signaler{" "}
                  <ChevronDown
                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full md:w-auto bg-popover border border-border rounded-lg shadow-lg">
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem href="/report" title="Une disparition">
                      Publier un avis de recherche.
                    </ListItem>
                    <ListItem href="/report/sighting" title="Un repérage">
                      Transmettre un témoignage visuel.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* À propos */}
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className={cn(
                    "group inline-flex w-max items-center justify-center mx-2 rounded-md text-sm font-medium transition-colors hover:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/about")
                      ? "text-accent border-b-2 border-accent rounded-none"
                      : "text-muted-foreground"
                  )}
                  href="/about"
                >
                  À propos
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden transition-[width,transform] duration-[250ms] ease-out">
                <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
              <NavigationMenu.Viewport className="relative mt-6 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] origin-top-center transition-[width,height] duration-300" />
            </div>
          </NavigationMenu.Root>
        </div>

        {/* Actions Desktop */}
        <div className="md:flex hidden items-center gap-2">
          <ThemeSwitcher />
          <Link href="/auth/login">
            <Button variant="outline">Connexion</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button className="bg-accent hover:bg-accent/90">
              Inscription
            </Button>
          </Link>
        </div>

        {/* Menu Burger Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>
      </nav>

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
              <p className="px-4 py-2 text-sm font-medium text-muted-foreground">
                Consulter les avis
              </p>
              <Link
                href="/avis/recents"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Avis récents
                </Button>
              </Link>
              <Link
                href="/avis/urgents"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Cas urgents
                </Button>
              </Link>
              <Link
                href="/avis/archives"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Archives
                </Button>
              </Link>
            </div>
            <div className="space-y-1">
              <p className="px-4 py-2 text-sm font-medium text-muted-foreground">
                Signaler
              </p>
              <Link href="/report" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8">
                  Signaler une disparition
                </Button>
              </Link>
              <Link
                href="/report/sighting"
                onClick={() => setMobileMenuOpen(false)}
              >
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
              <Link
                href="/auth/register"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Inscription
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 text-gray-500 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
