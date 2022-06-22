/* eslint-disable no-undef */

import caeserCipher from "../src/caeserCipher";

it("happy path", () => {
  expect(caeserCipher);
});

it("is string", () => {
  expect(typeof caeserCipher(1, "a")).toBe("string");
});

it("string is unchanged with a shift of 0", () => {
  expect(caeserCipher(0, "abc")).toBe("abc");
});

it("string is different with a shift of 1-25", () => {
  expect(caeserCipher(1, "abc")).not.toBe("abc");
});

it("encodes one letter correctly", () => {
  expect(caeserCipher(1, "a")).toBe("b");
});

it("encodes a sentence correctly", () => {
  expect(caeserCipher(17, "a pig went to the bank to buy some gum")).toBe(
    "r gzx nvek kf kyv sreb kf slp jfdv xld"
  );
});

it("wraps around the alphabet from z to a", () => {
  expect(caeserCipher(40, "test wrapping")).toBe("hsgh kfoddwbu");
});

it("wraps a perfect circle at multiples of 26", () => {
  expect(caeserCipher(26, "perfect circle")).toBe("perfect circle");
});

it("preserves capital letters", () => {
  expect(caeserCipher(6, "The Pig In The Barn")).toBe("Znk Vom Ot Znk Hgxt");
});
