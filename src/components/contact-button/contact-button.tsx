import { ThemeProvider } from "@emotion/react";
import {createTheme, Button, Tooltip} from "@mui/material";
import {ReactNode, useState} from "react";
import styles from './contact-button.module.css';

interface Props {
  icon: ReactNode
  label: string
  onClick?: () => void
  href?: string,
  tooltipTitle?: string
}

export const ContactButton: React.FC<Props> = ({icon, label, onClick, href, tooltipTitle}) => {
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

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: 'rgba(121, 121, 129, 0.9)',
            fontFamily: 'YS-Text',
            fontWeight: '400',
            fontSize: '12px'
          },
          arrow: {
            color: 'rgba(121, 121, 129, 0.9)',
          }
        }
      }
    },
  });

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        title={tooltipTitle}
        placement="right"
        arrow
        onClose={handleTooltipClose}
        leaveDelay={250}
        open={open}
      >
      <Button startIcon={icon} onClick={() => {
        if (onClick) onClick();
        handleTooltipOpen();
      }} href={href}>
        <div className={styles.text}>{label}</div>
      </Button>
    </Tooltip>
    </ThemeProvider>
  )
}
