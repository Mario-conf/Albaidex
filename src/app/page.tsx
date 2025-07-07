
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TaglineGenerator } from "@/components/tagline-generator";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, PenTool, CloudCog, Wrench, PiggyBank, FolderKanban, HeartPulse, Sparkles } from "lucide-react";

const Hero = () => (
  <section id="home" className="container mx-auto text-center py-20 md:py-32">
    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">Innovación Digital desde el Corazón de Granada</h1>
    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
      En Albaidex, fusionamos tecnología de vanguardia y visión estratégica para crear soluciones digitales que impulsan tu negocio.
    </p>
    <Button size="lg" asChild>
      <Link href="#contact">Solicita un Presupuesto</Link>
    </Button>
  </section>
);

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Desarrollo a Medida",
    description: "Construimos aplicaciones web y móviles personalizadas que resuelven tus desafíos de negocio y potencian el crecimiento.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Diseño UI/UX",
    description: "Nuestro equipo de diseño crea interfaces intuitivas y atractivas que garantizan una experiencia de usuario excepcional.",
  },
  {
    icon: <CloudCog className="h-10 w-10 text-primary" />,
    title: "Integración Cloud",
    description: "Aprovecha el poder de la nube con nuestros servicios de integración para una escalabilidad y eficiencia sin precedentes.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Mantenimiento y Soporte",
    description: "Ofrecemos soporte y mantenimiento continuo para asegurar que tus aplicaciones funcionen de forma segura y eficiente.",
  },
];

const Services = () => (
  <section id="services" className="bg-card py-20 md:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Servicios para Empresas</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">Servicios de desarrollo de ciclo completo para llevar tu proyecto de la idea al lanzamiento.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-8 transition-all transform hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-lg border-transparent hover:border-primary/30">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const freeApps = [
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "SavvySaver",
    description: "Una app intuitiva para seguir tus gastos y ahorrar dinero sin esfuerzo.",
  },
  {
    icon: <FolderKanban className="h-8 w-8 text-primary" />,
    title: "Org-nize",
    description: "Organiza tus tareas, notas y proyectos en una herramienta simple y potente.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "HealthHub",
    description: "Tu compañero de salud personal para seguir tus metas de fitness y bienestar.",
  },
];


const blogPosts = [
  {
    image: "https://placehold.co/600x400.png",
    hint: "granada alhambra",
    title: "Impulsando la Innovación: El Ecosistema Tecnológico de Granada",
    excerpt: "Descubre cómo Granada se está convirtiendo en un hub tecnológico clave en el sur de Europa, combinando historia, cultura y tecnología de vanguardia para fomentar un entorno de startups vibrante y en crecimiento.",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "user experience",
    title: "Diseño Centrado en el Usuario: La Clave del Éxito Digital",
    excerpt: "Un análisis profundo de por qué un enfoque de diseño centrado en el usuario es una necesidad para el éxito de cualquier app.",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "cloud computing",
    title: "Escalabilidad sin Límites con Aplicaciones en la Nube",
    excerpt: "Entiende cómo las aplicaciones nativas en la nube pueden proporcionar la flexibilidad que tu negocio necesita para crecer.",
  },
];

const Blog = () => (
    <section id="blog" className="bg-card py-20 md:py-24">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Desde Nuestro Blog</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">Ideas, noticias y actualizaciones del equipo de Albaidex.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <Card className="lg:col-span-2 flex flex-col overflow-hidden transition-shadow hover:shadow-lg h-full">
                    <CardHeader className="p-0">
                        <Image src={blogPosts[0].image} alt={blogPosts[0].title} width={800} height={450} className="w-full h-64 object-cover" data-ai-hint={blogPosts[0].hint} />
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                        <p className="text-sm text-primary font-medium mb-2">Destacado</p>
                        <h3 className="text-2xl font-semibold mb-3">{blogPosts[0].title}</h3>
                        <p className="text-muted-foreground">{blogPosts[0].excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                        <Button variant="link" className="p-0 h-auto" asChild>
                            <Link href="#">Leer Más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardFooter>
                </Card>

                <div className="space-y-8">
                    {blogPosts.slice(1).map((post, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                            <CardHeader className="p-0">
                                <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-40 object-cover" data-ai-hint={post.hint} />
                            </CardHeader>
                            <CardContent className="flex-grow p-4">
                                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button variant="link" size="sm" className="p-0 h-auto text-sm" asChild>
                                    <Link href="#">Leer Más <ArrowRight className="ml-1 h-3 w-3" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
);


const FreeTools = () => (
    <section id="free-tools" className="py-20 md:py-24">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Herramientas Gratuitas</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                    Explora nuestras apps y herramientas con IA para mejorar tu día a día y potenciar tus ideas.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Apps para Todos</h3>
                    <div className="space-y-6">
                        {freeApps.map((app, index) => (
                            <Card key={index} className="flex items-center gap-6 p-4 bg-card transition-shadow hover:shadow-lg">
                                {app.icon}
                                <div className="flex-grow">
                                    <h4 className="font-bold">{app.title}</h4>
                                    <p className="text-sm text-muted-foreground">{app.description}</p>
                                </div>
                                <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                                    <Link href="#">
                                        Probar <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                        <Sparkles className="h-7 w-7 text-primary" />
                        Generador de Lemas con IA
                    </h3>
                    <div className="bg-card rounded-lg p-1">
                      <TaglineGenerator />
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const ContactSection = () => (
  <section id="contact" className="bg-card py-20 md:py-24">
    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Construyamos Juntos</h2>
        <p className="text-lg text-muted-foreground mt-4">
          ¿Tienes un proyecto en mente? Nos encantaría escucharlo. Rellena el formulario y nos pondremos en contacto contigo.
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <FreeTools />
        <Blog />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
