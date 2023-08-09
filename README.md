# Aktie Mui

![test workflow](https://github.com/Coaktion/aktie-mui/actions/workflows/test.yml/badge.svg)
![stale workflow](https://github.com/Coaktion/aktie-mui/actions/workflows/stale.yml/badge.svg)
![Release Draft workflow](https://github.com/Coaktion/aktie-mui/actions/workflows/release-drafter.yml/badge.svg)

AktieNow patterns for Material UI usage

## Installation

```bash
npm install @coaktion/aktie-mui
```

## Generate docs

```bash
npm run generate-docs
```

## Usage

##### Theme Example

```bash
import { AktieTheme } from '@coaktion/aktie-mui';
import { createTheme } from '@mui/material';

export const theme = createTheme(AktieTheme);
```

##### Component Import Example

```bash
import React from 'react';
import { AktBackdrop } from '@coaktion/aktie-mui';

const Test: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <AktBackdrop open={fullLoading} size={100} />
  );
};

export default Test;
```

## Figma

See [patterns](https://www.figma.com/file/HFtLZo5cSq15ec0ouwfdTz/%F0%9F%9F%A2-Design-System-Aktie?node-id=207%3A92287&mode=dev) for details.

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details.

## License

Client Core is [Copyright](./LICENSE).
