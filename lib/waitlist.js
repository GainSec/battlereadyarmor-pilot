export function normalizeWaitlistEmail(value) {
  return String(value ?? "").trim().toLowerCase();
}

export function isValidWaitlistEmail(email) {
  return email.includes("@");
}

export function getWaitlistErrorMessage(error) {
  if (error?.code === "23505") {
    return "already joined";
  }

  return "signup failed";
}
