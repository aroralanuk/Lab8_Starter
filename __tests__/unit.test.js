// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } =
  functions;
// TODO - Part 2

// testing isPhoneNumber()
test("isPhoneNumber - if validly formatted number with dashes given", () => {
  expect(isPhoneNumber("858-333-6666")).toBe(true);
});

test("isPhoneNumber - if validly formatted number with bracket and dashes given", () => {
  expect(isPhoneNumber("(858) 333-6666")).toBe(true);
});

test("isPhoneNumber - if invalidly formatted number with dashes and brackets given", () => {
  expect(isPhoneNumber("858-333 (6666)")).toBe(false);
});

test("isPhoneNumber - if invalidly formatted number with an non-digit given", () => {
  expect(isPhoneNumber("(858) 3O3-6666")).toBe(false);
});

// testing isEmail
test("isEmail - if validly formatted email with @, com domain, and . given", () => {
  expect(isEmail("french@bulldog.com")).toBe(true);
});

test("isEmail - if validly formatted email with @, eth domain, and . given", () => {
  expect(isEmail("french@bulldog.eth")).toBe(true);
});

test("isEmail - if invalidly formatted email with @, eth domain, and no . given", () => {
  expect(isEmail("french@bulldogeth")).toBe(false);
});

test("isEmail - if empty email given", () => {
  expect(isEmail("")).toBe(false);
});

// testing isStrongPassword
test("isStringPassword - if valid password given", () => {
  expect(isStrongPassword("daniel_avacado")).toBe(true);
});

test("isStringPassword - if valid password with numbers given", () => {
  expect(isStrongPassword("dan13l_avacad0")).toBe(true);
});

test("isStringPassword - if invalid password with >14 characters given", () => {
  expect(isStrongPassword("dan13l_avacad0_longhorn")).toBe(false);
});

test("isStringPassword - if invalid password starting with underscore given", () => {
  expect(isStrongPassword("_dan13l_ava")).toBe(false);
});

// testing isDate
test("isDate - if validly formatted date given", () => {
  expect(isDate("07/31/2000")).toBe(true);
});

test("isDate - if validly formatted date with month single digit given", () => {
  expect(isDate("7/31/2000")).toBe(true);
});

test("isDate - if invalidly formatted date with year as two digit given", () => {
  expect(isDate("7/31/00")).toBe(false);
});

test("isDate - if invalidly formatted date with year as first number given", () => {
  expect(isDate("2000/31/02")).toBe(false);
});

// testing isHexColor
test("isDate - if validly formatted hex color given", () => {
  expect(isHexColor("#000000")).toBe(true);
});

test("isDate - if validly formatted hex color shortened given", () => {
  expect(isHexColor("#4d2")).toBe(true);
});

test("isDate - if invalidly formatted hex color with 5 characters given", () => {
  expect(isHexColor("#1fdc2")).toBe(false);
});

test("isDate - if invalidly formatted hex color with non-permitted character z given", () => {
  expect(isHexColor("#1fdccz")).toBe(false);
});
