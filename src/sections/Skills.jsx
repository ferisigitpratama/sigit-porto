import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-32"
    >
      <Container>

        <SectionTitle
          subtitle="Technical Expertise"
          title="Skills & Technologies"
        />

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (

            <div
              key={skill.category}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-cyan-400"
            >

              <h3 className="mb-6 text-2xl font-bold">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    {item}
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

export default Skills;