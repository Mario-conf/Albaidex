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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
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

const FreeApps = () => (
  <section id="free-apps" className="py-20 md:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Apps Gratuitas para Todos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">Creemos en el poder de la tecnología para mejorar vidas, una app a la vez.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {freeApps.map((app, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg bg-card">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              {app.icon}
              <CardTitle className="text-2xl">{app.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{app.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Descargar Ahora
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const blogPosts = [
  {
    image: "https://placehold.co/600x400.png",
    hint: "granada alhambra",
    title: "Impulsando la Innovación: El Ecosistema Tecnológico de Granada",
    excerpt: "Descubre cómo Granada se está convirtiendo en un hub tecnológico clave en el sur de Europa.",
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg bg-card">
            <CardHeader className="p-0">
              <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={post.hint} />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="#">Leer Más <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TaglineSection = () => (
  <section id="ai-tool" className="py-20 md:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          Generador de Lemas con IA
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
          ¿Atascado sin un lema? Describe tu app y deja que nuestra IA genere opciones pegadizas para ti.
        </p>
      </div>
      <TaglineGenerator />
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
        <FreeApps />
        <Blog />
        <TaglineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
