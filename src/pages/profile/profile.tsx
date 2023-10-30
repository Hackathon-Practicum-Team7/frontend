import React, { useEffect } from 'react';
import styles from './profile.module.css';
import { CardAbout } from '../../components/card-about/card-about';
import { CardSkills } from '../../components/card-skills/card-skills';
import { CardExperience } from '../../components/card-experience/card-experience';
import { CardEducation } from '../../components/card-education/card-education';
import { BreadcrumbsNav } from '../../components/breadcrumbs/breadcrumbs';
import { Avatar } from '@mui/material';
import { CustomButton } from '../../components/custom-button/custom-button';
import SuitcaseIcon from '../../images/suitcase-icon-black.svg?react';
import DownloadIcon from '../../images/download-icon.svg?react';
import EmailIcon from '../../images/email-icon.svg?react';
import PaperPlaneIcon from '../../images/paper-plane-icon.svg?react';
import { ContactButton } from '../../components/contact-button/contact-button';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';
import { useParams } from 'react-router-dom';
import { useDispatch } from '../../services/hooks/use-dispatch';
import { loadProfile } from '../../services/async-thunk/load-profile';
import { useSelector } from '../../services/hooks/use-selector';

export const ProfilePage: React.FC = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();

  const {profile, profileLoading} = useSelector(state => state.loadProfileState);

  useEffect( () => {
    dispatch(loadProfile(studentId!));
  }, [studentId]);

  if (profileLoading || !profile) {
    return <></>
  }

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  }

  return (
    <section className={styles.profileSection}>
      <div className={styles.staticContent}>
        <BreadcrumbsNav parentPages={[{route: '/results', title: 'Список кандидатов'}]} currentPage="Профиль кандидата" />
        <h1 className={styles.title}>Профиль кандидата</h1>

        <div className={styles.info}>
          <Avatar
              alt="Фото кандидата"
              src={profile.avatar}
              sx={{ width: 148, height: 148 }}
            />

          <div className={styles.shortlist}>
            <div className={styles.cell}>
              <p className={styles.main}>{profile.name} {profile.surname}</p>
              <p className={styles.extra}>{profile.city}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.main}>{profile.profession}</p>
              <p className={styles.extra}>{profile.grade}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.main}>{profile.employment_types[0]}</p>
              <p className={styles.extra}>{profile.working_condition[0]}</p>
            </div>

            <div className={styles.cellButton}>
              <ContactButton icon={<SuitcaseIcon />} label="Портфолио" href={profile.contact.portfolio}/>
              <ContactButton icon={<DownloadIcon />} label="Резюме" href={profile.resume} />
            </div>
            <div className={styles.cellButton}>
              <ContactButton icon={<EmailIcon />} label={profile.contact.email} onClick={ () => copyToClipboard(profile.contact.email)}/>
              <ContactButton icon={<PaperPlaneIcon />} label={profile.contact.phone} onClick={ () => copyToClipboard(profile.contact.phone) }/>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <FavoriteButton studentId={studentId!} />
          <CustomButton width={'266px'} children={'Пригласить на собеседование'} customType={'customOutlined'}></CustomButton>
        </div>
      </div>

      <div className={styles.content}>
        <CardAbout about={profile.about} />
        <CardSkills skills={profile.skills} />
        <CardExperience jobs={profile.jobs} experience={0} />
        <CardEducation educations={profile.educations} />
      </div>
    </section>

  )
}


