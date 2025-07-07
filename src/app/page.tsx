import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Flame, BrainCircuit, FileCode, Hexagon, Triangle, Wind, Network } from "lucide-react";

// Custom Icons
const CustomSoftwareIcon = () => (
  <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 6.375c.621 1.026 1.511 1.838 2.528 2.457A7.5 7.5 0 0018 16.5c.346 0 .684-.044 1.012-.128a7.525 7.525 0 00-4.01-4.425 7.5 7.5 0 00-8.49 5.25z" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ITConsultingIcon = () => (
  <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const SystemModernizationIcon = () => (
    <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.977 14.977 0 01-2.07 5.01m-1.72-5.01a14.977 14.977 0 00-2.07-5.01m6.09-3.32a14.977 14.977 0 01-5.84 7.38m5.84-7.38a14.977 14.977 0 00-5.84-7.38m5.84 7.38l-5.84 7.38m0-14.76l5.84 7.38" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
);

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
  <section className="h-screen flex items-center justify-center text-black relative bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080.png')"}} data-ai-hint="business team collaboration">
    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
    <div className="relative text-center px-4 fade-in z-10">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">Software that moves you.</h1>
      <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-800">We build powerful, elegant solutions for visionary businesses and individuals.</p>
      <Button asChild size="lg" className="mt-10 h-auto bg-[hsl(var(--amber))] text-black font-bold py-4 px-10 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-lg">
        <Link href="#contact">Start Your Project</Link>
      </Button>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white p-8 rounded-xl border border-gray-100 card-hover">
        <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full mb-6">
            {icon}
        </div>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="mt-3 text-gray-600">{description}</p>
    </div>
);

const ServicesBusiness = () => (
  <section id="services-business" className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">For Your Business</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Driving growth and efficiency with cutting-edge technology.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 fade-in" style={{ animationDelay: '0.4s' }}>
        <ServiceCard 
          icon={<CustomSoftwareIcon />}
          title="Custom Software"
          description="Bespoke applications built from the ground up to meet your exact business needs and goals."
        />
        <ServiceCard 
          icon={<ITConsultingIcon />}
          title="IT Consulting"
          description="Expert strategic advice to align your technology with your business objectives for maximum impact."
        />
        <ServiceCard 
          icon={<SystemModernizationIcon />}
          title="System Modernization"
          description="Upgrading legacy systems to enhance performance, security, and user experience."
        />
      </div>
    </div>
  </section>
);

const IndividualServiceCard = ({ imageUrl, imageAlt, hint, title, description }: { imageUrl: string, imageAlt: string, hint: string, title: string, description: string }) => (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover">
        <Image src={imageUrl} alt={imageAlt} width={600} height={400} className="w-full h-64 object-cover" data-ai-hint={hint} />
        <div className="p-8">
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="mt-3 text-gray-600">{description}</p>
        </div>
    </div>
);

const ServicesIndividual = () => (
  <section id="services-individual" className="py-20 md:py-32 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">For You</h3>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Intuitive, life-enhancing applications for everyday needs.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 fade-in" style={{ animationDelay: '0.4s' }}>
        <IndividualServiceCard 
            imageUrl="https://placehold.co/600x400.png"
            imageAlt="Ride-sharing app"
            hint="ride sharing app"
            title="On-Demand Transport"
            description="Get where you need to go with seamless, reliable ride-sharing platforms inspired by the best."
        />
        <IndividualServiceCard 
            imageUrl="https://placehold.co/600x400.png"
            imageAlt="Vacation rental platform"
            hint="vacation rental home"
            title="Unique Stays"
            description="Discover and book unique accommodations with feature-rich rental platforms."
        />
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="case-studies" className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Proven Success</h3>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">See how we transform industries with innovative solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="rounded-xl overflow-hidden">
          <Image src="https://placehold.co/600x500.png" alt="Case study" width={600} height={500} className="w-full h-auto object-cover" data-ai-hint="logistics warehouse" />
        </div>
        <div className="relative md:-ml-10 bg-white p-8 md:p-12 rounded-xl shadow-xl z-10 border border-gray-100">
          <span className="text-[hsl(var(--primary))] font-bold tracking-widest uppercase">Logistics</span>
          <h4 className="text-3xl font-bold mt-2">Efficiency Increased by 25%</h4>
          <p className="mt-4 text-gray-600 text-lg">We developed a custom ERP system for a major logistics client, streamlining workflows and slashing operational costs.</p>
          <Link href="#" className="mt-6 inline-flex items-center text-[hsl(var(--primary))] font-bold group">
            <span>Learn More</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
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
    <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Our Technology Stack</h3>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">We use modern, reliable technologies to build high-quality solutions.</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {technologies.map((tech, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                                <div className="p-1">
                                    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 h-40 card-hover">
                                        <div className="h-12 w-12 mb-4 text-gray-700">{tech.icon}</div>
                                        <p className="font-semibold text-gray-800 text-center">{tech.name}</p>
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
    <section id="contact" className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build something amazing?</h3>
                <p className="mt-4 text-lg text-gray-600">Let's talk about your next project.</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <ContactForm />
            </div>
        </div>
    </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesBusiness />
        <ServicesIndividual />
        <CaseStudies />
        <TechnologySlider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
