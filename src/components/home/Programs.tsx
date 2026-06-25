"use client";

import {
  FaChessPawn,
  FaChessKnight,
  FaChessQueen,
  FaCheckCircle,
} from "react-icons/fa";

export default function Programs() {
  const programs = [
    {
      title: "Beginner Program",
      age: "Ages 5–8",
      icon: <FaChessPawn />,
      features: [
        "Chess Fundamentals",
        "Pattern Recognition",
        "Strategic Thinking",
      ],
      dark: false,
    },
    {
      title: "Intermediate Program",
      age: "Ages 8–12",
      icon: <FaChessKnight />,
      features: [
        "Tactical Awareness",
        "Positional Understanding",
        "Tournament Readiness",
      ],
      dark: true,
    },
    {
      title: "Advanced Program",
      age: "Ages 12+",
      icon: <FaChessQueen />,
      features: [
        "Advanced Strategy",
        "Game Analysis",
        "Competitive Development",
      ],
      dark: false,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A46A]">
            Our Programs
          </p>

          <h2 className="heading-font text-5xl md:text-7xl text-[#002C43] mt-5 leading-tight">
            A Program For
            <br />
            Every Stage Of Growth.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-[#6B7280] max-w-3xl leading-relaxed">
            Structured learning pathways designed to help students
            progress from fundamentals to competitive excellence.
          </p>
        </div>

        {/* Program Cards */}

        <div className="mt-20 space-y-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={
                program.dark
                  ? "bg-[#002C43] rounded-[36px] p-8 md:p-12 overflow-hidden relative"
                  : "card-surface soft-shadow rounded-[36px] p-8 md:p-12 overflow-hidden relative"
              }
            >
              {/* Decorative Shape */}

              <div
                className={
                  program.dark
                    ? "absolute -right-12 -top-12 w-40 h-40 rounded-full border border-white/10"
                    : "absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#F5E8D3]"
                }
              />

              <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                <div>
                  {/* Icon */}

                  <div
                    className={
                      program.dark
                        ? "w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8"
                        : "w-16 h-16 rounded-2xl bg-[#F5E8D3] flex items-center justify-center mb-8"
                    }
                  >
                    <div
                      className={
                        program.dark
                          ? "text-3xl text-[#C8A46A]"
                          : "text-3xl text-[#002C43]"
                      }
                    >
                      {program.icon}
                    </div>
                  </div>

                  <p className="text-[#C8A46A] uppercase tracking-wider text-sm">
                    {program.age}
                  </p>

                  <h3
                    className={
                      program.dark
                        ? "text-white text-3xl md:text-4xl mt-3 font-semibold"
                        : "text-[#002C43] text-3xl md:text-4xl mt-3 font-semibold"
                    }
                  >
                    {program.title}
                  </h3>

                  <div className="mt-8 grid sm:grid-cols-3 gap-4">
                    {program.features.map((feature) => (
                      <div
                        key={feature}
                        className={
                          program.dark
                            ? "flex items-center gap-2 text-white/80"
                            : "flex items-center gap-2 text-[#4B5563]"
                        }
                      >
                        <FaCheckCircle className="text-[#C8A46A] text-sm flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    className={
                      program.dark
                        ? "bg-white text-[#002C43] rounded-full px-8 py-4 font-medium transition hover:bg-[#F5E8D3]"
                        : "btn-primary"
                    }
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Programs */}

        <div className="mt-12 text-center">
          <p className="text-[#6B7280]">
            Also available:
            <span className="text-[#002C43] font-medium">
              {" "}
              Tournament Training
            </span>
            {" • "}
            <span className="text-[#002C43] font-medium">
              Private Coaching
            </span>
          </p>
        </div>

        <div className="container-custom mt-20">
          <div className="section-divider" />
        </div>
      </div>
    </section>
  );
}