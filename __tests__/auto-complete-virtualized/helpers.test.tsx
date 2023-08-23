import * as React from 'react';

import { getHeight } from '../../src/auto-complete-virtualized/helpers';

describe('getHeight function tests', () => {
  it('should return 8 times itemSize when itemCount is greater than 8', () => {
    const itemCount = 10;
    const itemData: React.ReactElement[] = new Array(itemCount).fill(
      <div></div>
    );
    const itemSize = 50;

    const result = getHeight(itemCount, itemData, itemSize);

    expect(result).toEqual(8 * itemSize);
  });

  it('should return total itemSize of itemData when itemCount is less than or equal to 8', () => {
    const itemCounts = [5, 8];

    itemCounts.forEach((count) => {
      const itemData: React.ReactElement[] = new Array(count).fill(<div></div>);
      const itemSize = 50;

      const result = getHeight(count, itemData, itemSize);

      expect(result).toEqual(count * itemSize);
    });
  });
});
