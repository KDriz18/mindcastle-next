import {
  FaChessKnight,
  FaCheckCircle,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";

export default function TrialBenefits() {
  const benefits = [
    "Online LIVE trial session",
    "Skill assessment",
    "Personalized learning roadmap",
    "Expert coach consultation",
    "No obligation to enroll",
  ];

  return (
    <div className="lg:sticky lg:top-24 self-start will-change-transform">
      <div className="bg-[#002C43] rounded-[36px] p-10 text-white overflow-hidden relative">

        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/10" />

        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8">
          <FaChessKnight className="text-4xl text-[#C8A46A]" />
        </div>

        <p className="uppercase tracking-[0.35em] text-xs text-[#C8A46A]">
          FREE TRIAL
        </p>

        <h3 className="heading-font text-4xl mt-5 leading-tight">
          What You'll Get
        </h3>

        <div className="space-y-5 mt-10">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4"
            >
              <FaCheckCircle className="text-[#C8A46A] flex-shrink-0" />

              <span className="text-white/80">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 space-y-5">

          <div className="flex items-center gap-4">
            <FaClock className="text-[#C8A46A]" />
            <span>Approximately 30 Minutes</span>
          </div>

          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-[#C8A46A]" />
            <span>Conducted by our Expert Coach</span>
          </div>

        </div>
      </div>
    </div>
  );
}