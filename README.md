# phrase-builder

Effortlessly construct dynamic text by seamlessly integrating variables into your phrases

## Installation

```bash
npm install phrase-builder
```

## Usage

```javascript
import { buildPhrase } from 'phrase-builder';

const phrase = buildPhrase('Hello, ${name}!', { name: 'World' });
console.log(phrase); // Hello, World!
```

You also can use numeric parameters:

```javascript
import { buildPhrase } from 'phrase-builder';

const phrase = buildPhrase('Hello, ${firstname} ${lastname} you are ${age} years old!', {
  firstname: 'John',
  lastname: 'Doe',
  age: 42,
});
console.log(phrase); // Hello, John Doe you are 42 years old!
```
