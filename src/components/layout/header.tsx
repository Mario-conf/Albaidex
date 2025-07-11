"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#soluciones", label: "Soluciones" },
    { href: "#filosofia", label: "Nosotros" },
    { href: "#tecnologia", label: "Tecnología" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header
      id="header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className="flex items-center gap-3">
             <div className="w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/img/img/icons/isotipoalbaidex.png"
                  alt="Albaidex Isotype"
                  width={40}
                  height={40}
                  className="object-contain"
                  data-ai-hint="isotype logo"
                />
            </div>
            <span className={cn(
                "text-2xl font-bold transition-colors",
                scrolled ? "text-foreground" : "text-white"
            )}>
              Albaidex
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "transition-colors text-lg hover:text-primary",
                    scrolled ? "text-muted-foreground" : "text-gray-200"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("transition-colors", scrolled ? "text-foreground" : "text-white hover:bg-white/10")}>
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <SheetHeader className="p-6 pb-0">
                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                  <SheetDescription className="sr-only">Navegación principal del sitio Albaidex.</SheetDescription>
                  <Link href="#" className="flex items-center gap-3 mb-8" onClick={() => setMobileMenuOpen(false)}>
                     <div className="w-10 h-10 flex items-center justify-center">
                        <Image 
                          src="/img/img/icons/isotipoalbaidex.png"
                          alt="Albaidex Isotype"
                          width={40}
                          height={40}
                          className="object-contain"
                          data-ai-hint="isotype logo"
                        />
                    </div>
                    <span className="text-2xl font-bold text-foreground">
                      Albaidex
                    </span>
                  </Link>
                </SheetHeader>
                <div className="flex flex-col h-full p-6 pt-0">
                  <nav className="flex flex-col space-y-6 mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-foreground hover:text-primary transition-colors text-xl"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
