"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#soluciones", label: "Soluciones" },
    { href: "#filosofia", label: "Nosotros" },
    { href: "#tecnologia", label: "Tecnología" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className="flex items-center gap-3">
            <Image 
              src="/img/img/icons/isotipoalbaidex.png"
              alt="Albaidex Isotype"
              width={40} 
              height={40}
              data-ai-hint="isotype logo"
            />
            <span className="text-2xl font-bold text-foreground">
              Albaidex
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-lg text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col h-full p-6">
                  <Link href="#" className="flex items-center gap-3 mb-8" onClick={() => setMobileMenuOpen(false)}>
                    <Image 
                      src="/img/img/icons/isotipoalbaidex.png"
                      alt="Albaidex Isotype"
                      width={40}
                      height={40}
                      data-ai-hint="isotype logo"
                    />
                    <span className="text-2xl font-bold text-foreground">
                      Albaidex
                    </span>
                  </Link>
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
