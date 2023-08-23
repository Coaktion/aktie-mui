/* eslint-disable prefer-arrow-callback */
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { getHeight } from './helpers';
import {
  OuterElementContext,
  OuterElementType,
  useResetCache
} from './helpers-react';

const LISTBOX_PADDING = 8;
let labelKeyAux = 'label';

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING
  };

  return (
    <Typography
      title={dataSet[1][labelKeyAux]}
      component="li"
      noWrap
      style={inlineStyle}
      {...dataSet[0]}
    >
      {`${dataSet[1][labelKeyAux]}`}
    </Typography>
  );
}

const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData: React.ReactElement[] = [];
  (children as React.ReactElement[]).forEach(
    (item: React.ReactElement & { children?: React.ReactElement[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  const itemCount = itemData.length;
  const itemSize = 48;

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={
            getHeight(itemCount, itemData, itemSize) + 2 * LISTBOX_PADDING
          }
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={() => itemSize}
          overscanCount={10}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

/**
 * AutoCompleteVirtualized
 * @param {any[]} rows - array of objects to be displayed in the autocomplete
 * @param {function} handleChange - function to be called when the value of the autocomplete changes
 * @param {string} placeholder - placeholder of the autocomplete
 * @param {any} value - value of the autocomplete
 * @param {string} valueKey - key of the value of the autocomplete
 * @param {string} labelKey - key of the label of the autocomplete
 * @returns {React.FC<Props>}
 * @constructor
 * @component
 * @example
 * <AutoCompleteVirtualized rows={[ { label: 'Option1', id: '1' }, { label: 'Option2', id: '2' } ]} handleChange={handleChange} placeholder="Select a value" value={value} valueKey="id" labelKey="label" />
 */

interface AutoCompleteVirtualizedProps {
  rows: any[];
  handleChange: (value: any) => void;
  placeholder: string;
  value: any;
  valueKey?: string;
  labelKey: string;
}

const AutoCompleteVirtualized: React.FC<AutoCompleteVirtualizedProps> = ({
  rows,
  handleChange,
  placeholder,
  value,
  labelKey,
  valueKey
}: AutoCompleteVirtualizedProps) => {
  labelKeyAux = labelKey;
  return (
    <Autocomplete
      id="virtualize-autocomplete"
      disableListWrap
      ListboxComponent={ListboxComponent}
      options={rows}
      data-testid="virtualize-autocomplete-test"
      getOptionLabel={(option) => option[labelKey]}
      value={rows.find((row) => row[valueKey || labelKey] === value) || null}
      onChange={(_, newValue) => handleChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} value={value} label={placeholder} />
      )}
      renderOption={(props, option, state) =>
        [props, option, state.index] as React.ReactNode
      }
    />
  );
};

export default AutoCompleteVirtualized;
