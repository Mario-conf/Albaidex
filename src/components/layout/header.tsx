import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#free-apps", label: "Free Apps" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <Link href="#home" className="flex items-center gap-2 mr-6">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">SynergTech Innovations</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
