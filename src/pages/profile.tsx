import React from 'react';
import styles from './profile.module.css';
import { CardAbout } from '../components/cardAbout/cardAbout';
import { CardSkills } from '../components/cardSkills/cardSkills';
import { CardExperience } from '../components/cardExperience/cardExperience';
import { CardEducation } from '../components/cardEducation/cardEducation';
import { skillsData } from '../components/cardSkills/skillsData';
import { BreadcrumbsNav } from '../components/breadcrumbs/breadcrumbs';
import { Avatar, Button, SvgIcon, ThemeProvider, createTheme } from '@mui/material';
import { CustomButton } from '../components/custom-button/custom-button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export const ProfilePage: React.FC = () => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#1A1B22',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            justifyContent: 'start',
            padding: '0',
            margin: '0'
          },
        },
      },
    },
  });

  return (
    <div>
      <div className={styles.staticContent}>
        <BreadcrumbsNav></BreadcrumbsNav>

        <h1 className={styles.title}>Профиль кандидата</h1>

        <div className={styles.info}>
          <Avatar
            alt="Фото кандидата"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 148, height: 148 }}
          />

          <div className={styles.shortlist}>
            <div className={styles.cell}>
              <p className={styles.main}>Петрова Ольга</p>
              <p className={styles.extra}>Санкт-Петербург</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.main}>Дизайнер интерфейсов</p>
              <p className={styles.extra}>Middle </p>
            </div>
            <div className={styles.cell}>
              <p className={styles.main}>Частичная занятость</p>
              <p className={styles.extra}>Гибрид</p>
            </div>

            <ThemeProvider theme={theme}>
              <div className={styles.cellButton}>
                <Button>
                <SvgIcon>
                  <svg
                    xmlns="../../images/suitcase-icon.svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1A1B22"
                  ></svg>
                </SvgIcon>
                  Портфолио
                </Button>
                <Button startIcon={<SaveAltIcon />}>Резюме</Button>
              </div>
              <div className={styles.cellButton}>
                <Button>petrova@yandex.ru</Button>
                <Button>+7-920-876-45-45</Button>
              </div>
            </ThemeProvider>
          </div>
        </div>

        <div className={styles.buttons}>
          <CustomButton children={'Добавить в избранное'} customType={'customOutlined'}></CustomButton>
          <CustomButton children={'Пригласить на собеседование'} customType={'customOutlined'}></CustomButton>
        </div>
      </div>

      <div className={styles.content}>
        <CardAbout></CardAbout>

        <CardSkills skills={skillsData}></CardSkills>

        <CardExperience></CardExperience>

        <CardEducation></CardEducation>
      </div>
    </div>

  )
}


