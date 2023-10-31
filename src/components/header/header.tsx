import React, {useEffect, useState} from 'react';
import {Avatar, ThemeProvider} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';

import styles from './header.module.css';
import overlayStyles from '../overlay/overlay.module.css';
import avatarImage from '../../images/user-image.png';

import {themeHeader} from '../../utils/constants/style-constants';

import {useSelector} from '../../services/hooks/use-selector';

import {DropDown} from '../drop-down/drop-down';
import {BurgerMenuIcon} from '../burger-menu-icon/burger-menu-icon';
import {Navigation} from '../navigation/navigation';
import {CustomButton} from '../custom-button/custom-button';

export const Header: React.FC = () => {
  const userDataState = useSelector(state => state.userDataState);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [isBurgerButtonActive, setIsBurgerButtonActive] = useState<boolean>(false)

  const navigate = useNavigate();
  const location = useLocation();

  const handleShowMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    if (menuIsOpen) {
      setIsBurgerButtonActive(true);
      document.body.classList.add(overlayStyles['body-overlay']);
    } else {
      setIsBurgerButtonActive(false);
      document.body.classList.remove(overlayStyles['body-overlay']);
    }
  }, [menuIsOpen])

  if (location.pathname === '/login') {
    return null;
  }

  return (
    <>
      {
        location.pathname !== '/'
        && location.pathname !== '/login'
        && location.pathname !== '/results'
        && (location.pathname && !location.pathname.includes(`/profile`))
        && location.pathname !== '/in-progress'
          ? <header className={`${styles.header} ${styles['header_not-found-page']}`}>
            <div className={styles.leftBar}>

              <div className={styles.content}>
                <p className={styles.logo}>Карьерный Трекер</p>
                <p className={styles.text}>для работодателей, 2023</p>
              </div>
            </div>
          </header>

          : <header className={styles.header}>
            <div className={styles.leftBar}>
              {
                <BurgerMenuIcon onClick={handleShowMenu} isOpen={menuIsOpen} isActive={isBurgerButtonActive}/>
              }

              <DropDown type="menu" onClose={handleShowMenu} isOpen={menuIsOpen}>
                <Navigation onClosePerRedirect={handleShowMenu}/>
              </DropDown>


              <div className={styles.content}>
                <p className={styles.logo}>Карьерный Трекер</p>
                <p className={styles.text}>для работодателей, 2023</p>
              </div>
            </div>

            <div className={styles.rightBar}>
              <ThemeProvider theme={themeHeader}>
                <CustomButton customType="customContained" onClick={() => navigate('/in-progress')}>
                  <p>Добавить вакансию</p>
                </CustomButton>
              </ThemeProvider>
              <Avatar src={userDataState.user?.avatar ? userDataState.user?.avatar : avatarImage}
                      alt="Аватар пользователя"
                      sx={{width: 50, height: 50}}/>
            </div>
          </header>
      }
    </>
  )
}
