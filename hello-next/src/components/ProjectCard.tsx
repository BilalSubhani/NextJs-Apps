export default function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-dark shadow rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
