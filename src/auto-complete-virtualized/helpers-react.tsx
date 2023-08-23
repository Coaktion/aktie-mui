/* eslint-disable eqeqeq */
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef
} from 'react';
import { VariableSizeList } from 'react-window';

export const OuterElementContext = createContext({});

export const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

export function useResetCache(data: any) {
  const ref = useRef<VariableSizeList>(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}
