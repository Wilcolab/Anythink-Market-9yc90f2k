/*
Step 1 — Define behavior + examples:

`toKebabCase(input)` converts an input value into a lowercase, hyphen-separated string. It splits words by transitions from lower-to-upper case and by common separators (spaces, tabs, underscores, hyphens). It collapses multiple separators into a single hyphen and trims leading/trailing hyphens. Non-alphanumeric characters (except separators) are treated as word boundaries and removed.

Examples (input -> output):
1) "simple" -> "simple"
2) "two words" -> "two-words"
3) "  leading and trailing  " -> "leading-and-trailing"
4) "snake_case_value" -> "snake-case-value"
5) "already-kebab-case" -> "already-kebab-case"
6) "multiple___separators" -> "multiple-separators"
7) "fooBar" -> "foo-bar"
8) "XMLHttpRequest" -> "xml-http-request"
9) "mixOf_Spaces-andTabs\tHere" -> "mix-of-spaces-and-tabs-here"
10) "punctuation!@#here" -> "punctuation-here"
11) "numbers123Inside" -> "numbers123-inside"
12) "___" -> ""

Treatment decisions:
- Consecutive separators collapse into a single "-".
- Underscores are treated as separators.
- Existing hyphens are preserved as separators (collapsed if repeated).
- Non-alphanumeric characters (excluding separators) are treated as boundaries and removed.

Step 2 — Write tests first:
*/

const TEST_CASES = [
  { input: "simple", expected: "simple" },
  { input: "two words", expected: "two-words" },
  { input: "  leading and trailing  ", expected: "leading-and-trailing" },
  { input: "snake_case_value", expected: "snake-case-value" },
  { input: "already-kebab-case", expected: "already-kebab-case" },
  { input: "multiple___separators", expected: "multiple-separators" },
  { input: "fooBar", expected: "foo-bar" },
  { input: "XMLHttpRequest", expected: "xml-http-request" },
  { input: "mixOf_Spaces-andTabs\tHere", expected: "mix-of-spaces-and-tabs-here" },
  { input: "punctuation!@#here", expected: "punctuation-here" },
  { input: "numbers123Inside", expected: "numbers123-inside" },
  { input: "___", expected: "" }
];

function runTests() {
  let passed = 0;

  TEST_CASES.forEach((test) => {
    const actual = toKebabCase(test.input);
    if (actual === test.expected) {
      console.log(`PASS: ${JSON.stringify(test.input)} -> ${actual}`);
      passed += 1;
    } else {
      console.log(
        `FAIL: ${JSON.stringify(test.input)} expected=${test.expected} actual=${actual}`
      );
    }
  });

  console.log(`\n${passed}/${TEST_CASES.length} tests passed`);
}

/*
Step 3 — Implement toKebabCase:
*/
function toKebabCase(input) {
  const str = String(input);

  if (str.length === 0) {
    return "";
  }

  const kebab = str
    .trim()
    // Insert a separator between lower/number and upper case: "fooBar" -> "foo-Bar"
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    // Split acronym transitions: "XMLHttp" -> "XML-Http"
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    // Replace separators and punctuation with hyphens
    .replace(/[^a-zA-Z0-9]+/g, "-")
    // Collapse repeated hyphens
    .replace(/-+/g, "-")
    // Trim leading/trailing hyphens
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return kebab;
}

/*
Step 4 — Refine + explain:

Approach: normalize the input to a string, mark word boundaries by inserting hyphens
between case transitions, then replace non-alphanumeric runs with hyphens, collapse
repeats, trim edges, and lowercase the result. This is a single pass of regex
replacements; time complexity is O(n) with O(n) space for the transformed string.

All edge cases from Step 1 are supported as listed; no exceptions were made.
*/

runTests();
