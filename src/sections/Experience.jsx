import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-32"
    >
      <Container>

        <SectionTitle
          subtitle="Career Journey"
          title="Experience"
        />

        <div className="relative mx-auto max-w-5xl">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-800"></div>

          {experience.map((item) => (
            <div
              key={item.id}
              className="relative mb-16 pl-14"
            >

              {/* Circle */}
              <div className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-cyan-400 bg-slate-950"></div>

              <span className="text-sm uppercase tracking-widest text-cyan-400">
                {item.year}
              </span>

              <h3 className="mt-2 text-3xl font-bold">
                {item.position}
              </h3>

              <p className="mt-2 text-lg text-slate-400">
                {item.company}
              </p>

              <p className="mb-6 text-slate-500">
                {item.location}
              </p>

              <p className="max-w-3xl leading-8 text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;