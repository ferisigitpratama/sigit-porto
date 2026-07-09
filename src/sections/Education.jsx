import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-28"
    >
      <Container>

        <SectionTitle
          title="Education"
          subtitle="Academic Background"
        />

        <div className="mt-16 space-y-10">

          {education.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10 transition hover:border-cyan-500"
            >

              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-xl text-cyan-400">
                    {item.school}
                  </p>

                </div>

                <div className="text-slate-400">
                  {item.period}
                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-300">
                {item.description}
              </p>

              <div className="mt-8">

                <h4 className="mb-4 text-lg font-semibold text-white">
                  Highlights
                </h4>

                <ul className="space-y-3 text-slate-400">

                  {item.highlights?.map((point, idx) => (

                    <li key={idx}>
                      • {point}
                    </li>

                  ))}

                </ul>

              </div>

{item.thesis && (
  <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-950 p-6">

    <h4 className="text-xl font-bold text-cyan-400">
      Undergraduate Research
    </h4>

    <p className="mt-3 text-white">
      {item.thesis.title}
    </p>

    <p className="mt-2 text-slate-400">
      {item.thesis.journal}
    </p>

    <a
      href={item.thesis.pdf}
      target="_blank"
      rel="noreferrer"
      className="mt-5 inline-flex rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
    >
      View Research Paper
    </a>

  </div>
)}

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Education;