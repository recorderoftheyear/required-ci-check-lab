const test = require("node:test");
const assert = require("node:assert");
const { getStatus } = require("./index");

test("returns Ready application status", () => {
  assert.strictEqual(getStatus(), "Ready");
});