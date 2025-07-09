
'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useToast } from "@/hooks/use-toast";
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
  Rocket,
  Mail,
  ClipboardCopy,
  Instagram,
  ArrowUpRight
} from "lucide-react";

// All dynamic page content is centralized here for easy editing.
const pageData = {
  hero: {
    title: "Hacemos software, no magia.",
    subtitle: "Convertimos tus ideas en soluciones de software a medida, potentes y eficientes para tu negocio.",
    image: "/img/img/bg.jpg",
    hint: "background"
  },
  enterpriseSolutions: [
    {
      title: "Desarrollo a Medida",
      description: "Creamos software personalizado y escalable que se adapta a las necesidades específicas de tu empresa.",
      icon: <Puzzle className="w-10 h-10 text-primary" />
    },
    {
      title: "Automatización de Procesos",
      description: "Optimizamos tus flujos de trabajo con soluciones de automatización inteligentes para aumentar la eficiencia.",
      icon: <Bot className="w-10 h-10 text-primary" />
    },
    {
      title: "Consultoría Tecnológica",
      description: "Te ayudamos a alinear tu estrategia tecnológica con tus objetivos de negocio para un crecimiento sostenible.",
      icon: <TrendingUp className="w-10 h-10 text-primary" />
    },
    {
      title: "Adaptación de Sistemas",
      description: "Personalizamos e integramos aplicaciones internas para que funcionen perfectamente en tu ecosistema.",
      icon: <Cog className="w-10 h-10 text-primary" />
    },
    {
      title: "IA Generativa",
      description: "Implementamos soluciones con IA Generativa para potenciar la innovación y la capacidad de tu negocio.",
      icon: <Sparkles className="w-10 h-10 text-primary" />
    },
    {
      title: "Digitalización",
      description: "Modernizamos tus sistemas y procesos para impulsar tu transformación digital de forma segura.",
      icon: <Server className="w-10 h-10 text-primary" />
    }
  ],
  appSolutions: [
    {
      title: "Fondo Mercato",
      description: "Gestión financiera inteligente para particulares.",
      image: "/img/img/apps/fondomercatologo.png",
      hint: "finance dashboard",
      url: "https://fondomercato.vercel.app/",
      githubUrl: "https://github.com/Mario-conf/FondoMercato"
    },

    
  ],
  technologies: [
    { name: "Typescript", image: "/img/img/typescript.png", hint: "typescript logo" },
    { name: "docker", image: "/img/img/docker.png", hint: "docker logo" },
    { name: "php", image: "/img/img/php.png", hint: "php logo" },
    { name: "angular", image: "/img/img/angular.png", hint: "angular" },
    { name: "aws", image: "/img/img/aws.png", hint: "aws logo" },
    { name: "ubuntu", image: "/img/img/ubuntu.png", hint: "ubuntu logo" },
    { name: "React", image: "/img/img/react.png", hint: "react logo" },
    { name: "microsoft", image: "/img/img/microsoft.png", hint: "microsoft logo" },
    { name: "mysql", image: "/img/img/mysql.png", hint: "mysql logo" },
    { name: "gcloud", image: "/img/img/gcloud.png", hint: "gcloud logo" },
    { name: "python", image: "/img/img/python.png", hint: "python" },
    { name: "htmlcss", image: "/img/img/htmlcss.png", hint: "htmlcss logo" },
    { name: "java", image: "/img/img/java.png", hint: "java logo" },

  ]
};


// Page Sections
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white bg-black">
    <Image 
      src={pageData.hero.image} 
      alt="Equipo de Albaidex colaborando en un proyecto" 
      fill 
      priority
      className="object-cover opacity-40" 
      data-ai-hint={pageData.hero.hint}
    />
    <div className="relative z-10 p-4 fade-in">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white text-shadow-md">{pageData.hero.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 text-shadow">{pageData.hero.subtitle}</p>
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
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Nuestro Ecosistema Tecnológico</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Usamos tecnologías modernas y fiables para construir soluciones de alta calidad.</p>
                </div>
            </div>
            <div className="relative fade-in">
                <div className="flex w-max animate-marquee">
                    {extendedTechnologies.map((tech, index) => (
                        <div key={index} className="flex-shrink-0 w-52 px-4">
                            <div className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-border/50 h-32">
                                <div className="relative h-20 w-32">
                                  <Image 
                                      src={tech.image} 
                                      alt={tech.name} 
                                      fill
                                      className="object-contain"
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
        <Card className="card-hover flex flex-col">
          <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="bg-background rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
              <Github className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Open Code</h3>
            <p className="text-muted-foreground">La mayoría de nuestras apps son de código accesible, promoviendo la transparencia y la colaboración comunitaria bajo licencias claras.</p>
          </CardContent>
        </Card>
        <Card className="card-hover flex flex-col">
          <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="bg-background rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">IA Esencial</h3>
            <p className="text-muted-foreground">Apostamos por la Inteligencia Artificial como una herramienta indispensable en nuestros procesos de desarrollo para crear soluciones más inteligentes.</p>
          </CardContent>
        </Card>
        <Card className="card-hover flex flex-col">
          <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="bg-background rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Eficiencia Radical</h3>
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
        <Card className="card-hover flex flex-col">
          <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="bg-muted rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Clientes Internacionales</h3>
            <p className="text-muted-foreground">Nuestro alcance es global, colaboramos con clientes y empresas de cualquier país para llevar sus ideas al siguiente nivel.</p>
          </CardContent>
        </Card>
        <Card className="card-hover flex flex-col">
          <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="bg-muted rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
              <Wifi className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Trabajo Remoto</h3>
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
                <Card className="card-hover flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                    <div className="bg-background rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
                      <ShieldCheck className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Responsabilidad del Usuario</h3>
                    <p className="text-muted-foreground">
                      La seguridad es una responsabilidad compartida. Protege tus credenciales y sigue las buenas prácticas; nosotros nos encargamos de la seguridad de la plataforma para crear un entorno seguro para todos.
                    </p>
                  </CardContent>
                </Card>
                <Card className="card-hover flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                    <div className="bg-background rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
                      <DatabaseZap className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Protección de Datos</h3>
                    <p className="text-muted-foreground">
                      Aplicamos prácticas de seguridad robustas para proteger tus datos y la integridad de nuestras aplicaciones. Tu confianza es fundamental, y la cuidamos con la máxima seriedad.
                    </p>
                  </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

const Contact = () => {
  const { toast } = useToast();

  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Email copiado",
      description: "La dirección de correo ha sido copiada al portapapeles.",
    });
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Estamos a un clic. Literalmente</h2>
          <p className="mt-4 text-lg text-muted-foreground">Elige cómo prefieres hablar con nosotros, de forma rápida y sencilla.</p>
          <Card className="mt-12 text-left shadow-lg overflow-hidden bg-muted">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/img/img/icons/logoalbaidex.png"
                  alt="Albaidex Logo"
                  width={190.8}
                  height={95.4}
                  className="object-contain"
                  data-ai-hint="company logo"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg bg-background transition-colors duration-200 ease-in-out hover:bg-accent group">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:info@albaidex.com" className="ml-4 text-sm font-medium text-foreground">info@albaidex.com</a>
                  <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleCopy('info@albaidex.com')}>
                    <ClipboardCopy className="w-4 h-4" />
                    <span className="sr-only">Copiar email</span>
                  </Button>
                </div>
                
                <a href="https://www.instagram.com/albaidex" className="flex items-center p-3 rounded-lg bg-background transition-colors duration-200 ease-in-out hover:bg-accent group" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="ml-4 text-sm font-medium text-foreground">Síguenos en Instagram</span>
                  <ArrowUpRight className="w-5 h-5 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
};

export default function Home() {
  const [activeView, setActiveView] = useState<'enterprise' | 'apps'>('enterprise');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="soluciones" className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Soluciones a tu medida</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {activeView === 'enterprise'
                  ? 'Impulsando el crecimiento y la eficiencia con tecnología de vanguardia.'
                  : 'Aplicaciones intuitivas que mejoran tu vida cotidiana.'}
              </p>
              <div className="mt-8 flex justify-center">
                <div className="bg-background p-1 rounded-full flex items-center gap-1 sm:gap-2">
                  <Button
                    onClick={() => setActiveView('enterprise')}
                    variant={activeView === 'enterprise' ? 'default' : 'ghost'}
                    className="rounded-full px-4 sm:px-8 py-2.5 transition-all duration-300"
                  >
                    Enterprise
                  </Button>
                  <Button
                    onClick={() => setActiveView('apps')}
                    variant={activeView === 'apps' ? 'default' : 'ghost'}
                    className="rounded-full px-4 sm:px-8 py-2.5 transition-all duration-300"
                  >
                    Apps
                  </Button>
                </div>
              </div>
            </div>

            {activeView === 'enterprise' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 fade-in">
                {pageData.enterpriseSolutions.map((solution) => (
                  <Card key={solution.title} className="card-hover flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <div className="bg-background rounded-2xl w-full p-6 mb-6 flex justify-center items-center h-24">
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 fade-in">
                 {pageData.appSolutions.map((solution) => (
                  <Card key={solution.title} className="card-hover flex flex-col overflow-hidden">
                    <Link href={solution.url} target="_blank" rel="noopener noreferrer" className="block">
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
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">{solution.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{solution.description}</p>
                    </CardContent>
                    <CardFooter className="flex-col sm:flex-row gap-2">
                        <Button asChild className="w-full">
                            <Link href={solution.url} target="_blank" rel="noopener noreferrer">
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
