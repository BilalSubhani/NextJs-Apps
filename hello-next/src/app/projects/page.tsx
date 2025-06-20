import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-4">My Projects</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <ProjectCard
          title="Mini Portfolio"
          desc="A simple Next.js website with routing and Tailwind."
        />
        <ProjectCard
          title="Blog UI"
          desc="Created a blog design using Tailwind CSS."
        />
      </div>
    </div>
  );
}
