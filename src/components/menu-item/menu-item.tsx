import React, {FunctionComponent} from 'react';

import menuItemStyles from './menu-item.module.css';
import suitcaseIcon from '../../images/suitcase-icon.svg';
import partnersIcon from '../../images/partners-icon.svg';
import favoritesIcon from '../../images/like-white-outline.svg';
import chatIcon from '../../images/message-icon.svg';
import profileInfoIcon from '../../images/profile-info-icon.svg';
import helpIcon from '../../images/help-icon.svg';
import logoutIcon from '../../images/logout-icon.svg';
import deleteIcon from '../../images/delete-icon-white.svg';

import {MenuItemName, TMenuItem} from '../../utils/types';

export const MenuItem: FunctionComponent<TMenuItem> = (props) => {
  return (
    <>
      {
        props.itemName !== MenuItemName.RESET_FILTERS
          ? <li className={menuItemStyles.item}>
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
          </li>
          : <button type="button" className={`${menuItemStyles['item-button']} ${menuItemStyles['item-button_delete-filters']}`}>
            <img src={deleteIcon}
                 alt="Иконка для пункта меню"
                 className={`${menuItemStyles['item-button__icon']} ${menuItemStyles['item-button__icon_delete-filters']}`}/>
            {props.itemName}
          </button>
      }
    </>
  )
}
