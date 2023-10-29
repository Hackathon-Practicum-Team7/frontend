import styles from "./clear-filters.module.css";
import {ReactElement,} from "react";
import deleteIconGray from '../../images/delete-icon-gray.svg';
import DeleteIcon from '../../images/delete-icon.svg?react';
import { Button, ThemeProvider, createTheme } from "@mui/material";

type TClearFiltersProps = {
  onClick: () => void
}

export const ClearFilters = ({onClick}: TClearFiltersProps): ReactElement => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#1A1B22',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            justifyContent: 'start',

            padding: '0 0 16px 0',
            margin: '0',
            '&:hover': {
              backgroundColor: 'unset',
              textDecoration: 'underline',
              color: '#5A9BFF'
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button startIcon={<DeleteIcon />} onClick={onClick}>Очистить фильтры</Button>
    </ThemeProvider>
  )
}
