import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Presentation } from 'lucide-react';
import PreviewCard from '@/components/PreviewCard';
import { modules } from '@/lib/modules';

export default function Home() {
  const previewModules = modules.slice(0, 3);
  const socialProof = [
    { text: 'Structured, step-by-step learning paths.', icon: CheckCircle },
    { text: 'Clear explanations of complex topics.', icon: CheckCircle },
    { text: 'Gain practical, applicable skills.', icon: CheckCircle },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Master Complexity, One Module at a Time.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Stop wandering through endless tutorials. Our structured courses guide you from foundational concepts to advanced mastery with clarity and purpose.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/syllabus">
                Explore All Modules <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Our Method</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {socialProof.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get a Taste of the Material
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Dive into a free preview of our core modules and experience our teaching style firsthand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {previewModules.map((module) => (
              <PreviewCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto text-center">
          <Presentation className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Our full syllabus is designed to build your knowledge logically and completely. Find the right path for you.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/syllabus">
              Explore All Modules <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
