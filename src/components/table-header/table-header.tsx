import styles from "./table-header.module.css";
import {ReactElement} from "react";
import editIcon from '../../images/edit-icon.svg';
import settingsIcon from '../../images/settings-icon.svg'

export const TableHeader = (): ReactElement => {

  return (
      <div className={styles.header}>
        <div>
          <h1 className={styles.header__text}>Список кандидатов</h1>
          <span className={styles.subheader__text}>100 профилей найдено</span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <img src={editIcon} className={styles.button__icon} alt={'Отобразить список'} />
            Отображение списка
          </button>
          <button className={styles.button}>
            <img src={settingsIcon} className={styles.button__icon} alt={'Отобразить список'} />
            Фильтры
          </button>
        </div>
      </div>
  )
}
