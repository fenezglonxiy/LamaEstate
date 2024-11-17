export default function replaceEmptyString(
  value: string,
  alternativeValue: string
) {
  return value === '' ? alternativeValue : value;
}
