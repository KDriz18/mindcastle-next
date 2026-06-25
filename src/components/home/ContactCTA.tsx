"use client";

import Link from "next/link";
import {
  FaChessKnight,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[40px] bg-[#002C43] px-8 py-14 md:px-16 md:py-20 text-center">
          {/* Background Decoration */}

          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/10" />

          {/* Icon */}

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
            <FaChessKnight className="text-4xl text-[#C8A46A]" />
          </div>

          {/* Heading */}

          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A46A]">
            Free Trial Class
          </p>

          <h2 className="heading-font mt-6 text-5xl leading-tight text-white md:text-7xl">
            Start Your Child's
            <br />
            Chess Journey Today.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
            Schedule a complimentary trial class and discover how
            MindCastle develops confidence, strategic thinking,
            discipline and competitive excellence through expert
            online chess coaching.
          </p>

          {/* Primary CTA */}

          <div className="mt-14 flex justify-center">
            <Link
              href="/book-trial"
              className="group inline-flex items-center gap-3 rounded-[22px] bg-[#C8A46A] px-12 py-6 text-xl font-semibold text-[#002C43] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B57B]"
            >
              <FaChessKnight className="text-2xl transition-transform duration-300 group-hover:rotate-12" />

              Book Your FREE Trial Class
            </Link>
          </div>

          <p className="mt-5 text-sm text-white/60">
            No obligation • 100% Free • Online Session
          </p>

          {/* Divider */}

          <div className="mx-auto mt-12 h-px w-40 bg-white/10" />

          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/60">
            Prefer to speak with us first?
          </p>

          {/* Secondary CTA */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/+919921793839"
              className="flex items-center gap-2 rounded-[18px] border border-[#25D366] bg-[#25D366] px-7 py-4 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#25D366]"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>

            <a
              href="tel:+919921793839"
              className="flex items-center gap-2 rounded-[18px] border border-white bg-transparent px-7 py-4 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#002C43]"
            >
              <FaPhoneAlt />
              Call Us
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-[18px] border border-white bg-transparent px-7 py-4 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#002C43]"
            >
              <FaEnvelope />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}