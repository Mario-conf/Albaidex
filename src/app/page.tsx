
'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, TrendingUp, RefreshCw } from "lucide-react";

// All dynamic page content is centralized here for easy editing.
const pageData = {
  hero: {
    image: "https://placehold.co/1920x1080.png",
    hint: "modern office collaboration"
  },
  enterpriseSolutions: [
    {
      title: "Software a Medida",
      description: "Creamos soluciones de software personalizadas y escalables que se adaptan a las necesidades específicas de tu empresa.",
      icon: <Puzzle className="w-8 h-8 text-primary" />
    },
    {
      title: "Consultoría Tecnológica",
      description: "Te ayudamos a alinear tu estrategia tecnológica con tus objetivos de negocio para un crecimiento sostenible.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    },
    {
      title: "Modernización de Sistemas",
      description: "Actualizamos tus sistemas heredados a arquitecturas modernas, mejorando la eficiencia y la seguridad.",
      icon: <RefreshCw className="w-8 h-8 text-primary" />
    }
  ],
  appSolutions: [
    {
      title: "Transporte On-Demand",
      description: "Conectamos usuarios y conductores de forma eficiente y fiable.",
      image: "https://placehold.co/600x400.png",
      hint: "city street"
    },
    {
      title: "Estancias Únicas",
      description: "Plataformas de alquiler vacacional con experiencias excepcionales.",
      image: "https://placehold.co/600x400.png",
      hint: "modern interior"
    },
    {
      title: "Entrega de Comida",
      description: "Soluciones rápidas y eficientes para restaurantes y clientes.",
      image: "https://placehold.co/600x400.png",
      hint: "food delivery"
    },
    {
      title: "Fitness Personal",
      description: "Apps que motivan y guían a los usuarios hacia sus metas de salud.",
      image: "https://placehold.co/600x400.png",
      hint: "fitness workout"
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
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">Software que te impulsa.</h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200">Creamos soluciones potentes y elegantes para empresas e individuos con visión de futuro.</p>
        <Button asChild size="lg" className="mt-10 h-auto bg-primary text-primary-foreground font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg shadow-lg">
            <Link href="#contact">Comienza tu Proyecto</Link>
        </Button>
    </div>
  </section>
);

const TechnologySlider = () => {
    const extendedTechnologies = [...pageData.technologies, ...pageData.technologies];

    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden">
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

const Contact = () => (
    <section id="contact" className="bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center fade-in">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">¿Listo para construir algo increíble?</h3>
                <p className="mt-4 text-lg text-muted-foreground">Hablemos de tu próximo proyecto.</p>
            </div>
            <div className="fade-in mt-8">
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
                  <Card key={solution.title} className="card-hover flex flex-col text-center items-center p-4">
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
                    <Image 
                        src={solution.image} 
                        alt={solution.title} 
                        width={600} 
                        height={400} 
                        className="w-full h-48 object-cover"
                        data-ai-hint={solution.hint}
                    />
                    <CardHeader>
                      <CardTitle>{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <TechnologySlider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
