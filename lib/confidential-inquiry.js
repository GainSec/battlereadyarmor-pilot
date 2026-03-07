export function normalizeConfidentialInquiryField(value) {
  return String(value ?? "").trim();
}

export function isValidConfidentialInquiry({ email, message }) {
  return email.includes("@") && message.length > 0;
}

export function getConfidentialInquiryErrorMessage(_error) {
  return "submit failed";
}
