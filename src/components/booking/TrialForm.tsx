"use client";

import { useState } from "react";
import ParentStep from "./ParentStep";
import StudentStep from "./StudentStep";
import SuccessStep from "./SuccessStep";
import TrialBenefits from "./TrialBenefits";

export type TrialFormData = {
  parentName: string;
  email: string;
  contactNumber: string;
  country: string;
  timezone: string;

  studentName: string;
  age: string;
  experience: string;
  preferredDays: string[];
  preferredTime: string;
  childInterest: string;
  notes: string;
};

const initialData: TrialFormData = {
  parentName: "",
  email: "",
  contactNumber: "",
  country: "",
  timezone: "",

  studentName: "",
  age: "",
  experience: "",
  preferredDays: [],
  preferredTime: "",
  childInterest: "",
  notes: "",
};

export default function TrialForm() {
  const [step, setStep] = useState(1);
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] =
    useState<TrialFormData>(initialData);

  const updateField = (
    field: keyof TrialFormData,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submitTrial = async () => {
    try {
    setLoading(true);

    const response = await fetch("/api/book-trial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!result.success) {
      alert("Something went wrong.");
      return;
    }

    setStep(3);
  } catch (error) {
    console.error(error);
    alert("Unable to submit booking.");
  } finally {
    setLoading(false);
  }
};

  if (step === 3) {
    return <SuccessStep />;
  }

  return (
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
      <div className="card-surface soft-shadow rounded-[36px] p-8 md:p-12">

        <div className="mb-10">
          <div className="flex justify-between text-sm text-[#6B7280] mb-3">
            <span>Step {step} of 2</span>

            <span>
              {step === 1
                ? "Parent Information"
                : "Student Information"}
            </span>
          </div>

          <div className="h-2 rounded-full bg-[#ECE7DE] overflow-hidden">
            <div
              className={`h-full bg-[#C8A46A] transition-all duration-500 ${
                step === 1
                  ? "w-1/2"
                  : "w-full"
              }`}
            />
          </div>
        </div>

        {step === 1 ? (
          <ParentStep
            data={formData}
            updateField={updateField}
            errors={errors}
            setErrors={setErrors}
            onNext={() => setStep(2)}
          />
        ) : (
          <StudentStep
            loading={loading}
            data={formData}
            updateField={updateField}
            onBack={() => setStep(1)}
            onSubmit={submitTrial}
          />
        )}

      </div>

      <TrialBenefits />
    </div>
  );
}