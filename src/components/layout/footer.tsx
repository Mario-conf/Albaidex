import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="md:col-span-2">
             <Link href="#" className="inline-flex items-center gap-3 text-2xl font-bold text-white mb-4">
                <Image 
                  src="/img/img/icons/isotipoalbaidex.png"
                  alt="Albaidex Isotype"
                  width={40}
                  height={40}
                  data-ai-hint="isotype logo"
                />
                Albaidex
             </Link>
             <p className="text-sm text-gray-400 mt-2 mb-6 max-w-md mx-auto md:mx-0">No Magic. Just Software.</p>
             
             <div className="space-y-3 text-sm text-gray-300 max-w-md mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <MapPin className="w-4 h-4 text-primary"/>
                    <span>Granada, 18010, España</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <Mail className="w-4 h-4 text-primary"/>
                    <a href="mailto:info@albaidex.com" className="hover:text-white transition-colors">info@albaidex.com</a>
                </div>
             </div>
          </div>
          
          <div className="md:col-span-1">
             <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Redes Sociales</h3>
             <div className="flex justify-center md:justify-start gap-4">
                <Link href="https://www.linkedin.com/company/albaidex/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://www.instagram.com/albaidex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
             </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Albaidex. Todos los derechos reservados.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
