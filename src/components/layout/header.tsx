
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#soluciones", label: "Soluciones" },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className={`text-3xl font-bold transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Albaidex
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-lg ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="font-bold text-base">
              <Link href="#contact">Contacto</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`${scrolled ? 'text-foreground' : 'text-white hover:bg-white/10 hover:text-white'}`}>
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="#" className="text-2xl font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>
                      Albaidex
                    </Link>
                  </div>
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
                    <Button asChild className="font-bold text-lg mt-4">
                      <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
                    </Button>
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
