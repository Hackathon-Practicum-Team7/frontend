import styles from "./clear-filters.module.css";
import {ReactElement,} from "react";
import deleteIconGray from '../../images/delete-icon-gray.svg';
import deleteIconWhite from '../../images/delete-icon-white.svg';

type TClearFiltersProps = {
  onClick: () => void,
  children: string,
  color: string
}

export const ClearFilters = ({onClick, children, color}: TClearFiltersProps): ReactElement => {

  return (
    <button className={styles.delete} onClick={onClick}>
      <img className={styles.delete__icon} src={color === 'gray' ? deleteIconGray : deleteIconWhite}
           alt="Очистить фильтры"/>
      <p className={color === 'gray'
        ? `${styles.delete__text} ${styles.delete__text_gray}`
        : `${styles.delete__text} ${styles.delete__text_white}`}>{children}</p>
    </button>
  )
}
