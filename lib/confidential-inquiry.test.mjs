import test from "node:test";
import assert from "node:assert/strict";

import {
  getConfidentialInquiryErrorMessage,
  isValidConfidentialInquiry,
  normalizeConfidentialInquiryField,
} from "./confidential-inquiry.js";

test("normalizeConfidentialInquiryField trims text values", () => {
  assert.equal(normalizeConfidentialInquiryField("  GainSec  "), "GainSec");
  assert.equal(normalizeConfidentialInquiryField(null), "");
});

test("isValidConfidentialInquiry requires a basic email and message", () => {
  assert.equal(
    isValidConfidentialInquiry({
      email: "operator@example.com",
      message: "Need a private briefing.",
    }),
    true,
  );
  assert.equal(
    isValidConfidentialInquiry({
      email: "operator@example.com",
      message: "",
    }),
    false,
  );
  assert.equal(
    isValidConfidentialInquiry({
      email: "invalid",
      message: "Need a private briefing.",
    }),
    false,
  );
});

test("getConfidentialInquiryErrorMessage falls back safely", () => {
  assert.equal(getConfidentialInquiryErrorMessage({ code: "other" }), "submit failed");
  assert.equal(getConfidentialInquiryErrorMessage(null), "submit failed");
});
