import * as React from 'react';
import {ReactElement, useEffect} from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {FormControl, Input, ThemeProvider} from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {DropdownIcon} from "../dropdown-icon/dropdown-icon";
import {themeInput} from '../../utils/constants/style-constants';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '180px',
      width: 250,
      padding: 0,
    }
  }
};

type TSelectInputProps = {
  filterOptions: string[],
  onChange?: (event: { target: { value: string[] } }) => void,
  width?: number | string,
  isMulti?: boolean,
  disabled?: boolean
}

export const SelectInput = ({ filterOptions, onChange, width, isMulti, disabled }: TSelectInputProps): ReactElement => {
  const [selectedInput, setSelectedInput] = React.useState<string[]>([filterOptions[0]]);

  useEffect(() => {
    if (onChange) {
      onChange({target: {value: selectedInput}});
    }
  }, [selectedInput]);

  const handleChange = (event: SelectChangeEvent<typeof selectedInput>) => {
    const {
      target: { value },
    } = event;
    setSelectedInput(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return (
      <ThemeProvider theme={themeInput}>
        <FormControl sx={{ width: width || 612}}>
          <Select
            SelectDisplayProps={{ style: { padding: '0', height: '22px' } }}
            inputProps={{ 'aria-label': 'Without label' }}
            id="demo-multiple-checkbox"
            multiple={isMulti || (isMulti === undefined)}
            disabled={disabled}
            displayEmpty
            value={selectedInput}
            onChange={handleChange}
            input={<Input disableUnderline={true} />}
            renderValue={(selected) => {
              /* if (selected.length === 0) {
                 return <em>Placeholder</em>;
               }*/
              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            IconComponent={() => <DropdownIcon top={8} right={8}/>}
          >
            {filterOptions.map((option) => (
              <MenuItem key={option} value={option} sx={{ height: '36px', padding: '8px 0 8px 12px' }}>
                <ListItemText primary={option} primaryTypographyProps={{ fontFamily: 'YS-Text', fontSize: '14px' }} />
                <Checkbox
                  checkedIcon={<CheckRoundedIcon sx={{ width: '24px', height: '18px' }}/>}
                  checked={selectedInput.indexOf(option) > -1}
                  icon={<></>}
                />
              </MenuItem>
            ))}
          </Select>
       </FormControl>
      </ThemeProvider>
    )
}
