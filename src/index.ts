export const buildPhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/\${(\w+)}/g, (_, key) => variables[key]?.toString() || `\${${key}}`);
};
