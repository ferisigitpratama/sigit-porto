import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-32"
    >
      <Container>

        <SectionTitle
          subtitle="Who Am I"
          title="About Me"
        />

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <h3 className="mb-6 text-3xl font-bold">
              Network Operations Center &
              <span className="text-cyan-400">
                {" "}Information Technology Enthusiast
              </span>
            </h3>

            <p className="mb-6 leading-8 text-slate-400">
              IT professional with more than four years of experience
              in Network Engineering and Network Operations.
              Experienced in designing, operating, and maintaining
              enterprise network infrastructure while ensuring
              high availability and service reliability.
            </p>

            <p className="leading-8 text-slate-400">
              Passionate about Routing, MPLS, EVPN, VXLAN,
              Linux, Docker, Virtualization, and documenting
              real-world networking labs through GitHub and
              technical articles.
            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <h3 className="text-5xl font-bold text-cyan-400">
                4+
              </h3>

              <p className="mt-3 text-slate-400">
                Years Experience
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <h3 className="text-5xl font-bold text-cyan-400">
                20+
              </h3>

              <p className="mt-3 text-slate-400">
                Networking Projects
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <h3 className="text-5xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="mt-3 text-slate-400">
                Technologies
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <h3 className="text-5xl font-bold text-cyan-400">
                99%
              </h3>

              <p className="mt-3 text-slate-400">
                Reliability Focus
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;