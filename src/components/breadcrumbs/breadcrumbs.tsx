import { Breadcrumbs, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const BreadcrumbsNav: React.FC = () => {
  const theme = createTheme({
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            '&:hover': {
              color: '#5A9BFF'
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="#1A1B22"
          component={NavLink}
          to="/">
          Поиск
        </Link>
        <Link
          underline="hover"
          color="#1A1B22"
          component={NavLink}
          to="/results">
          Список кандидатов
        </Link>
        <Typography color="#1A1B22">Профиль кандидата</Typography>
      </Breadcrumbs>
    </ThemeProvider>
  )
}
