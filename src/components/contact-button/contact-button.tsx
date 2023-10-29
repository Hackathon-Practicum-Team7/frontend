import { ThemeProvider } from "@emotion/react";
import { createTheme, Button } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode
  label: string
  onClick?: () => void
  href?: string
}

export const ContactButton: React.FC<Props> = ({icon, label, onClick, href}) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#1A1B22',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            justifyContent: 'start',
            padding: '0',
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
        <Button startIcon={icon} onClick={onClick} href={href}>{label}</Button>
    </ThemeProvider>
  )
}
