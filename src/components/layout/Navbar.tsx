"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/constants/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f7f3]/90 backdrop-blur-md">
      <div className="container-custom py-5">
        <div className="bg-white border border-[#ebe7df] rounded-full px-6 py-4 soft-shadow">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div>
                <h2 className="heading-font text-2xl text-[#002C43]">
                  Mindcastle
                </h2>

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#C8A46A]">
                  Chess Academy
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#1F2937] hover:text-[#002C43]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button className="btn-primary hidden lg:block">
              Book Free Trial
            </button>

            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 bg-white rounded-3xl p-6 soft-shadow lg:hidden">
            <div className="flex flex-col gap-5">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}