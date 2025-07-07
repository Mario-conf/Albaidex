
'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Flame, BrainCircuit, FileCode, Hexagon, Triangle, Wind, Network } from "lucide-react";

// Custom Icons
const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full" fill="currentColor">
        <title>React</title>
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);

// Page Sections
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white bg-black">
    <Image src="https://placehold.co/1920x1080.png" alt="Equipo de Albaidex colaborando en un proyecto" layout="fill" objectFit="cover" className="opacity-40" data-ai-hint="modern office collaboration"/>
    <div className="relative z-10 p-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">Software que te impulsa.</h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200">Creamos soluciones potentes y elegantes para empresas e individuos con visión de futuro.</p>
        <Button asChild size="lg" className="mt-10 h-auto bg-primary text-primary-foreground font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg shadow-lg">
            <Link href="#contact">Comienza tu Proyecto</Link>
        </Button>
    </div>
  </section>
);

const IndividualServiceCard = ({ imageUrl, imageAlt, hint, title, description, reverse = false }: { imageUrl: string, imageAlt: string, hint: string, title: string, description: string, reverse?: boolean }) => (
    <div className={`grid md:grid-cols-2 gap-10 md:gap-20 items-center fade-in`}>
        <div className={`rounded-2xl overflow-hidden card-hover ${reverse ? 'md:order-last' : ''}`}>
            <Image src={imageUrl} alt={imageAlt} width={600} height={500} className="w-full h-auto object-cover" data-ai-hint={hint} />
        </div>
        <div className="text-left">
            <h4 className="text-3xl font-bold">{title}</h4>
            <p className="mt-4 text-muted-foreground text-lg">{description}</p>
            <Button asChild variant="link" className="p-0 mt-4 text-lg text-primary font-bold">
              <Link href="#">Saber más <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
    </div>
);

const technologies = [
  { name: "Next.js", icon: <Network className="w-full h-full" /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Tailwind CSS", icon: <Wind className="w-full h-full" /> },
  { name: "Firebase", icon: <Flame className="w-full h-full" /> },
  { name: "Genkit", icon: <BrainCircuit className="w-full h-full" /> },
  { name: "TypeScript", icon: <FileCode className="w-full h-full" /> },
  { name: "Node.js", icon: <Hexagon className="w-full h-full" fill="currentColor" /> },
  { name: "Vercel", icon: <Triangle className="w-full h-full" fill="currentColor" /> },
];

const TechnologySlider = () => (
    <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Nuestro Ecosistema Tecnológico</h3>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Usamos tecnologías modernas y fiables para construir soluciones de alta calidad.</p>
            </div>
            <div className="fade-in">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {technologies.map((tech, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                                <div className="p-1">
                                    <div className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-border/50 h-48 card-hover">
                                        <div className="h-16 w-16 mb-4 text-foreground/80">{tech.icon}</div>
                                        <p className="font-semibold text-foreground text-center">{tech.name}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </div>
    </section>
);

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
              <div className="space-y-20">
                <IndividualServiceCard 
                    imageUrl="https://placehold.co/600x500.png"
                    imageAlt="Desarrollo de software a medida"
                    hint="software development"
                    title="Software a Medida"
                    description="Aplicaciones a medida construidas desde cero para satisfacer las necesidades y objetivos de tu negocio."
                />
                <IndividualServiceCard 
                    imageUrl="https://placehold.co/600x500.png"
                    imageAlt="Consultoría tecnológica"
                    hint="business meeting"
                    title="Consultoría Tecnológica"
                    description="Asesoramiento estratégico experto para alinear tu tecnología con tus objetivos empresariales para un impacto máximo."
                    reverse={true}
                />
                <IndividualServiceCard 
                    imageUrl="https://placehold.co/600x500.png"
                    imageAlt="Modernización de sistemas"
                    hint="cloud infrastructure"
                    title="Modernización de Sistemas"
                    description="Actualización de sistemas heredados para mejorar el rendimiento, la seguridad y la experiencia del usuario."
                />
              </div>
            ) : (
              <div className="space-y-20">
                <IndividualServiceCard 
                    imageUrl="https://placehold.co/600x500.png"
                    imageAlt="App de transporte"
                    hint="mobile app interface"
                    title="Transporte On-Demand"
                    description="Llega a donde necesites con plataformas de viaje compartido fiables y sin interrupciones, inspiradas en los mejores."
                />
                <IndividualServiceCard 
                    imageUrl="https://placehold.co/600x500.png"
                    imageAlt="Plataforma de alquileres"
                    hint="map navigation city"
                    title="Estancias Únicas"
                    description="Descubre y reserva alojamientos únicos con plataformas de alquiler ricas en funcionalidades."
                    reverse={true}
                />
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
