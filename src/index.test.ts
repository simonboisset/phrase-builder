import { expect, test } from 'vitest';
import { buildPhrase } from '.';

test('Phrase without parameters', () => {
  const phrase = 'Hello World';
  const buildedPhrase = buildPhrase(phrase);
  expect(buildedPhrase).toBe('Hello World');
});

test('Phrase with parameters', () => {
  const phrase = 'Hello ${name}';
  const buildedPhrase = buildPhrase(phrase, { name: 'World' });
  expect(buildedPhrase).toBe('Hello World');
});

test('Phrase with missing parameters', () => {
  const phrase = 'Hello ${name}';
  const buildedPhrase = buildPhrase(phrase);
  expect(buildedPhrase).toBe('Hello ${name}');
});

test('Phrase with unknown parameters', () => {
  const phrase = 'Hello ${name}';
  const buildedPhrase = buildPhrase(phrase, { surname: 'World' });
  expect(buildedPhrase).toBe('Hello ${name}');
});

test('Phrase with multiple parameters', () => {
  const phrase = 'Hello ${name} ${surname} !';
  const buildedPhrase = buildPhrase(phrase, { name: 'World', surname: 'Simon' });
  expect(buildedPhrase).toBe('Hello World Simon !');
});

test('Phrase with multiple parameters and missing parameters', () => {
  const phrase = 'Hello ${name} ${surname} !';
  const buildedPhrase = buildPhrase(phrase, { name: 'World' });
  expect(buildedPhrase).toBe('Hello World ${surname} !');
});

test('Phrase with multiple parameters and unknown parameters', () => {
  const phrase = 'Hello ${name} ${surname} !';
  const buildedPhrase = buildPhrase(phrase, { name: 'World', age: '30' });
  expect(buildedPhrase).toBe('Hello World ${surname} !');
});

test('Phrase with number parameters', () => {
  const phrase = 'Hello ${name} ${age} !';
  const buildedPhrase = buildPhrase(phrase, { name: 'World', age: 30 });
  expect(buildedPhrase).toBe('Hello World 30 !');
});
