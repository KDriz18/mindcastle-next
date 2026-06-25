"use client";

import Image from "next/image";
import {
  FaChessKnight,
  FaMedal,
  FaGraduationCap,
} from "react-icons/fa";

export default function OurCoaches() {
  const coaches = [
    {
      name: "AGM Shashank Dhagdhage",
      title: "Founding Director",
      rating: "FIDE 9999",
      experience: "12+ Years",
      speciality: "Tournament Preparation",
      image: "/images/coaches/coach1.webp",
    },
    {
      name: "IM Aditya",
      title: "International Master",
      rating: "FIDE 9999",
      experience: "9+ Years",
      speciality: "Junior Development",
      image: "/images/coaches/coach2.webp",
    },
    {
      name: "IGM Rohit Sharma",
      title: "Senior Coach",
      rating: "FIDE 9999",
      experience: "8+ Years",
      speciality: "Beginner & Intermediate",
      image: "/images/coaches/coach3.webp",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Heading */}

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A46A]">
            Meet Our Coaches
          </p>

          <h2 className="heading-font text-5xl md:text-7xl text-[#002C43] mt-5 leading-tight">
            Learn From
            <br />
            Experienced Mentors.
          </h2>

          <p className="mt-8 text-xl text-[#6B7280] max-w-3xl leading-relaxed">
            Our experienced coaches combine professional chess
            expertise with engaging teaching methods to help every
            student reach their full potential.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="card-surface soft-shadow rounded-[32px] overflow-hidden transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}

              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F5E8D3] flex items-center justify-center mb-6">
                  <FaChessKnight className="text-3xl text-[#002C43]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#002C43]">
                  {coach.name}
                </h3>

                <p className="text-[#C8A46A] mt-2">
                  {coach.title}
                </p>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-3">
                    <FaMedal className="text-[#C8A46A]" />
                    <span className="text-[#4B5563]">
                      {coach.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaGraduationCap className="text-[#C8A46A]" />
                    <span className="text-[#4B5563]">
                      {coach.experience}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaChessKnight className="text-[#C8A46A]" />
                    <span className="text-[#4B5563]">
                      {coach.speciality}
                    </span>
                  </div>
                </div>

                <button className="btn-primary w-full mt-8">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}