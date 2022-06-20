/* eslint-disable no-undef */
import reverseString from "../src/reverseString";

it("happy path", () => {
  expect(reverseString);
});

it("string", () => {
  expect(typeof reverseString()).toBe("string");
});

it("reversed1", () => {
  expect(reverseString("abcd")).toBe("dcba");
});

it("reversed2", () => {
  expect(reverseString("AaBbCcDdEe")).toBe("eEdDcCbBaA");
});

it("reversed3", () => {
  expect(reverseString("123456")).toBe("654321");
});
