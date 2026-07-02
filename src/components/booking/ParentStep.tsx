"use client";

import { useId, useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { TIMEZONES } from "@/constants/timezones";
import countries from "react-select-country-list";
import type { TrialFormData } from "./TrialForm";
import { trialBookingSchema } from "@/lib/validation/trialBooking";
import { validateField } from "@/lib/validation/validateField";

type Props = {
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
setErrors: React.Dispatch<
  React.SetStateAction<Record<string, string>>
>;
  onNext: () => void;
};

export default function ParentStep({
  data,
  updateField,
  updateAndValidate,
  errors,
  setErrors,
  onNext,
}: Props) {
  const countryOptions = useMemo(
    () => countries().getData(),
    []
  );

  const countryId = useId();
  const timezoneId = useId();

  const isValid =
    data.parentName.trim() &&
    data.email.trim() &&
    data.contactNumber.trim() &&
    data.country.trim() &&
    data.timezone.trim();

  return (
    <>
      <div className="mb-10">
        <p className="uppercase tracking-[0.3em] text-sm text-[#C8A46A]">
          Step 1
        </p>

        <h2 className="heading-font text-4xl md:text-5xl text-[#002C43] mt-4">
          Parent Information
        </h2>

        <p className="mt-4 text-[#6B7280] leading-relaxed">
          Tell us a little about yourself so we know how to contact you regarding
          your child's free trial class.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Parent / Guardian Name *
          </label>

          <input
  type="text"
  value={data.parentName}
  onChange={(e) =>
  updateAndValidate(
    "parentName",
    e.target.value
  )
}
  placeholder="Please Enter Your Name"
  className={`w-full rounded-2xl border px-5 py-4 outline-none transition-colors ${
  errors.parentName
    ? "border-red-500 focus:border-red-500"
    : "border-[#E5E7EB] focus:border-[#C8A46A]"
}`}
/>

{errors.parentName && (
  <p className="mt-2 text-sm text-red-500">
    {errors.parentName}
  </p>
)}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Email Address *
          </label>

          <input
  type="email"
  value={data.email}
  onChange={(e) => {
  const value = e.target.value;

  updateField("email", value);

  setErrors((prev) => ({
    ...prev,
    email: validateField("email", value),
  }));
}}
  placeholder="Please Enter Your E-Mail Address"
  className={`w-full rounded-2xl border px-5 py-4 outline-none transition-colors ${
    errors.email
      ? "border-red-500 focus:border-red-500"
      : "border-[#E5E7EB] focus:border-[#C8A46A]"
  }`}
/>

{errors.email && (
  <p className="mt-2 text-sm text-red-500">
    {errors.email}
  </p>
)}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Contact Number *
          </label>

          <PhoneInput
  international
  defaultCountry="IN"
  value={data.contactNumber}
  onChange={(value) => {
  updateField("contactNumber", value || "");

  setErrors((prev) => ({
    ...prev,
    contactNumber: validateField(
      "contactNumber",
      value || ""
    ),
  }));
}}
  placeholder="Enter phone number"
  className={`w-full rounded-2xl border px-5 py-4 transition-colors ${
  errors.contactNumber
    ? "border-red-500"
    : "border-[#E5E7EB]"
}`}
/>

{errors.contactNumber && (
  <p className="mt-2 text-sm text-red-500">
    {errors.contactNumber}
  </p>
)}

        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Country *
          </label>

          <Select
            instanceId={countryId}
            inputId={`${countryId}-input`}
            options={countryOptions}
            value={
              countryOptions.find(
  (c: { label: string; value: string }) =>
    c.label === data.country
)
            }
            onChange={(option) =>
              updateField(
                "country",
                option?.label || ""
              )
            }
            placeholder="Search Country..."
            isSearchable
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#002C43]">
            Time Zone *
          </label>

          <Select
            instanceId={timezoneId}
            inputId={`${timezoneId}-input`}
            options={TIMEZONES}
            value={
              TIMEZONES.find(
                (tz) => tz.value === data.timezone
              ) || null
            }
            onChange={(option) =>
              updateField(
                "timezone",
                option?.value || ""
              )
            }
            placeholder="Search Time Zone..."
            isSearchable
          />
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`flex items-center gap-3 rounded-2xl px-8 py-4 font-medium transition-all duration-300 ${
            isValid
              ? "bg-[#002C43] text-white hover:bg-[#C8A46A]"
              : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          Continue
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}