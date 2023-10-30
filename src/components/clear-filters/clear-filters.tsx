import {FC, PropsWithChildren} from "react";
import DeleteIcon from '../../images/delete-icon.svg?react';
import { Button, ThemeProvider, createTheme } from "@mui/material";

type TClearFiltersProps = {
  onClick: () => void,
  color?: string
}

export const ClearFilters: FC<PropsWithChildren<TClearFiltersProps>> = ({children, onClick, color = '#1A1B22'}) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color,
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
      <Button startIcon={<DeleteIcon />} onClick={onClick}>{children}</Button>
    </ThemeProvider>
  )
}
