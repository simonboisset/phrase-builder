# phrase-builder

Effortlessly construct dynamic text by seamlessly integrating variables into your phrases

## Installation

```bash
npm install phrase-builder
yarn add phrase-builder
pnpm add phrase-builder
```

## Usage

```javascript
import { buildDollarBracePhrase } from 'phrase-builder';

const phrase = buildDollarBracePhrase('Hello, ${name}!', { name: 'World' });
console.log(phrase); // Hello, World!
```

You also can use numeric parameters:

```javascript
import { buildDollarBracePhrase } from 'phrase-builder';

const phrase = buildDollarBracePhrase('Hello, ${firstname} ${lastname} you are ${age} years old!', {
  firstname: 'John',
  lastname: 'Doe',
  age: 42,
});
console.log(phrase); // Hello, John Doe you are 42 years old!
```

## Supported syntax

### Dollar-brace

```javascript
import { buildDollarBracePhrase } from 'phrase-builder';

const phrase = buildDollarBracePhrase('Hello, ${name}!', { name: 'World' });
console.log(phrase); // Hello, World!
```

### Percent-brace

```javascript
import { buildPercentBracePhrase } from 'phrase-builder';

const phrase = buildPercentBracePhrase('Hello, %{name}!', { name: 'World' });
console.log(phrase); // Hello, World!
```

### Double-brace

```javascript
import { buildDoubleBracePhrase } from 'phrase-builder';

const phrase = buildDoubleBracePhrase('Hello, {{name}}!', { name: 'World' });
console.log(phrase); // Hello, World!
```
