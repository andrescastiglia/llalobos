export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export function fix_name(name: string | null): string {
  if (name === null) {
    return "Anonimo";
  }
  const words = name.toLowerCase().split(" ");
  return words
    .map((word) => {
      if (word.length === 0) {
        return "";
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
