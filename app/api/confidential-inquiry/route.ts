import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

import {
  getConfidentialInquiryErrorMessage,
  isValidConfidentialInquiry,
  normalizeConfidentialInquiryField,
} from "@/lib/confidential-inquiry";

export async function POST(req: Request) {
  const { email, name_or_org, message } = await req.json();

  const normalizedEmail = normalizeConfidentialInquiryField(email).toLowerCase();
  const normalizedNameOrOrg = normalizeConfidentialInquiryField(name_or_org);
  const normalizedMessage = normalizeConfidentialInquiryField(message);

  if (
    !isValidConfidentialInquiry({
      email: normalizedEmail,
      message: normalizedMessage,
    })
  ) {
    return NextResponse.json({ error: "invalid submission" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { error } = await supabase.from("confidential_inquiries").insert({
    email: normalizedEmail,
    name_or_org: normalizedNameOrOrg,
    message: normalizedMessage,
  });

  if (error) {
    return NextResponse.json(
      { error: getConfidentialInquiryErrorMessage(error) },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
