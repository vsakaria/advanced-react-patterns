export const compose = (...functions) => initialValue =>
  functions.reduceRight(
    (accumulatedValue, fn) => fn(accumulatedValue),
    initialValue
  );

const toUpperCase = text => text.toUpperCase();
const removeSpaces = text => text.replace(/\s/g, "");
const removeNumbers = text => text.replace(/[0-9]/g, "");

export const alphaUpperCaseTransform = compose(
  toUpperCase,
  removeNumbers,
  removeSpaces
);

/*
 Here we use default params to ensure only string are pass when undefined is passed through
 We may need to use typeof here
 Typescript return types and param types work well in these use case hence functional programming languages are strongly typed.
 Also TS optional chaining TC39 is being reviewed. https://medium.com/inside-rimeto/optional-chaining-in-typescript-622c3121f99b
*/

const toLowerCase = (text = "") => text.toLowerCase();
const findAmazing = (text = "") => (text.includes("amazing") ? "amazing" : "");

export const transformToAmazingLower = compose(
  toLowerCase,
  findAmazing,
  removeSpaces
);
