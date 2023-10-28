import styles from "./clear-filters.module.css";
import {ReactElement, } from "react";
import deleteIcon from '../../images/delete-icon-gray.svg';

type TClearFiltersProps = {
  onClick: () => void,
  children: string
}

export const ClearFilters = ({onClick, children}: TClearFiltersProps): ReactElement => {

  return (
    <button className={styles.delete} onClick={onClick}>
      <img className={styles.delete__icon} src={deleteIcon} alt="Очистить фильтры"/>
      <p className={styles.delete__text}>{children}</p>
    </button>
  )
}
