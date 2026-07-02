"use client";

import { FaArrowLeft, FaCheck } from "react-icons/fa";
import type { TrialFormData } from "./TrialForm";

type Props = {
  loading: boolean;
  data: TrialFormData;
  updateField: (
    field: keyof TrialFormData,
    value: any
  ) => void;

  updateAndValidate: (
  field: keyof TrialFormData,
  value: any
) => void;

errors: Record<string, string>;

  onBack: () => void;
  onSubmit: () => void;
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const experiences = [
  "Brand New to Chess",
  "Knows the Basic Moves",
  "Plays Casually",
  "School Chess Club",
  "Tournament Player",
];

const times = [
  "Morning (8 AM – 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 9 PM)",
];

export default function StudentStep({
  loading,
  data,
  updateField,
  updateAndValidate,
  errors,
  onBack,
  onSubmit,
}: Props) {
  const isValid =
    data.studentName.trim() &&
    data.age.trim() &&
    data.experience;

  const toggleDay = (day: string) => {
    if (data.preferredDays.includes(day)) {
      updateField(
        "preferredDays",
        data.preferredDays.filter((d) => d !== day)
      );
    } else {
      updateField(
        "preferredDays",
        [...data.preferredDays, day]
      );
    }
  };

  return (
    <>
      <div className="mb-10">
        <p className="uppercase tracking-[0.3em] text-sm text-[#C8A46A]">
          Step 2
        </p>

        <h2 className="heading-font text-4xl md:text-5xl text-[#002C43] mt-4">
          Student Information
        </h2>

        <p className="mt-4 text-[#6B7280]">
          Help us personalize your child's trial class.
        </p>
      </div>

      <div className="space-y-7">
        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Student Name *
          </label>

          <input
            type="text"
            value={data.studentName}
            onChange={(e) =>
              updateAndValidate(
                "studentName",
                e.target.value
              )
            }
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-colors ${
  errors.studentName
    ? "border-red-500 focus:border-red-500"
    : "border-[#E5E7EB] focus:border-[#C8A46A]"
}`}
          />

{errors.studentName && (
  <p className="mt-2 text-sm text-red-500">
    {errors.studentName}
  </p>
)}

        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Age *
          </label>

          <input
            type="number"
            min={6}
            max={99}
            value={data.age}
            onChange={(e) =>
            updateAndValidate(
              "age",
              e.target.value
            )
          }
            placeholder="8"
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-colors ${
  errors.age
    ? "border-red-500 focus:border-red-500"
    : "border-[#E5E7EB] focus:border-[#C8A46A]"
}`}
          />

          {errors.age && (
  <p className="mt-2 text-sm text-red-500">
    {errors.age}
  </p>
)}

        </div>

        <div>
          <label className="block mb-3 text-sm font-medium text-[#002C43]">
            Chess Experience *
          </label>

          <div className="grid gap-3">
            {experiences.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() =>
                  updateField(
                    "experience",
                    item
                  )
                }
                className={`rounded-2xl border px-5 py-4 text-left transition ${
                  data.experience === item
                    ? "border-[#002C43] bg-[#002C43] text-white"
                    : "border-[#E5E7EB] hover:border-[#C8A46A]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-3 text-sm font-medium text-[#002C43]">
            Preferred Days
          </label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {days.map((day) => (
              <label
                key={day}
                className={`flex items-center gap-3 rounded-2xl border p-4 cursor-pointer transition ${
                  data.preferredDays.includes(day)
                    ? "bg-[#002C43] text-white border-[#002C43]"
                    : "border-[#E5E7EB] hover:border-[#C8A46A]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={data.preferredDays.includes(
                    day
                  )}
                  onChange={() =>
                    toggleDay(day)
                  }
                />

                {day}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-3 text-sm font-medium text-[#002C43]">
            Preferred Time
          </label>

          <div className="flex flex-wrap gap-3">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() =>
                  updateField(
                    "preferredTime",
                    time
                  )
                }
                className={`rounded-full px-6 py-3 border transition ${
                  data.preferredTime === time
                    ? "bg-[#002C43] text-white border-[#002C43]"
                    : "border-[#E5E7EB]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            What would your child like to improve?
          </label>

          <textarea
            rows={4}
            value={data.childInterest}
            onChange={(e) =>
              updateField(
                "childInterest",
                e.target.value
              )
            }
            placeholder="For example: concentration, confidence, critical thinking, tournament preparation, or simply learning chess for fun."
            className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none focus:border-[#C8A46A]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Anything else you'd like us to know?
          </label>

          <textarea
            rows={3}
            value={data.notes}
            onChange={(e) =>
              updateField(
                "notes",
                e.target.value
              )
            }
            placeholder="Anything you'd like the coach to know before the trial?"
            className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none focus:border-[#C8A46A]"
          />
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 border border-[#002C43] rounded-2xl px-7 py-4 hover:bg-[#002C43] hover:text-white transition"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          onClick={onSubmit}
          disabled={!isValid||loading}
          className={`flex items-center gap-2 rounded-2xl px-8 py-4 font-medium transition ${
            isValid
              ? "bg-[#002C43] text-white hover:bg-[#C8A46A]"
              : "bg-[#E5E7EB] text-[#9CA3AF]"
          }`}
        >
          <FaCheck />
          {loading ? "Booking Trial..." : "Book FREE Trial"}
        </button>
      </div>
    </>
  );
}