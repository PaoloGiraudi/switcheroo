export function capitalize(word: string): string {
  return word?.charAt(0).toUpperCase() + word?.slice(1);
}

export function toCamelCase(name?: string) {
  return name?.split(' ').join('_').toLocaleLowerCase();
}
