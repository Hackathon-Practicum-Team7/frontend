import {FunctionComponent} from 'react';
import {Avatar} from '@mui/material';

import navStyles from './navigation.module.css';
import avatarImage from '../../images/user-image.png';

import {MenuItem} from '../menu-item/menu-item';
import {deleteCookie} from '../../utils/helpers';
import {userDataActions} from '../../services/slices/user-data';
import {useDispatch} from '../../services/hooks/use-dispatch';
import {useSelector} from '../../services/hooks/use-selector';

export const Navigation: FunctionComponent<{ onClosePerRedirect: () => void }> = (props) => {
  const userDataState = useSelector(state => state.userDataState);

  const dispatch = useDispatch();

  const handleOnClickExit = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    dispatch(userDataActions.setIsAuthorized(false));
  }

  return (
    <nav className={navStyles.menu}>
      <div>
        <button className={navStyles['menu__profile-button']}>
          <div className={navStyles['menu__profile-button-wrap']}>
            <Avatar src={userDataState.user?.avatar ? userDataState.user?.avatar : avatarImage}
                    alt="Аватар пользователя"
                    sx={{ width: 50, height: 50 }}/>
            <div className={navStyles['menu__text-wrap']}>
              <p className={`${navStyles.text} ${navStyles['text_primary']}`}>{userDataState.user?.name}</p>
              <p className={`${navStyles.text} ${navStyles['text_secondary']}`}>{userDataState.user?.company}</p>
            </div>
          </div>
        </button>
        <ul className={`${navStyles.list} ${navStyles['list_outer']}`}>
          <MenuItem itemName="Мои вакансии" onClick={() => console.log('hi there!')}/>
          <li className={navStyles['decor-item']}/>
          <ul className={navStyles.list}>
            <MenuItem itemName="Найти кандидата" path="/" onClick={props.onClosePerRedirect}/>
            <MenuItem itemName="Избранное" onClick={() => console.log('hi there!')}/>
            <MenuItem itemName="Чат" onClick={() => console.log('hi there!')}/>
          </ul>
        </ul>
      </div>
      <ul className={navStyles.list}>
        <MenuItem itemName="Инфо профиля" onClick={() => console.log('hi there!')}/>
        <MenuItem itemName="Помощь" onClick={() => console.log('hi there!')}/>
        <MenuItem itemName="Выйти" path="/login" onClick={handleOnClickExit}/>
      </ul>
    </nav>
  )
}
