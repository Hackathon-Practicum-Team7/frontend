import React from 'react';
import styles from './profile.module.css';
import { CardAbout } from '../components/cardAbout/cardAbout';
import { CardSkills } from '../components/cardSkills/cardSkills';
import { CardExperience } from '../components/cardExperience/cardExperience';
import { CardEducation } from '../components/cardEducation/cardEducation';
import { skillsData } from '../components/cardSkills/skillsData';
import { BreadcrumbsNav } from '../components/breadcrumbs/breadcrumbs';
import { Avatar } from '@mui/material';
import { CustomButton } from '../components/custom-button/custom-button';
import SuitcaseIcon from '../images/suitcase-icon.svg?react';
import { ContactButton } from '../components/contactButton/ContactButton';

export const ProfilePage: React.FC = () => {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  }

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

            <div className={styles.cellButton}>
              <ContactButton icon={<SuitcaseIcon />} label="Портфолио" href="https://github.com/elana-tollu"/>
              <ContactButton icon={<SuitcaseIcon />} label="Резюме" href="https://www.africau.edu/images/default/sample.pdf" />
            </div>
            <div className={styles.cellButton}>
              <ContactButton icon={<SuitcaseIcon />} label="petrova@yandex.ru" onClick={ () => copyToClipboard('petrova@yandex.ru')}/>
              <ContactButton icon={<SuitcaseIcon />} label="+7-920-876-45-45" onClick={ () => copyToClipboard('+7-920-876-45-45') }/>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <CustomButton width={'50px'} children={'...'} customType={'customOutlined'}></CustomButton>
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


