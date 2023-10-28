import React, {FunctionComponent} from 'react';
import {Avatar} from '@mui/material';

import navStyles from './navigation.module.css';
import avatarImage from '../../images/user-image.png';

import {MenuItem} from '../menu-item/menu-item';

export const Navigation: FunctionComponent = () => {
  // const navigate = useNavigate();
  // const handleClickFindCandidates = () => {
  //   navigate('/');
  // }

  // TODO: подключить навигацию на главную к Найти кандидата (NavLink?)

  return (
    <nav className={navStyles.menu}>
      <div>
        <button className={navStyles['menu__profile-button']}>
          <div className={navStyles['menu__profile-button-wrap']}>
            <Avatar src={avatarImage} alt="Аватар пользователя" sx={{width: 50, height: 50}}/>
            <div className={navStyles['menu__text-wrap']}>
              <p className={`${navStyles.text} ${navStyles['text_primary']}`}>Мария</p>
              <p className={`${navStyles.text} ${navStyles['text_secondary']}`}>Компания: CROT</p>
            </div>
          </div>
        </button>
        <ul className={`${navStyles.list} ${navStyles['list_outer']}`}>
          <MenuItem itemName="Мои вакансии" onClick={() => console.log('hi there!')}/>
          <li className={navStyles['decor-item']}/>
          <ul className={navStyles.list}>
            <MenuItem itemName="Найти кандидата" onClick={() => console.log('hi there!')}/>
            <MenuItem itemName="Избранное" onClick={() => console.log('hi there!')}/>
            <MenuItem itemName="Чат" onClick={() => console.log('hi there!')}/>
          </ul>
        </ul>
      </div>
      <ul className={navStyles.list}>
        <MenuItem itemName="Инфо профиля" onClick={() => console.log('hi there!')}/>
        <MenuItem itemName="Помощь" onClick={() => console.log('hi there!')}/>
        <MenuItem itemName="Выйти" onClick={() => console.log('hi there!')}/>
      </ul>

    </nav>
  )
}
