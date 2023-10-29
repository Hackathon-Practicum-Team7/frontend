import Button from '@mui/material/Button';
import {ThemeProvider} from "@mui/material";
import {MouseEventHandler, ReactElement} from "react";
import {themeInput} from '../../utils/constants/style-constants';

type TCustomButtonProps = {
  children: string | ReactElement,
  width?: string | number,
  customType: 'customContained' | 'customOutlined' | 'customFilterActive' | 'customFilter',
  extraStyles?: 'button' | 'filterButton',
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: 'submit' | 'button' | 'reset',
  disabled?: boolean,
}

export const CustomButton = ( { children, width, customType, extraStyles, onClick, type, disabled }: TCustomButtonProps): ReactElement => {

  const customStyles = {
    button: {
      textTransform: "none",
      fontFamily: 'YS-Text',
      fontWeight: '500',
      width: width || '260px',
      height: '50px',
      borderRadius: '6px',
      fontSize: '14px',
      ':hover': {
        backgroundColor: '#1D6BF3',
        color: 'white',
        border: '1px solid transparent',
      },
      ':focus': {
        backgroundColor: '#1D6BF3',
        color: 'white',
        border: '1px solid transparent',
      }
    },
    filterButton: {
      textTransform: "none",
      fontFamily: 'YS-Text',
      fontWeight: '400',
      padding: '8px 16px',
      fontSize: '14px',
      ':hover': {
        backgroundColor: '#1D6BF3',
        color: 'white',
        border: '1px solid transparent',
      },
      ':focus': {
        backgroundColor: '#1D6BF3',
        color: 'white',
        border: '1px solid transparent',
      },
      ':active': {
        border: '1px solid transparent',
      }
    },
  };

  return (
    <ThemeProvider theme={themeInput}>
      <Button
        variant={customType}
        sx={ (extraStyles === 'filterButton') ? customStyles.filterButton : customStyles.button }
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </Button>
    </ThemeProvider>
  )
}
