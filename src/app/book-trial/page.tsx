import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrialForm from "@/components/booking/TrialForm";

export default function BookTrialPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F7F3]">
        <section className="container-custom py-24">
          <TrialForm />
        </section>
      </main>

      <Footer />
    </>
  );
}