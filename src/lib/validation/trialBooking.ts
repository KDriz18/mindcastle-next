import { z } from "zod";

export const trialBookingSchema = z.object({
  parentName: z
    .string()
    .trim()
    .min(2, "Parent name is required.")
    .max(100, "Parent name is too long.")
    .regex(
      /^[A-Za-z\s'-]+$/,
      "Parent name contains invalid characters."
    ),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  contactNumber: z
    .string()
    .trim()
    .min(7, "Phone number is too short.")
    .max(15, "Phone number is too long.")
    .regex(
      /^[0-9]+$/,
      "Phone number must contain only digits."
    ),

  country: z
    .string()
    .min(1, "Please select your country."),

  timezone: z
    .string()
    .min(1, "Please select your timezone."),

  studentName: z
    .string()
    .trim()
    .min(2, "Student name is required.")
    .max(100),

  age: z
    .string()
    .refine(
      (value) => {
        const age = Number(value);
        return age >= 4 && age <= 18;
      },
      {
        message: "Age must be between 4 and 18.",
      }
    ),

  experience: z
    .string()
    .min(1, "Please select chess experience."),

  preferredDays: z
    .array(z.string())
    .min(1, "Select at least one preferred day."),

  preferredTime: z
    .string()
    .min(1, "Please select a preferred time."),

  childInterest: z
    .string()
    .max(500)
    .optional(),

  notes: z
    .string()
    .max(500)
    .optional(),
});

export type TrialBookingSchema = z.infer<
  typeof trialBookingSchema
>;