"use client";

import {
  FaTrophy,
  FaMedal,
  FaGlobe,
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      title: "Tournament Success",
      description:
        "Students consistently participate and perform in competitive chess events.",
      icon: <FaTrophy />,
    },
    {
      title: "Rating Growth",
      description:
        "Structured coaching helps students improve performance and confidence.",
      icon: <FaMedal />,
    },
    {
      title: "Global Participation",
      description:
        "Students learn and compete alongside peers from multiple countries.",
      icon: <FaGlobe />,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Banner */}

        <div className="bg-[#002C43] rounded-[40px] p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/10" />

          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A46A]">
            Achievements
          </p>

          <h2 className="heading-font text-5xl md:text-7xl text-white mt-6 leading-tight">
            Results That
            <br />
            Speak For Themselves.
          </h2>

          <p className="mt-8 text-white/70 text-xl max-w-3xl">
            MindCastle students continue to develop confidence,
            strategic thinking and competitive success through
            consistent coaching and structured learning.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-5xl font-semibold text-white">
                100+
              </h3>

              <p className="text-white/70 mt-2">
                Student Achievements
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-semibold text-white">
                10+
              </h3>

              <p className="text-white/70 mt-2">
                Countries Represented
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-semibold text-white">
                500+
              </h3>

              <p className="text-white/70 mt-2">
                Students Trained
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="card-surface soft-shadow p-8 rounded-[32px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F5E8D3] flex items-center justify-center mb-6">
                <div className="text-3xl text-[#002C43]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#002C43]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#6B7280] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}