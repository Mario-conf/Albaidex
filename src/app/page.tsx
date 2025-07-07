import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Using inline SVGs as they are custom and not in lucide-react
const CustomSoftwareIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 6.375c.621 1.026 1.511 1.838 2.528 2.457A7.5 7.5 0 0018 16.5c.346 0 .684-.044 1.012-.128a7.525 7.525 0 00-4.01-4.425 7.5 7.5 0 00-8.49 5.25z" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ITConsultingIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const SystemModernizationIcon = () => (
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.977 14.977 0 01-2.07 5.01m-1.72-5.01a14.977 14.977 0 00-2.07-5.01m6.09-3.32a14.977 14.977 0 01-5.84 7.38m5.84-7.38a14.977 14.977 0 00-5.84-7.38m5.84 7.38l-5.84 7.38m0-14.76l5.84 7.38" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
);


const Hero = () => (
  <section className="h-screen flex items-center justify-center text-foreground relative">
    <div className="absolute inset-0 bg-black/40 z-10" />
    <Image
        src="https://placehold.co/1920x1080.png"
        alt="Team collaborating on a project"
        fill
        className="object-cover"
        quality={100}
        priority
        data-ai-hint="business team collaboration"
    />
    <div className="relative text-center px-4 text-white z-20">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">Software that moves you.</h1>
      <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200">We build powerful, elegant solutions for visionary businesses and individuals.</p>
      <Button asChild size="lg" className="mt-10 h-auto py-4 px-10 text-lg font-bold shadow-lg text-primary-foreground">
        <Link href="#contact">Start Your Project</Link>
      </Button>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-card p-8 rounded-xl border border-gray-100 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center justify-center h-16 w-16 bg-muted rounded-full mb-6">
            {icon}
        </div>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
);

const ServicesBusiness = () => (
  <section id="services-business" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">For Your Business</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Driving growth and efficiency with cutting-edge technology.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    <div className="bg-card rounded-xl overflow-hidden border border-gray-100 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Image src={imageUrl} alt={imageAlt} width={600} height={400} className="w-full h-64 object-cover" data-ai-hint={hint} />
        <div className="p-8">
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="mt-3 text-muted-foreground">{description}</p>
        </div>
    </div>
);

const ServicesIndividual = () => (
  <section id="services-individual" className="py-20 md:py-32 bg-muted">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">For You</h3>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Intuitive, life-enhancing applications for everyday needs.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
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
  <section id="case-studies" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Proven Success</h3>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">See how we transform industries with innovative solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-xl overflow-hidden">
          <Image src="https://placehold.co/600x500.png" alt="Case study" width={600} height={500} className="w-full h-auto object-cover" data-ai-hint="logistics warehouse" />
        </div>
        <div className="relative md:-ml-10 bg-card p-8 md:p-12 rounded-xl shadow-xl z-10 border border-gray-100">
          <span className="text-primary font-bold tracking-widest uppercase">Logistics</span>
          <h4 className="text-3xl font-bold mt-2">Efficiency Increased by 25%</h4>
          <p className="mt-4 text-muted-foreground text-lg">We developed a custom ERP system for a major logistics client, streamlining workflows and slashing operational costs.</p>
          <Link href="#" className="mt-6 inline-flex items-center text-primary font-bold group">
            <span>Learn More</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, title, imageUrl, hint }: { quote: string, name: string, title: string, imageUrl: string, hint: string }) => (
    <Card className="p-8 border-gray-100">
        <CardContent className="p-0">
            <p className="text-lg text-foreground/80">"{quote}"</p>
            <div className="mt-6 flex items-center">
                <Image alt={name} className="w-14 h-14 rounded-full object-cover" src={imageUrl} width={56} height={56} data-ai-hint={hint} />
                <div className="ml-4">
                    <p className="font-bold text-foreground">{name}</p>
                    <p className="text-sm text-primary">{title}</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

const Testimonials = () => (
    <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Client Love</h3>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Our partners' success is our greatest achievement.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <TestimonialCard
                    quote="Albaidex transformed our vision into a scalable, high-performing reality. Their technical skill and commitment are unparalleled."
                    name="Johnathan Doe"
                    title="CEO, Tech Innovators"
                    imageUrl="https://placehold.co/100x100.png"
                    hint="male portrait professional"
                />
                <TestimonialCard
                    quote="The UX/UI design on our new mobile app is simply outstanding. The Albaidex team was a dream to collaborate with."
                    name="Jane Smith"
                    title="Founder, ConnectApp"
                    imageUrl="https://placehold.co/100x100.png"
                    hint="female portrait professional"
                />
                <TestimonialCard
                    quote="From day one, Albaidex provided strategic solutions that have future-proofed our IT infrastructure. Truly exceptional service."
                    name="Michael Brown"
                    title="CTO, Enterprise Solutions"
                    imageUrl="https://placehold.co/100x100.png"
                    hint="male portrait corporate"
                />
            </div>
        </div>
    </section>
);


const Contact = () => (
    <section id="contact" className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build something amazing?</h3>
                <p className="mt-4 text-lg text-muted-foreground">Let's talk about your next project.</p>
            </div>
            <ContactForm />
        </div>
    </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesBusiness />
        <ServicesIndividual />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
