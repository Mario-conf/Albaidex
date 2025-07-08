import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          <div className="md:col-span-12 lg:col-span-5">
             <Link href="#" className="inline-flex items-center gap-3 text-2xl font-bold text-white">
                <Image 
                  src="/img/img/icons/isotipoalbaidex.png"
                  alt="Albaidex Isotype"
                  width={40}
                  height={40}
                  data-ai-hint="isotype logo"
                />
                Albaidex
             </Link>
             <p className="text-sm text-gray-400 mt-2 max-w-xs mx-auto md:mx-0">No Magic. Just Software.</p>
          </div>
          <div className="md:col-span-6 lg:col-span-3">
             <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Navegación</h3>
             <nav className="flex flex-col gap-3">
                <Link href="#soluciones" className="text-sm text-gray-300 hover:text-white transition-colors">Soluciones</Link>
                <Link href="#filosofia" className="text-sm text-gray-300 hover:text-white transition-colors">Nosotros</Link>
                <Link href="#tecnologia" className="text-sm text-gray-300 hover:text-white transition-colors">Tecnología</Link>
                <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contacto</Link>
             </nav>
          </div>
          <div className="md:col-span-6 lg:col-span-4">
             <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Legal</h3>
             <nav className="flex flex-col gap-3">
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Privacidad</Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Cookies</Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Aviso Legal</Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Licencia de Uso</Link>
             </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Albaidex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
