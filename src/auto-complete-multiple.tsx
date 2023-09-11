import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

interface AktAutoCompleteMultipleProps {
  rows: any[];
  value?: any;
  iconColor?: string;
  onChange: (data: any) => void;
}

const AktAutoCompleteMultiple: React.FC<AktAutoCompleteMultipleProps> = ({
  rows,
  value,
  iconColor = '#6b6b6b',
  onChange
}: AktAutoCompleteMultipleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: any) => {
    setIsOpen(false);
    onChange(value);
  };

  return (
    <>
      <Autocomplete
        multiple
        open={isOpen}
        onBlur={() => setIsOpen(false)}
        options={rows}
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
          <TextField
            {...params}
            fullWidth
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
                  data-testid="auto-complete-end-adornment"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ArrowDropDownIcon
                    style={{
                      color: `${iconColor}`,
                      cursor: 'pointer'
                    }}
                    data-testid="auto-complete-arrow"
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

export default AktAutoCompleteMultiple;
