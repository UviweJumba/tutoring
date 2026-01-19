import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-method');
  const founderImage = PlaceHolderImages.find(p => p.id === 'founder-portrait');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Our Method: Clarity and Structure
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            We believe that anyone can master complex subjects with the right approach. Our methodology is built on two core principles: breaking down complexity and providing a clear, structured path forward.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          {aboutImage && (
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={1200}
                  height={800}
                  data-ai-hint={aboutImage.imageHint}
                  className="w-full h-full object-cover"
                />
            </div>
          )}
        </div>

        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">From the Founder</h2>
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              {founderImage && (
                <div className="relative w-48 h-48">
                    <Image
                      src={founderImage.imageUrl}
                      alt={founderImage.description}
                      width={400}
                      height={400}
                      data-ai-hint={founderImage.imageHint}
                      className="rounded-full object-cover"
                    />
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-lg text-muted-foreground border-l-4 border-primary pl-6 italic">
                "I started ModuleMastery with a single goal: to make learning complex subjects accessible and intuitive for everyone. After years of struggling with traditional methods, I knew there had to be a better way. Our module-based approach is the result of that journey, designed to build confidence and true understanding, one concept at a time."
              </blockquote>
              <p className="mt-4 font-semibold text-right text-foreground">
                - Alex Doe, Founder of ModuleMastery
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
          <div className="prose prose-lg max-w-none prose-invert">
            <h2 className="text-3xl font-bold">From Chaos to Cohesion</h2>
            <p>
              Traditional learning often feels like drinking from a firehose. You're bombarded with disconnected facts, formulas, and techniques with little context on how they fit together. This leads to confusion, frustration, and the false belief that "I'm just not a math person."
            </p>
            <p>
              Our module-based system is the antidote. Each module is a self-contained unit of learning, focusing on a single core concept. We start with the "why"—the intuitive idea behind the math—before we even touch a formula. 
            </p>
          </div>
          <div className="prose prose-lg max-w-none prose-invert">
            <h2 className="text-3xl font-bold">Building a Foundation</h2>
            <p>
              Once the core idea is clear, we build upon it layer by layer. We introduce formal definitions, walk through visual examples, and then work on practical problems. The modules are designed to be sequential, with each one building on the knowledge of the last.
            </p>
            <p>
              This structured approach ensures you're never lost. You'll always know what you're learning, why you're learning it, and where it fits into the bigger picture. It's not about memorization; it's about building a true, lasting understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
