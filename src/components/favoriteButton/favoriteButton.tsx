import {IconButton, ThemeProvider, createTheme} from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';

type Props = {
  studentId: number
}

export const FavoriteButton: React.FC <Props> = ({ studentId }) => {
  const [favorites, saveFavorites] = useLocalStorage<number[]>("favorites", []);
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


  const theme = createTheme({
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

  return (
    <ThemeProvider theme={theme}>
      {isFavorite ? inList : outList}

    </ThemeProvider>
  )
}
