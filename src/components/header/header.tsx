import styles from './header.module.css';
import { Avatar, Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Header: React.FC = () => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#5A9BFF',
            color: '#FFF',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500'
          },
        },
      },
    },
  });

  return (
    <header className={styles.header}>
      <div className={styles.leftBar}>
        <IconButton aria-label='menuIcon' color='inherit' className={styles.iconButton}>
          <MenuIcon fontSize="large" />
        </IconButton>

        <div className={styles.content}>
          <p className={styles.logo}>Карьерный Трекер</p>
          <p className={styles.text}>для работодателей, 2023</p>
        </div>
      </div>

      <div className={styles.rightBar}>
        <ThemeProvider theme={theme}>
          <Button className={styles.button} variant='contained'>
            <p>Добавить вакансию</p>
          </Button>
        </ThemeProvider>
        <Avatar src="/broken-image.jpg" />
      </div>
    </header>
  )
}
