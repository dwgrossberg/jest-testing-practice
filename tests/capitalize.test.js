/* eslint-disable no-undef */

import capitalize from "../src/capitalize";

it("happy path", () => {
  expect(capitalize);
});

it("string", () => {
  expect(typeof capitalize()).toBe("string");
});

it("first letter capital", () => {
  expect(capitalize().charAt(0)).toBe(capitalize().charAt(0).toUpperCase());
});

it("other letters not", () => {
  expect(capitalize().slice(1)).toBe(capitalize().slice(1).toLowerCase());
});

it("test1", () => {
  expect(capitalize("abcBBBddkeWWWekeeWff")).toBe("Abcbbbddkewwwekeewff");
});

it("test2", () => {
  expect(capitalize("a")).toBe("A");
});

it("test3", () => {
  expect(capitalize("AAAAAAAAAA")).toBe("Aaaaaaaaaa");
});
