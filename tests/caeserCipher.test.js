/* eslint-disable no-undef */

import caeserCipher from "../src/caeserCipher";

it("happy path", () => {
  expect(caeserCipher);
});

it("is string", () => {
  expect(typeof caeserCipher()).toBe("string");
});

it("string is unchanged with a shift of 0", () => {
  expect(caeserCipher(0, "abc")).toBe(caeserCipher("abc"));
});

it("string is different with a shift of 1-25", () => {
  expect(caeserCipher(1, "abc")).not.toBe(caeserCipher("abc"));
});

it("translates one letter correctly", () => {
  expect(caeserCipher(1, "a")).toBe("b");
});
