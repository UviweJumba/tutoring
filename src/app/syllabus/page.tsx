import { modules } from "@/lib/modules";
import ModuleCard from "@/components/ModuleCard";

export default function SyllabusHub() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Structured Learning Paths
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          Browse our complete curriculum. Each module is a building block designed to take you from foundational principles to advanced application.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}
