import test from "node:test";
import assert from "node:assert/strict";

import {
  getWaitlistErrorMessage,
  isValidWaitlistEmail,
  normalizeWaitlistEmail,
} from "./waitlist.js";

test("normalizeWaitlistEmail trims and lowercases input", () => {
  assert.equal(normalizeWaitlistEmail("  TeSt@Example.COM "), "test@example.com");
});

test("isValidWaitlistEmail accepts simple email-like values", () => {
  assert.equal(isValidWaitlistEmail("test@example.com"), true);
});

test("isValidWaitlistEmail rejects invalid values", () => {
  assert.equal(isValidWaitlistEmail("invalid"), false);
  assert.equal(isValidWaitlistEmail(""), false);
});

test("getWaitlistErrorMessage maps duplicate violations", () => {
  assert.equal(getWaitlistErrorMessage({ code: "23505" }), "already joined");
});

test("getWaitlistErrorMessage falls back for unknown failures", () => {
  assert.equal(getWaitlistErrorMessage({ code: "other" }), "signup failed");
  assert.equal(getWaitlistErrorMessage(null), "signup failed");
});
