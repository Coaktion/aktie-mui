import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Checkbox } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

/**
 * @name AktAutoCompleteMultiple
 * @description AutoCompleteMultiple options component
 * @param {any[]} rows - rows to be displayed in the dropdown
 * @param {any} value - the value of the selected item
 * @param {string} iconColor - the color of the down arrow icon
 * @param {string} title - the title of the dropdown
 * @param {(data: any) => void} onChange - the function to be called when the value changes
 * @returns {React.FC<AktAutoCompleteMultipleProps>}
 * @example
 * <AktAutoCompleteMultiple rows={rows} value={value} onChange={handleChange} />
 */

interface AktAutoCompleteMultipleProps {
  rows: any[];
  value?: any;
  title?: string;
  limitTags?: number;
  iconColor?: string;
  onChange: (data: any) => void;
  allSelectOption?: string;
}

interface OptionProps {
  props: React.HTMLAttributes<HTMLLIElement>;
  option: any;
  selected: boolean;
}

const optionStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '8px',
  marginLeft: '10px'
};

const AktAutoCompleteMultiple: React.FC<AktAutoCompleteMultipleProps> = ({
  rows,
  value,
  title,
  limitTags,
  onChange,
  allSelectOption
}: AktAutoCompleteMultipleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: any) => {
    if (allSelectOption && value.includes(allSelectOption)) {
      value = rows.filter((item) => item !== allSelectOption);
    }

    onChange(value);
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const Option = ({ props, option, selected }: OptionProps) => {
    return (
      <li {...props}>
        {option === allSelectOption ? (
          <div style={optionStyles}>
            <DoneAllIcon style={{ color: '#48BB30' }} />
            {option}
          </div>
        ) : (
          <div>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </div>
        )}
      </li>
    );
  };
  return (
    <>
      <Autocomplete
        multiple
        open={isOpen}
        limitTags={limitTags || -1}
        title={title}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        options={rows}
        renderOption={(props, option, { selected }) => (
          <Option props={props} option={option} selected={selected} />
        )}
        disableCloseOnSelect
        value={value}
        data-testid="auto-complete"
        getOptionLabel={(option) => option}
        onChange={(_, value) => handleChange(value)}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              data-testid="auto-complete-chip"
              label={option}
              {...getTagProps({ index })}
              key={option}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} fullWidth data-testid="auto-complete-input" />
        )}
      />
    </>
  );
};

export default AktAutoCompleteMultiple;
