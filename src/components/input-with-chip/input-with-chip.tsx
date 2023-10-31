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

type TInputWithChipProps = {
  filterOptions: string[],
  onClearClick?: () => void,
  input: string[] | [],
  setInput: (newInput: string[]) => void,
  placeholderText?: string,
  width?: number | string,
  chipVariant?: 'gray',
  withShowAll?: boolean,
  onShowAll?: () => void,
  isSkill?: boolean,
}
export const InputWithChip = ({ filterOptions, input, setInput, placeholderText, width, chipVariant, withShowAll = true, onShowAll, isSkill }: TInputWithChipProps): ReactElement => {
  const handleChange = (_event: React.SyntheticEvent, value: string[], _reason: string) => {
    setInput(value);
  };

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    setInput(input.filter(item => item !== value));
  }

  const chips = (withShowAll && isSkill) ? input.slice(0, 6) : input;

  return (
    <ThemeProvider theme={themeInput}>
      <FormControl sx={{ width: width || 612 }}>
        <Autocomplete
          value={input}
          onChange={handleChange}
          multiple
          disableCloseOnSelect
          disableClearable={true}
          renderInput={(params) => <TextField placeholder={placeholderText} {...params} />}
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
          {chips.map((value) => (
            <Chip
              key={value}
              label={value}
              variant={chipVariant || 'filled'}
              onDelete={(e) => handleDelete(e, value)}
              deleteIcon={<CloseRoundedIcon />}
            />
          ))}
          { (input.length > 6 && withShowAll && isSkill) && (
            <Chip
              clickable={true}
              onClick={onShowAll}
              label={'Показать все'}
              variant={'outlined'}
              sx={{
                fontWeight: '400',
                backgroundColor: 'transparent',
                color: '#797981',
                borderColor: 'rgba(90, 155, 255, 1)',
                cursor: 'pointer',
                '&.MuiChip-clickable:hover': {
                  backgroundColor: '#1D6BF3',
                  color: 'white',
                  borderColor: 'transparent',
                }
              }}
            />
          )}
        </div>
      )}
    </ThemeProvider>
  )
}
