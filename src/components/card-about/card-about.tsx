import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './card-about.module.css';

interface Props {
  about: string
}

export const CardAbout: React.FC<Props> = ({about}) => {

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
            width: '764px',
            padding: '24px',
            borderRadius: '12px',
            overflow: 'clip',
            overflowClipMargin: 'content-box',
          },
        },
      },
    },
  });

  const aboutParagraphs = about.split(/\r\n|\r|\n/g);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardHeader title="О себе" />
        <CardContent>
          <div>
            {aboutParagraphs.map( paragraph => (<div key={paragraph} className={styles.description}>{paragraph}</div>))}
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
