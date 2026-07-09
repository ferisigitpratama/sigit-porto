import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;