import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";
import { fadeUp } from "../animations/fadeUp";

import skills from "../data/skills";


function Skills() {
  return (

<motion.section
  id="skills"
  className="bg-slate-950 py-28"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
>
        
      <Container>

        <SectionTitle
          title="Technical Expertise"
          subtitle="Skills & Technologies"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {skills.map((category) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.id}
                variants={fadeUp}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  p-8
                  backdrop-blur

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-cyan-500
                  hover:shadow-[0_20px_60px_rgba(6,182,212,.15)]
                "
              >

                {/* Header */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-cyan-500/10

                      text-cyan-400
                    "
                  >

                    <Icon size={28} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {category.title}

                    </h3>

                    <p className="mt-1 text-slate-400">

                      {category.subtitle}

                    </p>

                  </div>

                </div>

                {/* Divider */}

                <div
                  className="
                    my-8
                    h-px
                    w-full

                    bg-gradient-to-r
                    from-transparent
                    via-slate-700
                    to-transparent
                  "
                />

                {/* Skills */}

                <div className="flex flex-wrap gap-3">

                  {category.items.map((skill) => (

                    <span
                      key={skill}
                      className="
                        rounded-full

                        border
                        border-cyan-500/20

                        bg-cyan-500/5

                        px-4
                        py-2

                        text-sm
                        font-medium

                        text-cyan-300

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-cyan-400
                        hover:bg-cyan-500/10
                        hover:text-white
                      "
                    >

                      ● {skill}

                    </span>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>


      </Container>
    

    </motion.section>
  );
}

export default Skills;