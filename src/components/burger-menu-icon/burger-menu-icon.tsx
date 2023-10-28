import {FunctionComponent} from 'react';

import burgerStyles from './burger-menu-icon.module.css';

export const BurgerMenuIcon: FunctionComponent<{ onClick: (event: any) => void, isOpen: boolean, isActive: boolean }> = (props) => {
  return (
    <button
      className={props.isActive
        ? `${burgerStyles['menu-icon']} ${burgerStyles['menu-icon_active']}`
        : `${burgerStyles['menu-icon']}`}
      onClick={props.onClick}>
          <span className={props.isActive
            ? `${burgerStyles['menu-icon__span']} ${burgerStyles['menu-icon__span_upper']} ${burgerStyles['menu-icon__span_active']}`
            : `${burgerStyles['menu-icon__span']} ${burgerStyles['menu-icon__span_upper']}`}></span>
      <span className={props.isActive
        ? `${burgerStyles['menu-icon__span']} ${burgerStyles['menu-icon__upper-span_lower']} ${burgerStyles['menu-icon__span_active']}`
        : `${burgerStyles['menu-icon__span']} ${burgerStyles['menu-icon__span_lower']}`}></span>
    </button>
  )
}
