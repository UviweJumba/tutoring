import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Module } from '@/lib/modules';

interface PreviewCardProps {
  module: Module;
}

export default function PreviewCard({ module }: PreviewCardProps) {
  return (
    <Card className="flex flex-col border-2 hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <div className="flex items-baseline justify-between">
          <CardDescription>Module {module.id}</CardDescription>
          <span className="text-2xl font-mono text-primary opacity-80">{module.icon}</span>
        </div>
        <CardTitle className="text-xl font-bold text-foreground pt-1">{module.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{module.preview.title}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="secondary">
          <Link href={`/syllabus/${module.slug}#preview`}>View Preview</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
