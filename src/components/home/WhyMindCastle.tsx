"use client";

import {
  FaChessKnight,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";

export default function WhyMindCastle() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A46A]">
            Why MindCastle
          </p>

          <h2 className="heading-font text-5xl md:text-7xl text-[#002C43] mt-5 leading-tight">
            More Than Chess.
            <br />
            A Foundation For Success.
          </h2>

          <p className="mt-8 text-xl text-[#6B7280] max-w-3xl leading-relaxed">
            We help students develop confidence, discipline,
            strategic thinking and decision-making skills that
            create lasting success both on and beyond the chessboard.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* Card 1 */}

          <div className="card-surface soft-shadow p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F5E8D3]" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-[28px] bg-[#F5E8D3] flex items-center justify-center mb-10">
                <FaChessKnight className="text-4xl text-[#002C43]" />
              </div>

              <h3 className="text-3xl font-semibold text-[#002C43]">
                Strategic Thinking
              </h3>

              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                Develop critical thinking, planning and
                decision-making abilities that support academic
                and personal growth.
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div className="bg-[#002C43] rounded-[32px] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full border border-white/10" />

            <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center mb-10">
              <FaTrophy className="text-4xl text-[#C8A46A]" />
            </div>

            <h3 className="text-3xl font-semibold text-white">
              Tournament Excellence
            </h3>

            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Structured training pathways help students compete
              confidently and achieve measurable progress.
            </p>
          </div>

          {/* Card 3 */}

          <div className="card-surface soft-shadow p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-[#F3F1EB]" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-[28px] bg-[#EDEBE5] flex items-center justify-center mb-10">
                <FaGlobe className="text-4xl text-[#002C43]" />
              </div>

              <h3 className="text-3xl font-semibold text-[#002C43]">
                Global Learning
              </h3>

              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                Learn alongside students from different countries
                and experience a truly international environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}