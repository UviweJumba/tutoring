import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Module } from '@/lib/modules';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card">
      <CardHeader className="bg-muted/30">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Module {module.id}</span>
          <span className="text-4xl font-mono text-primary opacity-70">{module.icon}</span>
        </div>
        <CardTitle className="pt-2 text-2xl font-bold">{module.title}</CardTitle>
        <CardDescription className="pt-1">{module.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <p className="text-muted-foreground">{module.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 bg-muted/30">
        <Button asChild className="w-full">
          <Link href={`/syllabus/${module.slug}`}>View Module</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
