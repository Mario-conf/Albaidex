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
    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">Crafting Digital Solutions, Powering Your Vision.</h1>
    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
      SynergTech Innovations is your partner in building powerful, user-centric applications. From bespoke business solutions to free apps that enrich daily life, we bring ideas to life with technology.
    </p>
    <Button size="lg" asChild>
      <Link href="#contact">Get a Quote</Link>
    </Button>
  </section>
);

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Custom App Development",
    description: "We build tailor-made mobile and web applications that solve your specific business challenges and drive growth.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Our design team creates intuitive and beautiful interfaces that provide an exceptional user experience.",
  },
  {
    icon: <CloudCog className="h-10 w-10 text-primary" />,
    title: "Cloud Integration",
    description: "Leverage the power of the cloud with our seamless integration services for scalability and efficiency.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Maintenance & Support",
    description: "We provide ongoing support and maintenance to ensure your applications run smoothly and securely.",
  },
];

const Services = () => (
  <section id="services" className="bg-card py-20 md:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services for Businesses</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">Full-cycle development services to bring your project from idea to launch.</p>
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
    description: "An intuitive app to track your expenses and save money effortlessly.",
  },
  {
    icon: <FolderKanban className="h-8 w-8 text-primary" />,
    title: "Org-nize",
    description: "Organize your tasks, notes, and projects in one simple, powerful tool.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "HealthHub",
    description: "Your personal health companion for tracking fitness goals and wellness.",
  },
];

const FreeApps = () => (
  <section id="free-apps" className="py-20 md:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Free Apps for Everyone</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">We believe in the power of technology to improve lives, one app at a time.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {freeApps.map((app, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              {app.icon}
              <CardTitle className="text-2xl">{app.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{app.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download Now
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
    hint: "technology abstract",
    title: "The Future of Mobile App Development Trends",
    excerpt: "Explore the upcoming trends in mobile app development that are set to revolutionize the industry in the coming years.",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "user experience",
    title: "Why UI/UX is the Key to Your App's Success",
    excerpt: "A deep dive into why a user-centric design approach is not just a feature, but a necessity for app success.",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "cloud computing",
    title: "Scaling Your Business with Cloud-Native Apps",
    excerpt: "Understand how cloud-native applications can provide the scalability and flexibility your business needs to grow.",
  },
];

const Blog = () => (
  <section id="blog" className="bg-card py-20 md:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From Our Blog</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">Insights, news, and updates from the SynergTech team.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={post.hint} />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="#">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
          AI-Powered Tagline Generator
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
          Stuck on a tagline? Describe your app and let our AI generate catchy options for you.
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
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Let's Build Together</h2>
        <p className="text-lg text-muted-foreground mt-4">
          Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you to discuss how we can turn your idea into reality.
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
