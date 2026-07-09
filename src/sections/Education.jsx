import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 py-32"
    >
      <Container>

        <SectionTitle
          subtitle="Academic Background"
          title="Education"
        />

        <div className="mx-auto max-w-5xl space-y-8">

          {education.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-cyan-400"
            >

              <div className="flex flex-col justify-between gap-4 md:flex-row">

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg text-cyan-400">
                    {item.school}
                  </p>

                  <p className="mt-2 text-slate-500">
                    {item.location}
                  </p>

                </div>

                <div className="text-right">

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                    {item.period}
                  </span>

                  {item.gpa && (
                    <p className="mt-4 text-slate-300">
                      GPA : <span className="font-semibold">{item.gpa}</span>
                    </p>
                  )}

                </div>

              </div>

              <p className="mt-6 leading-8 text-slate-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Education;