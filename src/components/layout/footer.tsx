
import Link from "next/link";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
        {children}
    </Link>
);

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-foreground">Albaidex</h3>
            <p className="mt-4 text-muted-foreground">Software que te impulsa.</p>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground">Soluciones</h4>
            <nav className="mt-4 space-y-2">
              <NavLink href="#soluciones">Enterprise</NavLink>
              <NavLink href="#soluciones">Apps</NavLink>
              <NavLink href="#case-studies">Proyectos</NavLink>
            </nav>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground">Compañía</h4>
            <nav className="mt-4 space-y-2">
              <NavLink href="#">Sobre nosotros</NavLink>
              <NavLink href="#">Carreras</NavLink>
              <NavLink href="#contact">Contacto</NavLink>
            </nav>
          </div>
          <div className="col-span-1">
             <h4 className="font-semibold text-foreground">Legal</h4>
            <nav className="mt-4 space-y-2">
              <NavLink href="#">Privacidad</NavLink>
              <NavLink href="#">Términos</NavLink>
            </nav>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Albaidex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
