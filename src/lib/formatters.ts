export function capitalize(word: string): string {
  return word?.charAt(0).toUpperCase() + word?.slice(1);
}

export function toCamelCase(name?: string) {
  return name?.split(' ').join('_').toLocaleLowerCase();
}

export const unwrap = (data: FormDataEntryValue | null | string) => {
  const field = data?.toString().split('@') || [];
  return {
    unit: field[0],
    name: field[1]
  };
};
