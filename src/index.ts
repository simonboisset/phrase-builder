// type Syntax = "${x}" | "%{x}" | "{{x}}"|string
// Doesn't work
// export const createPhraseBuilder = (syntax: Syntax) => {
//   const [start, end] = syntax.split('x');
//   return (phrase: string, variables?: Record<string, string | number>) => {
//     if (!variables) return phrase;
//     return phrase.replace(new RegExp(`${start}(\\w+)${end}`, 'g'), (_, key) => variables[key]?.toString() || `${start}${key}${end}`);
//   };
// };

// Dollar braces syntax: ${variable}

// Replace ${variable} with value
export const buildDollarBracePhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/\${(\w+)}/g, (_, key) => variables[key]?.toString() || `\${${key}}`);
};

// Migration from double braces syntax to percent braces syntax
// Replace {{variable}} with %{variable}
export const migrateDoubleBraceToPercentBrace = (data: any) => {
  const stringData = JSON.stringify(data);
  const fixedData = stringData.replace(/{{(\w+)}}/g, '%{$1}');
  return JSON.parse(fixedData);
};

// Percent braces syntax: %{variable}
// Replace %{variable} with value
export const buildPercentBracePhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/%{(\w+)}/g, (_, key) => variables[key]?.toString() || `%{${key}}`);
};

// Double braces syntax: {{variable}}
// Replace {{variable}} with value
export const buildDoubleBracePhrase = (phrase: string, variables?: Record<string, string | number>) => {
  if (!variables) return phrase;
  return phrase.replace(/{{(\w+)}}/g, (_, key) => variables[key]?.toString() || `{{${key}}}`);
};
