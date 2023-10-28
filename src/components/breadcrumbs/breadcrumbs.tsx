import { Breadcrumbs, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props {
  parentPages: {
    route: string,
    title: string
  }[]
  currentPage: string
}

export const BreadcrumbsNav: React.FC<Props> = ({parentPages, currentPage}) => {
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

        {parentPages.length > 0 && parentPages.map( page => (
          <Link
          underline="hover"
          color="#1A1B22"
          component={NavLink}
          to={page.route}>
          {page.title}
        </Link>
        ))}


        <Typography color="#1A1B22">{currentPage}</Typography>
      </Breadcrumbs>
    </ThemeProvider>
  )
}
