import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './profile.module.css';
import { CardAbout } from '../components/cardAbout/cardAbout';
import { CardSkills } from '../components/cardSkills/cardSkills';
import { CardExperience } from '../components/cardExperience/cardExperience';

export const ProfilePage: React.FC = () => {
  const { id } = useParams();

  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderBox: 'none',
            borderRadius: '0',
            boxShadow: 'none'
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFF',
            color: '#000',
            textTransform: 'none',
            fontSize: '24px',
            fontWeight: '500',
            paddingTop: '0',
            paddingLeft: '0',
            height: '60px'
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            backgroundColor: '#F1F6FF',
            color: '#000',
            textTransform: 'none',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '400',
            minHeightheight: '128px',
            padding: '0'
          },
        },
      },
    },
  });

  return (
    <div>
      <h1> Profile Page </h1>
      <p>{id}</p>

      <div className={styles.content}>

      <CardAbout></CardAbout>

      <CardSkills></CardSkills>

      <CardExperience></CardExperience>

      <ThemeProvider theme={theme}>

      <Card>
        <CardHeader title="Образование" />
        <CardContent>
6 лет
2023
Продуктовый дизайнер
Менторство в Helper, Студия MAX
2021
UI  дизайнер
Пятигорский техникум экономики и инновационных технологий
2013 - 2017
Дизайнер
Рязанский государственный радиотехнический университет, Рязань</CardContent>
      </Card>
     </ThemeProvider>

     </div>

    </div>
  )
}


