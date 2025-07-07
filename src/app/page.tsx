
'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  Puzzle, 
  TrendingUp, 
  Bot,
  Cog,
  Sparkles,
  Server,
  Github,
  ShieldCheck,
  DatabaseZap,
  Globe,
  Wifi,
  Zap,
  Rocket
} from "lucide-react";

// All dynamic page content is centralized here for easy editing.
const pageData = {
  hero: {
    title: "Software inteligente, desarrollado con inteligencia.",
    subtitle: "Creamos soluciones potentes y elegantes para empresas e individuos con visión de futuro.",
    image: "/img/img/bg.jpg",
    hint: "background"
  },
  enterpriseSolutions: [
    {
      title: "Desarrollo a Medida",
      description: "Creamos software personalizado y escalable que se adapta a las necesidades específicas de tu empresa.",
      icon: <Puzzle className="w-8 h-8 text-primary" />
    },
    {
      title: "Automatización de Procesos",
      description: "Optimizamos tus flujos de trabajo con soluciones de automatización inteligentes para aumentar la eficiencia.",
      icon: <Bot className="w-8 h-8 text-primary" />
    },
    {
      title: "Consultoría Tecnológica",
      description: "Te ayudamos a alinear tu estrategia tecnológica con tus objetivos de negocio para un crecimiento sostenible.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    },
    {
      title: "Adaptación de Sistemas",
      description: "Personalizamos e integramos aplicaciones internas para que funcionen perfectamente en tu ecosistema.",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "IA Generativa",
      description: "Implementamos soluciones con IA Generativa para potenciar la innovación y la capacidad de tu negocio.",
      icon: <Sparkles className="w-8 h-8 text-primary" />
    },
    {
      title: "Digitalización",
      description: "Modernizamos tus sistemas y procesos para impulsar tu transformación digital de forma segura.",
      icon: <Server className="w-8 h-8 text-primary" />
    }
  ],
  appSolutions: [
    {
      title: "Finanzas67",
      description: "Gestión financiera inteligente para pymes y autónomos.",
      image: "https://placehold.co/600x400.png",
      hint: "finance dashboard",
      subdomain: "finanzas67.albaidex.com",
      githubUrl: "#"
    },
    {
      title: "Notasync",
      description: "Toma de notas colaborativa con sincronización en tiempo real.",
      image: "https://placehold.co/600x400.png",
      hint: "notes app interface",
      subdomain: "notasync.albaidex.com",
      githubUrl: "#"
    },
    {
      title: "PlaniAdmin",
      description: "Planificación de proyectos y gestión de tareas para equipos.",
      image: "https://placehold.co/600x400.png",
      hint: "project management board",
      subdomain: "planiadmin.albaidex.com",
      githubUrl: "#"
    },
    {
      title: "GestorRecursos",
      description: "Optimiza la asignación y el uso de recursos empresariales.",
      image: "https://placehold.co/600x400.png",
      hint: "resource allocation chart",
      subdomain: "gestorrecursos.albaidex.com",
      githubUrl: "#"
    }
  ],
  technologies: [
    { name: "Next.js", image: "https://placehold.co/128x128.png", hint: "nextjs logo" },
    { name: "React", image: "https://placehold.co/128x128.png", hint: "react logo" },
    { name: "Tailwind CSS", image: "https://placehold.co/128x128.png", hint: "tailwind logo" },
    { name: "Firebase", image: "https://placehold.co/128x128.png", hint: "firebase logo" },
    { name: "Genkit", image: "https://placehold.co/128x128.png", hint: "genkit logo" },
    { name: "TypeScript", image: "https://placehold.co/128x128.png", hint: "typescript logo" },
    { name: "Node.js", image: "https://placehold.co/128x128.png", hint: "nodejs logo" },
    { name: "Vercel", image: "https://placehold.co/128x128.png", hint: "vercel logo" },
  ]
};


// Page Sections
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white bg-black">
    <Image src={pageData.hero.image} alt="Equipo de Albaidex colaborando en un proyecto" layout="fill" objectFit="cover" className="opacity-40" data-ai-hint={pageData.hero.hint}/>
    <div className="relative z-10 p-4 fade-in">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">{pageData.hero.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">{pageData.hero.subtitle}</p>
        <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="h-auto bg-primary text-primary-foreground font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg shadow-lg">
                <Link href="#soluciones">Explorar Soluciones</Link>
            </Button>
        </div>
    </div>
  </section>
);

const TechnologySlider = () => {
    const extendedTechnologies = [...pageData.technologies, ...pageData.technologies];

    return (
        <section id="tecnologia" className="py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Nuestro Ecosistema Tecnológico</h3>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Usamos tecnologías modernas y fiables para construir soluciones de alta calidad.</p>
                </div>
            </div>
            <div className="relative fade-in group">
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {extendedTechnologies.map((tech, index) => (
                        <div key={index} className="flex-shrink-0 w-64 px-4">
                            <div className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-border/50 h-32">
                                <div className="relative h-20 w-full">
                                  <Image 
                                      src={tech.image} 
                                      alt={tech.name} 
                                      layout="fill"
                                      objectFit="contain"
                                      data-ai-hint={tech.hint}
                                  />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Philosophy = () => (
  <section id="filosofia" className="py-20 md:py-32 bg-muted">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Transparencia y Filosofía</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Nuestros principios fundamentales guían todo lo que construimos.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 fade-in">
        <Card className="card-hover flex flex-col text-center items-center p-6">
          <CardHeader>
            <div className="bg-background rounded-full p-4 mb-4">
              <Github className="w-10 h-10 text-primary" />
            </div>
            <CardTitle>Open Code</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">La mayoría de nuestras apps son de código accesible, promoviendo la transparencia y la colaboración comunitaria bajo licencias claras.</p>
          </CardContent>
        </Card>
        <Card className="card-hover flex flex-col text-center items-center p-6">
          <CardHeader>
            <div className="bg-background rounded-full p-4 mb-4">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <CardTitle>IA Esencial</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Apostamos por la Inteligencia Artificial como una herramienta indispensable en nuestros procesos de desarrollo para crear soluciones más inteligentes.</p>
          </CardContent>
        </Card>
        <Card className="card-hover flex flex-col text-center items-center p-6">
          <CardHeader>
            <div className="bg-background rounded-full p-4 mb-4">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <CardTitle>Eficiencia Radical</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Priorizamos la eficiencia y la automatización sobre el romanticismo del trabajo manual. Entregamos resultados, no horas.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Scope = () => (
  <section id="alcance" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Alcance Global</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Sin fronteras, sin oficinas. Creamos software para el mundo.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 fade-in max-w-4xl mx-auto">
        <Card className="card-hover flex flex-col text-center items-center p-6">
          <CardHeader>
            <div className="bg-muted rounded-full p-4 mb-4">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <CardTitle>Clientes Internacionales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Nuestro alcance es global, colaboramos con clientes y empresas de cualquier país para llevar sus ideas al siguiente nivel.</p>
          </CardContent>
        </Card>
        <Card className="card-hover flex flex-col text-center items-center p-6">
          <CardHeader>
            <div className="bg-muted rounded-full p-4 mb-4">
              <Wifi className="w-10 h-10 text-primary" />
            </div>
            <CardTitle>Trabajo 100% Remoto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Operamos de forma completamente remota, lo que nos permite ser más ágiles, eficientes y atraer al mejor talento sin importar la ubicación.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Security = () => (
    <section id="seguridad" className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Seguridad y Responsabilidad</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Tu seguridad es nuestra prioridad. Estas son nuestras políticas.
                </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 fade-in max-w-4xl mx-auto">
                <Card className="p-6">
                    <CardHeader className="flex flex-row items-center gap-4 p-0">
                        <ShieldCheck className="w-10 h-10 text-primary" />
                        <CardTitle>Responsabilidad del Usuario</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 pl-0">
                        <p className="text-muted-foreground">
                          La seguridad de tu cuenta es un esfuerzo conjunto. Eres responsable de custodiar tus credenciales, y por nuestra parte, implementamos políticas como la rotación periódica de contraseñas y la restricción de claves recientes para fortalecer la protección de tus datos.
                        </p>
                    </CardContent>
                </Card>
                <Card className="p-6">
                    <CardHeader className="flex flex-row items-center gap-4 p-0">
                        <DatabaseZap className="w-10 h-10 text-primary" />
                        <CardTitle>Protección de Datos</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 pl-0">
                        <p className="text-muted-foreground">
                            Protegemos los datos con encriptación en bases de datos MySQL. Sin embargo, no nos hacemos responsables de accesos indebidos por negligencia del usuario en la custodia de sus credenciales.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-in">
              <ContactForm />
            </div>
        </div>
    </section>
);

export default function Home() {
  const [activeView, setActiveView] = useState<'enterprise' | 'apps'>('enterprise');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="soluciones" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Soluciones a tu medida</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {activeView === 'enterprise'
                  ? 'Impulsando el crecimiento y la eficiencia con tecnología de vanguardia.'
                  : 'Aplicaciones intuitivas que mejoran tu vida cotidiana.'}
              </p>
              <div className="mt-8 flex justify-center">
                <div className="bg-muted p-1 rounded-full flex items-center gap-2">
                  <Button
                    onClick={() => setActiveView('enterprise')}
                    variant={activeView === 'enterprise' ? 'default' : 'ghost'}
                    className="rounded-full px-8 py-2.5 transition-all duration-300"
                  >
                    Enterprise
                  </Button>
                  <Button
                    onClick={() => setActiveView('apps')}
                    variant={activeView === 'apps' ? 'default' : 'ghost'}
                    className="rounded-full px-8 py-2.5 transition-all duration-300"
                  >
                    Apps
                  </Button>
                </div>
              </div>
            </div>

            {activeView === 'enterprise' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 fade-in">
                {pageData.enterpriseSolutions.map((solution) => (
                  <Card key={solution.title} className="card-hover flex flex-col text-center items-center p-6">
                    <CardHeader>
                      <div className="bg-muted rounded-full p-4 mb-4">
                        {solution.icon}
                      </div>
                      <CardTitle>{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 fade-in">
                 {pageData.appSolutions.map((solution) => (
                  <Card key={solution.title} className="card-hover flex flex-col overflow-hidden">
                    <Link href={`https://${solution.subdomain}`} target="_blank" rel="noopener noreferrer" className="block">
                      <Image 
                          src={solution.image} 
                          alt={solution.title} 
                          width={600} 
                          height={400} 
                          className="w-full h-48 object-cover"
                          data-ai-hint={solution.hint}
                      />
                    </Link>
                    <CardHeader>
                      <CardTitle>{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{solution.description}</p>
                    </CardContent>
                    <CardFooter className="flex-col sm:flex-row gap-2">
                        <Button asChild className="w-full">
                            <Link href={`https://${solution.subdomain}`} target="_blank" rel="noopener noreferrer">
                                <Rocket className="mr-2 h-4 w-4" /> Acceder
                            </Link>
                        </Button>
                        <Button asChild className="w-full" variant="secondary">
                            <Link href={solution.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> Ver Código
                            </Link>
                        </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <Philosophy />
        <TechnologySlider />
        <Security />
        <Scope />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

    
