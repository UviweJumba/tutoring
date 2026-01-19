import { notFound } from 'next/navigation';
import Link from 'next/link';
import { modules, type Module } from '@/lib/modules';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, ArrowRight, Video, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

function getModuleData(slug: string) {
    const module = modules.find((m) => m.slug === slug);
    if (!module) {
      return null;
    }
    const otherModules = modules.filter((m) => m.slug !== slug);
    return { module, otherModules };
}

export default function ModulePage({ params }: { params: { slug:string } }) {
  const data = getModuleData(params.slug);

  if (!data) {
    notFound();
  }
  
  const { module, otherModules } = data;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <main className="lg:col-span-2">
          <div className="mb-8">
            <p className="text-base font-semibold text-primary">Module {module.id}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{module.title}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{module.description}</p>
          </div>
          
          <Separator />
          
          <section id="preview" className="scroll-mt-20 py-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">{module.preview.title}</h2>
            <div className="prose prose-lg max-w-none">
              {module.preview.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            {module.preview.videoUrl && (
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={module.preview.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </section>

          {/* Premium Divider */}
          <div className="my-12 flex items-center text-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-lg font-semibold text-muted-foreground flex items-center gap-2">
              <Lock className="h-5 w-5" /> Continue with Premium
            </span>
            <div className="flex-grow border-t border-border"></div>
          </div>
          
          {/* Premium Content Placeholder */}
          <div className="space-y-6 opacity-50">
            <h3 className="text-2xl font-bold">Complete Notes & Walkthroughs</h3>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <FileText className="h-6 w-6 text-muted-foreground mt-1"/>
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </div>
             <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <Video className="h-6 w-6 text-muted-foreground mt-1"/>
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
            <p className="text-muted-foreground">Unlock complete notes, additional video walkthroughs, practice problems, and full solutions with a premium membership.</p>
          </div>

          <Button size="lg" className="mt-10" asChild>
            <a href={`mailto:contact@modulemastery.com?subject=Interest in Premium Access for ${module.title}`}>
              Get Full Access <ArrowRight className="ml-2" />
            </a>
          </Button>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle>Module Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge>Free Preview</Badge>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Other Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {otherModules.map(m => (
                    <li key={m.id}>
                      <Link href={`/syllabus/${m.slug}`} className="group flex items-center justify-between rounded-md p-2 -m-2 hover:bg-accent transition-colors">
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-accent-foreground">{m.title}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-accent-foreground">{m.tagline}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
