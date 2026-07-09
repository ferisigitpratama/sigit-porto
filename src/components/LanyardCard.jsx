import profile from "../assets/images/profile.png";

function LanyardCard() {
  return (
    <div className="relative flex justify-center">

      {/* Rope */}

      <div className="absolute -top-44 left-1/2 h-40 w-[10px] -translate-x-1/2 rounded-full bg-neutral-900 shadow-lg">

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-[10px]
            font-bold
            tracking-[2px]
            text-white
            [writing-mode:vertical-rl]
          "
        >
          
        </div>

      </div>

      {/* Ring */}

      <div
        className="
          absolute
          -top-6
          left-1/2
          z-20
          h-10
          w-10
          -translate-x-1/2
          rounded-full
          border-[5px]
          border-slate-400
          bg-slate-800
        "
      />

      {/* Card */}

      <div
        className="
          relative
          mt-8
          w-[360px]
          overflow-hidden
          rounded-[28px]
          border
          border-slate-700
          bg-slate-900
          shadow-2xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:rotate-1
        "
      >

        {/* Top */}

        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900">

          <img
            src={profile}
            alt="Feri Sigit"
            className="mx-auto w-[300px] object-contain"
          />

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 p-6">

          <h2 className="text-2xl font-bold text-white">

            FERI SIGIT

          </h2>

          <p className="mt-1 text-cyan-400">

            Network Engineer

          </p>

          <div className="mt-5 flex justify-between text-sm">

            <div>

              <p className="text-slate-500">

                EXPERIENCE

              </p>

              <p className="text-white">

                4+ Years

              </p>

            </div>

            <div>

              <p className="text-slate-500">

                PROJECTS

              </p>

              <p className="text-white">

                5+

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LanyardCard;