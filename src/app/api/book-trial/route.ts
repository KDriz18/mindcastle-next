import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { trialBookingSchema } from "@/lib/validation/trialBooking";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = trialBookingSchema.safeParse(body);
    console.log("Validation result:", validation);

if (!validation.success) {
  return NextResponse.json(
    {
      success: false,
      errors: validation.error.flatten(),
    },
    { status: 400 }
  );
}

    const { error } = await supabase
      .from("trial_bookings")
      .insert([
        {
          parent_name: body.parentName,
          email: body.email,
          contact_number: body.contactNumber,
          country: body.country,
          timezone: body.timezone,

          student_name: body.studentName,
          age: Number(body.age),

          experience: body.experience,
          preferred_days: body.preferredDays,
          preferred_time: body.preferredTime,

          child_interest: body.childInterest,
          notes: body.notes,
        },
      ]);

    if (error) {
  console.error("SUPABASE ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
  console.error("SERVER ERROR:", err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}