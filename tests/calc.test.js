/* eslint-disable no-undef */

import calc from "../src/calc";

it("happy path", () => {
  expect(calc);
});

it("returns a number", () => {
  expect(typeof calc.add(1, 1)).toBe("number");
});

it("adds positive integers", () => {
  expect(calc.add(2, 7)).toBe(9.0);
});

it("adds negative integers", () => {
  expect(calc.add(-2, -8)).toBe(-10.0);
});

it("adds floating points", () => {
  expect(calc.add(-2.3, 6.9)).toBe(4.6);
});

it("adds strings", () => {
  expect(calc.add("1.6", 4)).toBe(5.6);
});
