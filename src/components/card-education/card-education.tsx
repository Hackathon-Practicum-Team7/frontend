import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './card-education.module.css';
import { TEducation } from '../../services/slices-types';

interface Props {
  educations: TEducation[]
}

export const CardEducation: React.FC<Props> = ({educations}) => {

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

            {educations.map(education => (
              <div className={styles.item} key={education.id}>
                <p className={styles.time}>{education.started_at && `${education.started_at} - ` }{education.finished_at || 'по настоящее время'}</p>
                <p className={styles.title}>{education.speciality}</p>
                <p className={styles.company}>{education.institute}</p>
              </div>
            )).toReversed()}
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
