import React, {FunctionComponent} from 'react';

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
      <div className={props.isOpen
        ? `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_opened']}`
        : `${dropDownStyles['drop-down-body']}`}>
        {props.children}

      </div>
    </>
  )
}
{/*<div className={*/
}
{/*  props.type === 'menu'*/
}
{/*    ? props.isOpen*/
}
{/*      ? `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_menu']} ${dropDownStyles['drop-down-body_opened']}`*/
}
{/*      : `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_menu']}`*/
}
{/*    : props.isOpen*/
}
{/*      ? `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_menu']} ${dropDownStyles['drop-down-body_opened']}`*/
}
{/*      : `${dropDownStyles['drop-down-body']} ${dropDownStyles['drop-down-body_menu']}`}*/
}
{/*>*/
}
