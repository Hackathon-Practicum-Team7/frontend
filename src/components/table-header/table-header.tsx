import styles from "./table-header.module.css";
import {ReactElement} from "react";
import editIcon from '../../images/edit-icon.svg';
import editIconDisabled from '../../images/edit-icon-gray.svg';
import settingsIcon from '../../images/settings-icon.svg';
import settingsIconDisabled from '../../images/settings-icon-gray.svg';

type TTableHeaderProps = {
  areCandidatesFound: boolean,
}
export const TableHeader = ({ areCandidatesFound }: TTableHeaderProps): ReactElement => {

  return (
      <div className={styles.header}>
        <div>
          <h1 className={styles.header__text}>Список кандидатов</h1>
          <span className={styles.subheader__text}>100 профилей найдено</span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} disabled={!areCandidatesFound}>
            <img src={areCandidatesFound && editIcon || editIconDisabled} className={styles.button__icon} alt={'Отобразить список'} />
            Отображение списка
          </button>
          <button className={styles.button} disabled={!areCandidatesFound}>
            <img src={areCandidatesFound && settingsIcon || settingsIconDisabled} className={styles.button__icon} alt={'Отобразить список'} />
            Фильтры
          </button>
        </div>
      </div>
  )
}
