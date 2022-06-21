/* eslint-disable no-undef */

import calc from "../src/calc";

it("happy path", () => {
  expect(calc);
});

it("returns a number", () => {
  expect(typeof calc.add(1, 1)).toBe("number");
  expect(typeof calc.subtract(1, 1)).toBe("number");
  expect(typeof calc.multiply(1, 1)).toBe("number");
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

it("subtracts positive integers", () => {
  expect(calc.subtract(16, 3)).toBe(13.0);
});

it("subtracts negative integers", () => {
  expect(calc.subtract(-3, -5)).toBe(2.0);
});

it("subtracts floating points", () => {
  expect(calc.subtract(2.3, -6.9)).toBe(9.2);
});

it("subtracts strings", () => {
  expect(calc.subtract("10.0", 4.5)).toBe(5.5);
});

it("multiplies positive integers", () => {
  expect(calc.multiply(5, 4)).toBe(20.0);
});

it("multiplies negative integers", () => {
  expect(calc.multiply(-6, -5)).toBe(30.0);
});

it("multiplies floating points", () => {
  expect(calc.multiply(2.0, -6.9)).toBe(-13.8);
});

it("multiplies strings", () => {
  expect(calc.multiply("3.0", 4)).toBe(12.0);
});

it("can't multiply by zero", () => {
  expect(calc.multiply(5.8, 0)).toBe(0.0);
});

it("divides positive integers", () => {
  expect(calc.divide(40, 4)).toBe(10.0);
});

it("divides negative integers", () => {
  expect(calc.divide(-60, -5)).toBe(12.0);
});

it("divides floating points", () => {
  expect(calc.divide(-10.0, 2.5)).toBe(-4.0);
});

it("divides strings", () => {
  expect(calc.divide("100", 5.0)).toBe(20.0);
});

it("can't divide by zero", () => {
  expect(calc.multiply(9.4, 0)).toBe(0);
});
