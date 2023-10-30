import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import menuItemStyles from './menu-item.module.css';
import suitcaseIcon from '../../images/suitcase-icon-white.svg';
import partnersIcon from '../../images/partners-icon.svg';
import favoritesIcon from '../../images/like-white-outline.svg';
import chatIcon from '../../images/message-icon.svg';
import profileInfoIcon from '../../images/profile-info-icon.svg';
import helpIcon from '../../images/help-icon.svg';
import logoutIcon from '../../images/logout-icon.svg';

import {MenuItemName, TMenuItem} from '../../utils/types';

export const MenuItem: FunctionComponent<TMenuItem> = (props) => {
  return (
    <li className={menuItemStyles.item}>
      <Link to={props.path} onClick={props.onClick}>
        <button type="button" className={menuItemStyles['item-button']}>
          <img src={
            props.itemName === MenuItemName.MY_VACANCIES ? suitcaseIcon
              : props.itemName === MenuItemName.FIND_CANDIDATE ? partnersIcon
                : props.itemName === MenuItemName.FAVORITES ? favoritesIcon
                  : props.itemName === MenuItemName.CHAT ? chatIcon
                    : props.itemName === MenuItemName.PROFILE_INFO ? profileInfoIcon
                      : props.itemName === MenuItemName.HELP ? helpIcon
                        : logoutIcon
          } alt="Иконка для пункта меню" className={menuItemStyles['item-button__icon']}/>
          {props.itemName}
        </button>
      </Link>
    </li>
  )
}
