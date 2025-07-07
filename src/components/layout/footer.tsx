
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="#" className="text-2xl font-bold text-white">Albaidex</Link>
            <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} Albaidex. Todos los derechos reservados.</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 sm:gap-x-6 gap-y-2">
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Licencia</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Seguridad</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
