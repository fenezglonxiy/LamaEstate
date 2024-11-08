export default function replaceNonPositiveNumber(
  value: number,
  defaultValue: number
) {
  return value > 0 ? value : defaultValue;
}
