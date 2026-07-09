import { FaGithub } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition duration-500 hover:-translate-y-2 hover:border-cyan-400">

<div className="relative overflow-hidden">

  <img
    src={project.image}
    alt={project.title}
    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>

  <div className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
    {project.category}
  </div>

</div>

      <div className="p-8">

        <h3 className="text-3xl font-bold transition group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((item) => (

            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-cyan-300"
            >
              {item}
            </span>

          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.article}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400"
          >
            <FiBookOpen />
            Article
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;