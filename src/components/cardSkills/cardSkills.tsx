import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './cardSkills.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const CardSkills: React.FC = () => {

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
            padding: '0'
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardHeader title="Навыки" />
        <CardContent>
          <div className={styles.content}>
            <div className={styles.skill}>
              <p className={styles.skill}>Маркетинговая аналитика</p>
              <MoreHorizIcon fontSize="large"/>
            </div>

            <div className={styles.skill}>
              <p>UX - исследования</p>
              <MoreHorizIcon fontSize="large"/>
            </div>

            <div className={styles.skill}>
              <p>UI</p>
              <MoreHorizIcon fontSize="large"/>
            </div>

            <div className={styles.skill}>
              <p>Figma</p>
              <MoreHorizIcon fontSize="large"/>
            </div>

            <div className={styles.skill}>
              <p>Adobe Photoshop</p>
              <MoreHorizIcon fontSize="large"/>
            </div>

            <div className={styles.skill}>
              <p>Adobe Photoshop</p>
              <MoreHorizIcon fontSize="large"/>
            </div>

          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
