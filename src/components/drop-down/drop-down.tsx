import React, {FunctionComponent} from 'react';

import burgerStyles from './drop-down.module.css';

import {Overlay} from '../overlay/overlay';

import {TBurgerMenu} from '../../utils/types';


export const DropDown: FunctionComponent<TBurgerMenu> = (props) => {
  return (
    <>
      {
        props.menuIsOpen &&
        <Overlay onClose={props.onClose}/>
      }
      <div className={props.menuIsOpen
        ? `${burgerStyles['menu-body']} ${burgerStyles['menu-body_opened']}`
        : `${burgerStyles['menu-body']}`}>
        {props.children}
      </div>
    </>
  )
}
