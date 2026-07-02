import { trialBookingSchema } from "./trialBooking";
import { z } from "zod";

type Schema = z.infer<typeof trialBookingSchema>;
type SchemaKeys = keyof Schema;

export function validateField(
  field: SchemaKeys,
  value: unknown
) {
  const schema = trialBookingSchema.shape[field] as z.ZodTypeAny;

  const result = schema.safeParse(value);

  return result.success
    ? ""
    : result.error.issues[0]?.message ?? "Invalid value.";
}