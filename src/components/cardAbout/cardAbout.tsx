import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './cardAbout.module.css';

export const CardAbout: React.FC = () => {

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
            height: '128px',
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
        <CardHeader title="О себе" />
        <CardContent>
          <div className={styles.content}>
            Помимо дизайна интерфейсов, люблю делать работы в графическом: например,
            разрабатывать презентации или макеты для печати. Хорошо знакома с многостраничной версткой
            и предпечатной подготовкой. Базовые знания HTML и CSS получила именно в техникуме.
            Хобби: видео-игры, рисование, леттеринг, языки (английский, японский).
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
