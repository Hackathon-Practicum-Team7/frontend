import * as React from 'react';
import {ReactElement} from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {
  Autocomplete,
  Chip,
  FormControl,
  TextField,
  ThemeProvider,
} from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styles from './input-with-chip.module.css';
import {DropdownIcon} from "../dropdown-icon/dropdown-icon";
import {themeInput} from '../../utils/constants/style-constants';


/*<Select
  SelectDisplayProps={{ style: { padding: '0', height: '22px' } }}
  inputProps={{ 'aria-label': 'Without label' }}
  id="demo-multiple-checkbox"
  multiple
  displayEmpty
  value={input}
  onChange={handleChange}
  input={<Input disableUnderline={true} onChange={handleInputChange} />}
  renderValue={() => {
                 if (selected.length === 0) {
                   return <em>Placeholder</em>;
                 }
    return <span>Выберите навыки</span>;
  }}
  MenuProps={MenuProps}
  IconComponent={() => <DropdownIcon />}
>
  {names.map((name) => (
    <MenuItem key={name} value={name} sx={{ height: '36px', padding: '8px 0 8px 12px' }}>
      <ListItemText primary={name} primaryTypographyProps={{ fontFamily: 'YS-Text', fontSize: '14px' }} />
      <Checkbox
        checkedIcon={<CheckRoundedIcon sx={{ width: '24px', height: '18px' }}/>}
        checked={input.indexOf(name) > -1}
        icon={<></>}
      />
    </MenuItem>
  ))}
</Select>*/

type TInputWithChipProps = {
  filterOptions: string[],
  onClearClick?: () => void,
  input: string[] | [],
  setInput: React.Dispatch<React.SetStateAction<string[]>>,
}
export const InputWithChip = ({ filterOptions, input, setInput }: TInputWithChipProps): ReactElement => {
  const handleChange = (_event: React.SyntheticEvent, value: string[], _reason: string) => {
    setInput(value);
  };

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    setInput((current) => current.filter(item => item != value));
  }

  return (
    <ThemeProvider theme={themeInput}>
      <FormControl sx={{ width: 612 }}>
        <Autocomplete
          value={input}
          onChange={handleChange}
          multiple
          disableClearable={true}
          renderInput={(params) => <TextField placeholder="Выберите навыки" {...params} />}
          options={filterOptions}
          popupIcon={<DropdownIcon top={2} right={3} />}
          renderOption={(props, option, { selected }) => (
            <MenuItem {...props} sx={{ height: '36px', padding: '8px 0 8px 12px' }}>
              <ListItemText primary={option} primaryTypographyProps={{ fontFamily: 'YS-Text', fontSize: '14px' }} />
              <Checkbox
                checkedIcon={<CheckRoundedIcon sx={{ width: '24px', height: '18px' }}/>}
                checked={selected}
                icon={<></>}
                sx={{ position: 'absolute', right: 0, top: 0 }}
              />
            </MenuItem>
          )}
          renderTags={() => null}
        />
      </FormControl>
      { (input.length > 0) && (
        <div className={styles.container}>
          {input.map((value) => (
            <Chip
              key={value}
              label={value}
              onDelete={(e) => handleDelete(e, value)}
              deleteIcon={<CloseRoundedIcon />}
            />
          ))}
        </div>
      )}
    </ThemeProvider>
  )
}
