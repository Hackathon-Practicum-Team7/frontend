import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './profile.module.css';
import { CardAbout } from '../components/cardAbout/cardAbout';
import { CardSkills } from '../components/cardSkills/cardSkills';
import { CardExperience } from '../components/cardExperience/cardExperience';
import { CardEducation } from '../components/cardEducation/cardEducation';
import { skillsData } from '../components/cardSkills/skillsData';

export const ProfilePage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1> Profile Page </h1>
      <p>{id}</p>

      <div className={styles.content}>

      <CardAbout></CardAbout>

      <CardSkills skills={skillsData}></CardSkills>

      <CardExperience></CardExperience>

      <CardEducation></CardEducation>

     </div>

    </div>
  )
}


