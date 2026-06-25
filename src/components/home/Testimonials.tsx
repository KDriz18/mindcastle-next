"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      country: "gb",
      countryName: "United Kingdom",
      quote:
        "The structured coaching and personal attention have transformed my son's confidence and decision-making skills.",
      author: "Parent of Intermediate Student",
    },
    {
      country: "us",
      countryName: "United States",
      quote:
        "Professional coaches, clear progress tracking and an engaging learning environment.",
      author: "Parent of Tournament Student",
    },
    {
      country: "au",
      countryName: "Australia",
      quote:
        "MindCastle helped our daughter build focus, discipline and genuine enthusiasm for chess.",
      author: "Parent of Beginner Student",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A46A]">
            Testimonials
          </p>

          <h2 className="heading-font text-5xl md:text-7xl text-[#002C43] mt-5 leading-tight">
            Trusted By Families
            <br />
            Around The World.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mt-16">
          {/* Featured Review */}

          <div className="bg-[#002C43] rounded-[36px] p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-white/10" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <FaQuoteLeft className="text-3xl text-[#C8A46A]" />
              </div>

              <span className="text-[#C8A46A] text-sm uppercase tracking-wider">
                Featured Parent Review
              </span>

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#C8A46A] text-sm"
                  />
                ))}
              </div>

              <p className="text-white text-2xl md:text-3xl leading-relaxed mt-6">
                “MindCastle has provided far more than chess
                coaching. The structured approach has improved
                confidence, discipline and strategic thinking.”
              </p>

              <div className="mt-10">
                <p className="text-white font-medium">
                  Parent of Advanced Student
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <span className="fi fi-gb rounded-full" />

                  <span className="text-white/60">
                    United Kingdom
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards */}

          <div className="space-y-6">
            {testimonials.map((item) => (
              <div
                key={item.country}
                className="card-surface soft-shadow p-8 rounded-[28px]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`fi fi-${item.country} rounded-full`}
                  />

                  <span className="text-[#002C43] font-medium">
                    {item.countryName}
                  </span>
                </div>

                <div className="flex gap-1 mt-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[#C8A46A] text-xs"
                    />
                  ))}
                </div>

                <p className="mt-5 text-[#4B5563] leading-relaxed">
                  "{item.quote}"
                </p>

                <p className="mt-6 text-sm font-medium text-[#002C43]">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}