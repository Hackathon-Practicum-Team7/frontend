import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './cardEducation.module.css';

export const CardEducation: React.FC = () => {

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
            minHeight: '396px',
            height: '100%',
            padding: '0',
            borderRadius: '12px'
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardHeader title="Образование" />
        <CardContent>
          <div className={styles.content}>

            <div className={styles.item}>
              <p className={styles.time}>2023</p>
              <p className={styles.title}>Продуктовый дизайнер</p>
              <p className={styles.company}>Менторство в Helper, Студия MAX</p>
            </div>

            <div className={styles.item}>
              <p className={styles.time}>2021</p>
              <p className={styles.title}>UI  дизайнер</p>
              <p className={styles.company}>Пятигорский техникум экономики и инновационных технологий</p>
            </div>

            <div className={styles.item}>
              <p className={styles.time}>2013 - 2017</p>
              <p className={styles.title}>Дизайнер</p>
              <p className={styles.company}>Рязанский государственный радиотехнический университет, Рязань</p>
            </div>

          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
