import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Autocomplete from '@mui/material/Autocomplete';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

/**
 * @name AktAutoComplete
 * @description AutoComplete component
 * @param {any[]} rows - rows to be displayed
 * @param {string} textKey - the key of the text to be displayed
 * @param {string} valueKey - the key of the value to be returned
 * @param {string} listItemKey - the key of the list item
 * @param {any} value - the value of the selected item
 * @param {string} groupKey - the key to group by
 * @param {string} groupTextColor - the color of the group text element
 * @param {string} groupFontSize - the font size of the group text element
 * @param {string} groupFontWeight - the font weight of the group text element
 * @param {string} iconColor - the color of the down arrow icon
 * @param {string} title - the title of the dropdown
 * @param {(data: any) => void} onChange - the function to be called when the value changes
 * @returns {React.FC<AktAutoCompleteProps>}
 * @example
 * <AktAutoComplete rows={rows} textKey="name" valueKey="id" listItemKey="id" value={value} onChange={handleChange} />
 */

interface AktAutoCompleteProps {
  rows: any[];
  textKey: string;
  valueKey: string;
  listItemKey: string;
  value?: any;
  groupKey?: string;
  groupTextColor?: string;
  groupFontSize?: string;
  groupFontWeight?: string;
  iconColor?: string;
  title?: string;
  disabled?: boolean;
  onChange: (data: any) => void;
  label?: string;
}

const AktAutoComplete: React.FC<AktAutoCompleteProps> = ({
  rows,
  textKey,
  valueKey,
  listItemKey,
  value,
  groupKey,
  groupTextColor = '#ccc',
  groupFontSize = '1rem',
  groupFontWeight = 'bold',
  iconColor = '#6b6b6b',
  title,
  disabled,
  onChange,
  label
}: AktAutoCompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: any) => {
    setIsOpen(false);
    onChange(value);
  };
  const bgColor = disabled ? '#d3d3d3' : 'none';
  return (
    <>
      <Autocomplete
        open={isOpen}
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        options={rows}
        disabled={disabled}
        title={title}
        data-testid="auto-complete"
        getOptionLabel={(option) => option[textKey]}
        groupBy={groupKey ? (option) => String(option[groupKey]) : () => ''}
        filterSelectedOptions
        value={
          value
            ? rows.find((row) => String(value) === String(row[valueKey]))
            : null
        }
        renderGroup={(params) => (
          <>
            <ListSubheader
              style={{
                backgroundColor: `${groupTextColor}`,
                fontSize: `${groupFontSize}`,
                fontWeight: `${groupFontWeight}`,
                position: 'relative'
              }}
              data-testid="auto-complete-group"
              key={params.group}
            >
              {params.group}
            </ListSubheader>
            {params.children}
          </>
        )}
        renderOption={(_, option) => (
          <ListItemButton
            key={option[listItemKey]}
            onClick={() => handleChange(option[valueKey])}
            sx={{ cursor: 'pointer' }}
            data-testid="auto-complete-option"
          >
            {option[textKey]}
          </ListItemButton>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            value={value}
            fullWidth
            sx={{ bgcolor: bgColor }}
            label={label}
            disabled={disabled}
            data-testid="auto-complete-input"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <div
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  data-testid="auto-complete-input-end-adornment"
                >
                  <ArrowDropDownIcon
                    style={{
                      color: `${iconColor}`,
                      cursor: 'pointer'
                    }}
                    data-testid="auto-complete-input-end-adornment-icon"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
              )
            }}
          />
        )}
      />
    </>
  );
};

export default AktAutoComplete;
