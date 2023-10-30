import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './card-experience.module.css';
import { TJob } from '../../services/slices-types';

interface Props {
  jobs: TJob[]
  experience: number
}

export const CardExperience: React.FC<Props> = ({jobs, experience}) => {

  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderBox: 'none',
            borderRadius: '0',
            boxShadow: 'none',
            height: '100%',
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
            minHeight: '',
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
        <CardHeader title={`Опыт работы ${experience} лет`} />
        <CardContent>
          <div className={styles.content}>
            {jobs.map( job => (
              <div className={styles.item} key={job.id}>
              <p className={styles.title}>{job.position}</p>
              <p className={styles.company}>{job.organisation}</p>
              <p className={styles.time}>{job.started_at} - {job.finished_at}</p>
              <p className={styles.description}>{job.about}</p>
            </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}


