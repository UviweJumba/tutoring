'use client';

import { useState } from 'react';
import { curriculum, type Module, type Subject } from '@/lib/modules';
import ModuleCard from '@/components/ModuleCard';
import { Button } from '@/components/ui/button';
import { Book, Atom, Computer } from 'lucide-react';

const subjectIcons: { [key: string]: React.ReactNode } = {
  Mathematics: <Book className="h-5 w-5" />,
  Physics: <Atom className="h-5 w-5" />,
  'Computer Science': <Computer className="h-5 w-5" />,
};

export default function SyllabusHub() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(
    curriculum[0]
  );

  const modules = selectedSubject.modules;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Structured Learning Paths
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          Browse our complete curriculum. Each module is a building block
          designed to take you from foundational principles to advanced
          application.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mt-16">
        <aside className="md:w-1/4 lg:w-1/5">
          <h2 className="text-xl font-bold mb-4 px-4">Subjects</h2>
          <nav className="flex flex-col gap-1">
            {curriculum.map((subject) => (
              <Button
                key={subject.slug}
                variant={
                  selectedSubject.slug === subject.slug ? 'secondary' : 'ghost'
                }
                className="justify-start h-11"
                onClick={() => setSelectedSubject(subject)}
              >
                {subjectIcons[subject.name]}
                <span>{subject.name}</span>
              </Button>
            ))}
          </nav>
        </aside>
        <main className="flex-1">
          <h2 className="text-3xl font-bold mb-8">{selectedSubject.name}</h2>
          {modules.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {modules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 rounded-lg border-2 border-dashed text-muted-foreground">
              <p>Modules for {selectedSubject.name} are coming soon!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
