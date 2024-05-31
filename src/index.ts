// Replace ${variable} with value
export const buildPhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/\${(\w+)}/g, (_, key) => variables[key]?.toString() || `\${${key}}`);
};

// Replace {{variable}} with %{variable}
export const fixI18nVariables = (data: any) => {
  const stringData = JSON.stringify(data);
  const fixedData = stringData.replace(/{{(\w+)}}/g, '%{$1}');
  return JSON.parse(fixedData);
};

// Replace %{variable} with value
export const buildI18nPhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/%{(\w+)}/g, (_, key) => variables[key]?.toString() || `%{${key}}`);
};

// Replace {{variable}} with value
export const buildDobbleBracketsI18nPhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/{{(\w+)}}/g, (_, key) => variables[key]?.toString() || `{{${key}}}`);
};
