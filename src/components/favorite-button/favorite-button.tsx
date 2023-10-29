import {IconButton, ThemeProvider, createTheme} from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';

type Props = {
  studentId: string
  isBadge?: boolean
}

export const FavoriteButton: React.FC <Props> = ({ studentId, isBadge = false }) => {
  const [favorites, saveFavorites] = useLocalStorage<string[]>("favorites", []);
  const isFavorite = favorites.indexOf(studentId) >= 0;

  const removeFromFavorites = () => {
    const updatedFavorites = favorites.filter((item) => item !== studentId);
    saveFavorites(updatedFavorites);
  }

  const addToFavorites = () => {
    const updatedFavorites = [...favorites, studentId];
    saveFavorites(updatedFavorites);
  }

  const inList = <IconButton onClick={ removeFromFavorites }><FavoriteOutlined /></IconButton>;
  const outList = <IconButton onClick={ addToFavorites }><FavoriteBorderOutlined /></IconButton>


  const themeBadge = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: '35px',
            height: '35px'
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '6px',
            border: '1px solid transparent',
            color: "#1D6BF3",
            padding: '0',
            margin: '0',
            '&:hover': {
              backgroundColor: 'unset',
              color: '#1D6BF3',
              border: '1px solid transparent',
            },
          },
        },
      },
    },
  });



  const themeButton = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '6px',
            border: '1px solid #1D6BF3',
            width: '50px',
            height: '50px',
            color: "#1D6BF3",
            padding: '0',
            margin: '0',
            '&:hover': {
              backgroundColor: '#1D6BF3',
              color: 'white',
              border: '1px solid transparent',
            },
          },
        },
      },
    },
  });

  const theme = isBadge ? themeBadge : themeButton;

  return (
    <ThemeProvider theme={theme}>
      {isFavorite ? inList : outList}

    </ThemeProvider>
  )
}
