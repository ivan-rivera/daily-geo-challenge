/**
 * Separate a camelCased string into separate words
 * @param text
 */
function splitCamelCase(text: string): string {
  return text.replace(/([a-z])([A-Z])/g, "$1 $2")
}

/**
 * Capitalize the first letter of a string
 * @param text
 */
function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Capitalize the first letter of each word in a string
 * @param text
 */
function capitalizePassage(text: string): string {
  return text.split(" ").map(capitalize).join(" ")
}

/**
 * Separate a camelCased string into separate words and capitalize the first letter of each word
 * @param text
 */
export function humanize(text: string): string {
  return capitalizePassage(splitCamelCase(text))
}
