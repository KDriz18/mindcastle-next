"use client";

import Link from "next/link";
import {
  FaChessKnight,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  const countries = [
    "us",
    "gb",
    "ca",
    "au",
    "in",
    "ae",
  ];

  return (
    <footer className="mt-20 border-t border-[#E5E0D8] bg-[#FBFAF7]">
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-14">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F5E8D3] flex items-center justify-center">
                <FaChessKnight className="text-3xl text-[#002C43]" />
              </div>

              <div>
                <h2 className="heading-font text-4xl text-[#002C43]">
                  MindCastle
                </h2>

                <p className="uppercase tracking-[0.35em] text-xs text-[#C8A46A] mt-1">
                  Chess Academy
                </p>
              </div>
            </div>

            <p className="mt-8 text-[#6B7280] leading-relaxed max-w-md">
              Premium online chess coaching helping students
              develop confidence, discipline, strategic thinking
              and competitive excellence.
            </p>

            {/* Countries */}

            <div className="flex gap-3 mt-8">
              {countries.map((country) => (
                <div
                  key={country}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8E2D8] shadow-sm flex items-center justify-center"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden">
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
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-[#002C43] font-semibold text-lg">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 mt-6">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Classes", "/classes"],
                ["Achievements", "/achievements"],
                ["Testimonials", "/testimonials"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[#6B7280] transition hover:text-[#002C43]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-[#002C43] font-semibold text-lg">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-5 mt-6 text-[#6B7280]">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#C8A46A]" />
                <span>info@mindcastlechess.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C8A46A]" />
                <span>+91 99217 93839</span>
              </div>

            </div>

            <button className="btn-primary mt-8">
              Book Free Trial
            </button>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-[#E5E0D8] my-12" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-[#6B7280]">
          <p>
            © {new Date().getFullYear()} MindCastle Chess Academy.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/terms"
              className="hover:text-[#002C43]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="hover:text-[#002C43]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}