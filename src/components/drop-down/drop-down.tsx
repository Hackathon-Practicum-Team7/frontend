import {FunctionComponent} from 'react';
import dropDownStyles from './drop-down.module.css';

import {Overlay} from '../overlay/overlay';

import {TDropDown} from '../../utils/types';

export const DropDown: FunctionComponent<TDropDown> = (props) => {
  return (
    <>
      {
        props.isOpen &&
        <Overlay onClose={props.onClose}/>
      }
      {
        props.isOpen && props.type === 'filters' &&
        <button className={dropDownStyles['drop-down-body__close-icon']} onClick={props.onClose}/>
      }
      <div className={
        props.type === 'menu'
          ? props.isOpen
            ? `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_menu']} ${dropDownStyles['drop-down-body_menu-opened']}`
            : `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_menu']}`
          : props.isOpen
            ? `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_filters']} ${dropDownStyles['drop-down-body_filters-opened']}`
            : `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_filters']}`}>

        {props.children}

      </div>
    </>
  )
}
