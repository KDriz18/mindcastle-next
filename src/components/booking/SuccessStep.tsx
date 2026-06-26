import Link from "next/link";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";

export default function SuccessStep() {
  return (
    <div className="card-surface soft-shadow rounded-[36px] p-14 text-center">

      <FaCheckCircle className="text-7xl text-green-500 mx-auto" />

      <h2 className="heading-font text-5xl text-[#002C43] mt-8">
        You're All Set!
      </h2>

      <p className="mt-6 text-lg text-[#6B7280] leading-relaxed max-w-xl mx-auto">
        Thank you for booking your FREE trial class.
        Our team will contact you shortly to schedule
        your session.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        <Link
          href="/"
          className="flex items-center gap-2 rounded-2xl border border-[#002C43] px-7 py-4 text-[#002C43] hover:bg-[#002C43] hover:text-white transition"
        >
          <FaHome />

          Back Home
        </Link>

        <a
          href="https://wa.me/"
          className="flex items-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-white hover:bg-[#1DA851] transition"
        >
          <FaWhatsapp />

          Chat on WhatsApp
        </a>

      </div>
    </div>
  );
}