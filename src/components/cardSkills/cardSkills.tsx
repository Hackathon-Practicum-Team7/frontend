import { Card, CardContent, CardHeader, Rating, ThemeProvider, createTheme } from '@mui/material';
import { Circle, CircleOutlined } from '@mui/icons-material';
import React from 'react';
import styles from './cardSkills.module.css';
import { Skill } from './Skill';

interface Props {
  skills: Skill[]
}

export const CardSkills: React.FC<Props> = ({ skills }) => {

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
            {skills.map(skill => (
              <div className={styles.skill}>
                <p className={styles.skill}>{skill.title}</p>
                <Rating
                  name="simple-controlled"
                  value={skill.level}
                  readOnly={true}
                  max={4}
                  icon={<Circle fontSize="small" />}
                  emptyIcon={<CircleOutlined fontSize="small" />}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
