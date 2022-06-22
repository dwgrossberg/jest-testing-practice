/* eslint-disable no-undef */

import analyzeArray from "../src/analyzeArray";

it("happy path", () => {
  expect(analyzeArray);
});

it("gets the average number", () => {
  expect(analyzeArray.avg(1, 2, 3, 4, 5)).toBe(3);
});

it("gets the average number of floating points", () => {
  expect(analyzeArray.avg(1, 20, 35.6, 47, 55.4, 90.3, 101.4, 302.9)).toBe(
    81.7
  );
});

it("get the smallest array number", () => {
  expect(analyzeArray.min(30, 9, 32, 45, 13, 5, 2)).toBe(2);
});

it("get the smallest negative array number", () => {
  expect(analyzeArray.min(30, 9, 32, 45, -13, 5, 2)).toBe(-13);
});

it("get the largest array number", () => {
  expect(analyzeArray.max(30, 9, 32, 45, 13, 5, 2)).toBe(45);
});

it("get the largest negative array number", () => {
  expect(analyzeArray.min(-30, -9, -32, -45, -13, -5, -2)).toBe(-45);
});

it("gets the length of the array", () => {
  expect(analyzeArray.length(1, 2, 3, 4, 5, 6, 7, 8)).toBe(8);
});
