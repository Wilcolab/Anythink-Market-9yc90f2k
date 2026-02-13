function toSnakeCase(value) {
  if (value === undefined || value === null) {
    throw new Error("toSnakeCase: value is undefined or null.");
  }

  if (typeof value !== "string") {
    throw new Error("toSnakeCase: value must be a string.");
  }

  if (value.length === 0) {
    return "";
  }

  const hasDigit = /\d/.test(value);
  if (hasDigit) {
    throw new Error("toSnakeCase: value must not contain numbers.");
  }

  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return "";
  }

  const snake = trimmed
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .replace(/__+/g, "_")
    .toLowerCase();

  if (!/^[a-z_]+$/.test(snake)) {
    throw new Error("toSnakeCase: value contains unsupported characters.");
  }

  return snake;
}

module.exports = { toSnakeCase };
