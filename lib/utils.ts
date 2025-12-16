export function cn(...classes: any[]): string {
  return classes
    .flat(Infinity)
    .filter(Boolean)
    .join(" ");
}
