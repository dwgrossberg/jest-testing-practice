/* eslint-disable no-undef */

import capitalize from "../src/capitalize";

it("happy path", () => {
  expect(capitalize);
});

it("string", () => {
  expect(typeof capitalize).toBe("string");
});
