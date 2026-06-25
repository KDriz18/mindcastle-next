"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  const countries = [
    "us",
    "gb",
    "ca",
    "au",
    "in",
    "ae",
    "sg",
    "nz",
  ];

  return (
    <section className="relative overflow-hidden pt-6 lg:pt-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-8 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}

            <div className="flex items-center gap-4 mb-8">
              <span className="uppercase tracking-[0.35em] text-xs text-[#C8A46A]">
                Premium Online Chess Academy
              </span>

              <div className="h-px w-20 bg-[#C8A46A]" />
            </div>

            {/* Heading */}

            <h1 className="heading-font text-5xl lg:text-[4.5rem] xl:text-[5.2rem] leading-[0.95] text-[#002C43]">
              Developing Strategic Thinkers
              <br />
              <span className="text-[#C8A46A]">
                For A Competitive World.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 text-lg text-[#4B5563] max-w-xl leading-relaxed">
              Online chess coaching that builds confidence,
              focus, discipline and decision-making skills for
              students across the globe.
            </p>

            {/* CTA */}

            <div className="flex flex-wrap gap-3 mt-10">
              <button
                className="flex items-center justify-center gap-2 rounded-[18px] border border-[#25D366] bg-[#25D366] px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#25D366]"
              >
                <FaWhatsapp className="text-xl text-current" />
                <span>WhatsApp</span>
              </button>

              <button
                className="flex items-center justify-center gap-2 rounded-[18px] border border-[#002C43] bg-[#002C43] px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#002C43]"
              >
                <FaPhoneAlt className="text-sm text-current" />
                <span>Call</span>
              </button>
            </div>

            {/* Countries */}

            <div className="mt-10">
              <p className="text-sm text-[#6B7280] mb-4">
                Trusted by students and families across 10+ countries
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {countries.map((country) => (
                  <div
                    key={country}
                    className="w-12 h-12 rounded-full bg-white border border-[#E8E2D8] shadow-md flex items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <span
                        className={`fi fi-${country}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="w-12 h-12 rounded-full bg-[#002C43] text-white text-xs font-semibold flex items-center justify-center shadow-md">
                  +10
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-[1200px] mx-auto">
              <Image
                src="/images/hero/heroimage.webp"
                alt="MindCastle Chess Academy"
                width={881}
                height={721}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}