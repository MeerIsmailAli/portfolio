"use client";
import { Mail, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Header({setActiveSection}) {
    
  return (
    <div className="w-full bg-gray-100 border-b shadow-sm py-4 px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
  <div>
    <h1 className="text-2xl font-bold text-gray-800">Meer Ismail</h1>
    <p className="text-sm text-gray-600">Full Stack Developer | ML Enthusiast</p>
    <div className="mt-2 flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => setActiveSection('Bio')}
      >
        Bio
      </Button>
      <Button
        variant="outline"
        onClick={() => setActiveSection('Projects')}
      >
        Projects
      </Button>
    </div>
  </div>
  <div className="flex flex-wrap gap-2 md:gap-4">
    <Button asChild variant="outline">
      <a href="mailto:meerismailali@gmail.com">
        <Mail className="mr-2 h-4 w-4" />
        Contact
      </a>
    </Button>
    <Button asChild variant="outline">
      <a
        href="https://github.com/meerismailali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </a>
    </Button>
  </div>
</div>

  );
}
