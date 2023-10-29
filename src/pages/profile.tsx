import React from 'react';
import styles from './profile.module.css';
import { CardAbout } from '../components/cardAbout/cardAbout';
import { CardSkills } from '../components/cardSkills/cardSkills';
import { CardExperience } from '../components/cardExperience/cardExperience';
import { CardEducation } from '../components/cardEducation/cardEducation';
import { skillsData } from '../components/cardSkills/skillsData';
import { BreadcrumbsNav } from '../components/breadcrumbs/breadcrumbs';
import { Avatar, Badge, ThemeProvider, createTheme } from '@mui/material';
import { CustomButton } from '../components/custom-button/custom-button';
import SuitcaseIcon from '../images/suitcase-icon-black.svg?react';
import DownloadIcon from '../images/download-icon.svg?react';
import EmailIcon from '../images/email-icon.svg?react';
import PaperPlaneIcon from '../images/paper-plane-icon.svg?react';
import { ContactButton } from '../components/contactButton/ContactButton';
import { FavoriteButton } from '../components/favoriteButton/favoriteButton';

export const ProfilePage: React.FC = () => {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  }

  const theme = createTheme({
    components: {
      MuiBadge: {
        styleOverrides: {
          badge: {
            bottom: '8px',
            right: '8px'
          }
        }
      },
    },
  });

  return (
    <div>
      <div className={styles.staticContent}>
        <BreadcrumbsNav parentPages={[{route: '/results', title: 'Список кандидатов'}]} currentPage="Профиль кандидата" />
        <h1 className={styles.title}>Профиль кандидата</h1>

        <div className={styles.info}>
        <ThemeProvider theme={theme}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <FavoriteButton studentId={3} isBadge={true}/>
            }>
            <Avatar
              alt="Фото кандидата"
              src="https://yt3.ggpht.com/ytc/AMLnZu_PczQwsAx-yjBvH7KsR9vpjSy-0Zn_gYpFqTqGEw=s900-c-k-c0x00ffffff-no-rj"
              sx={{ width: 148, height: 148 }}
            />
          </Badge>
        </ThemeProvider>

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

            <div className={styles.cellButton}>
              <ContactButton icon={<SuitcaseIcon />} label="Портфолио" href="https://github.com/elana-tollu"/>
              <ContactButton icon={<DownloadIcon />} label="Резюме" href="https://www.africau.edu/images/default/sample.pdf" />
            </div>
            <div className={styles.cellButton}>
              <ContactButton icon={<EmailIcon />} label="petrova@yandex.ru" onClick={ () => copyToClipboard('petrova@yandex.ru')}/>
              <ContactButton icon={<PaperPlaneIcon />} label="+7-920-876-45-45" onClick={ () => copyToClipboard('+7-920-876-45-45') }/>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <FavoriteButton studentId={3} />
          <CustomButton width={'266px'} children={'Пригласить на собеседование'} customType={'customOutlined'}></CustomButton>
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


