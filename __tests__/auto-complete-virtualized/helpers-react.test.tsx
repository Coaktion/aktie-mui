import { render } from '@testing-library/react';
import React, { useContext } from 'react';

import {
  OuterElementContext,
  OuterElementType
} from '../../src/auto-complete-virtualized/helpers-react';

describe('OuterElementType tests', () => {
  it('should merge context and props', () => {
    const TestComponent: React.FC = () => {
      const contextProps = useContext(OuterElementContext);

      return <OuterElementType data-testid="outer-element" {...contextProps} />;
    };

    const { getByTestId } = render(
      <OuterElementContext.Provider value={{ className: 'fromContext' }}>
        <TestComponent />
      </OuterElementContext.Provider>
    );

    const element = getByTestId('outer-element');
    expect(element.className).toBe('fromContext');
  });
});
