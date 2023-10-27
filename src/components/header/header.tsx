import React, {useEffect, useState} from 'react';
import {Avatar, Button, ThemeProvider} from '@mui/material';

import styles from './header.module.css';
import overlayStyles from '../overlay/overlay.module.css';

import {themeHeader} from '../../utils/constants/style-constants';

import {DropDown} from '../drop-down/drop-down';
import {BurgerMenuIcon} from '../burger-menu-icon/burger-menu-icon';

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [isBurgerButtonActive, setIsBurgerButtonActive] = useState<boolean>(false)

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

  return (
    <header className={styles.header}>
      <div className={styles.leftBar}>
        <BurgerMenuIcon onClick={handleShowMenu} isOpen={menuIsOpen} isActive={isBurgerButtonActive}/>

        <DropDown onClose={handleShowMenu} isOpen={menuIsOpen}>
          <div>

          </div>
        </DropDown>


        <div className={styles.content}>
          <p className={styles.logo}>Карьерный Трекер</p>
          <p className={styles.text}>для работодателей, 2023</p>
        </div>
      </div>

      <div className={styles.rightBar}>
        <ThemeProvider theme={themeHeader}>
          <Button className={styles.button} variant='contained'>
            <p>Добавить вакансию</p>
          </Button>
        </ThemeProvider>
        <Avatar src="/broken-image.jpg"/>
      </div>
    </header>
  )
}
