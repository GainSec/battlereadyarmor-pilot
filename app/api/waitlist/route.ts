import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

import {
  getWaitlistErrorMessage,
  isValidWaitlistEmail,
  normalizeWaitlistEmail,
} from "@/lib/waitlist";

export async function POST(req: Request) {
  const { email } = await req.json();
  const normalizedEmail = normalizeWaitlistEmail(email);

  if (!normalizedEmail || !isValidWaitlistEmail(normalizedEmail)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { error } = await supabase.from("waitlist").insert({ email: normalizedEmail });

  if (error) {
    return NextResponse.json(
      { error: getWaitlistErrorMessage(error) },
      { status: error.code === "23505" ? 409 : 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
