"use client";

import {
  FaUsers,
  FaGlobeAmericas,
  FaTrophy,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function StatsBar() {
  const stats = [
    {
      value: "500+",
      label: "Students Trained",
      icon: <FaUsers />,
    },
    {
      value: "10+",
      label: "Countries",
      icon: <FaGlobeAmericas />,
    },
    {
      value: "100+",
      label: "Achievements",
      icon: <FaTrophy />,
    },
    {
      value: "10+",
      label: "Expert Coaches",
      icon: <FaChalkboardTeacher />,
    },
  ];

  return (
    <section className="mt-12 lg:mt-16">
      <div className="container-custom">
        <div className="bg-[#002C43] rounded-[32px] px-8 py-10 shadow-[0_20px_60px_rgba(0,44,67,0.12)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#002C43] text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-white text-4xl font-semibold">
                    {item.value}
                  </h3>

                  <p className="text-white/70 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}