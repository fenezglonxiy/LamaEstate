export default function generateClassName(
  baseClassName: string,
  classNames: Array<string>
) {
  return [
    baseClassName,
    ...classNames
      .filter(Boolean)
      .map((className) => `${baseClassName}-${className}`),
  ].join(' ');
}
