"use client";

import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    image: "/images/achievements/achievement1.webp",
    title: "National Championship",
    student: "Aarav",
  },
  {
    image: "/images/achievements/achievement2.webp",
    title: "Gold Medal Winner",
    student: "Vihaan",
  },
  {
    image: "/images/achievements/achievement3.webp",
    title: "FIDE Rating 1800+",
    student: "Anaya",
  },
  {
    image: "/images/achievements/achievement4.webp",
    title: "State Champion",
    student: "Ishaan",
  },
  {
    image: "/images/achievements/achievement5.webp",
    title: "International Tournament",
    student: "Riya",
  },
];

const items = [...achievements, ...achievements];

export default function AchievementMarquee() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container-custom mb-10">
        <p className="uppercase tracking-[0.35em] text-xs text-[#C8A46A]">
          Student Highlights
        </p>

        <h2 className="heading-font text-5xl md:text-7xl text-[#002C43] mt-4">
          Celebrating
          <br />
          Every Achievement.
        </h2>
      </div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
        className="flex w-max gap-8"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[320px] rounded-[32px] bg-white overflow-hidden soft-shadow flex-shrink-0"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={240}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-6">
              <div className="w-14 h-14 rounded-2xl bg-[#F5E8D3] flex items-center justify-center mb-5">
                <FaTrophy className="text-[#002C43] text-2xl" />
              </div>

              <h3 className="text-xl font-semibold text-[#002C43]">
                {item.title}
              </h3>

              <p className="mt-3 text-[#6B7280]">
                {item.student}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}