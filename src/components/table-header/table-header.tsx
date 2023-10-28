import React, {ReactElement, useEffect, useState} from "react";

import styles from "./table-header.module.css";
import overlayStyles from '../overlay/overlay.module.css';

import editIcon from '../../images/edit-icon.svg';
import editIconDisabled from '../../images/edit-icon-gray.svg';
import settingsIcon from '../../images/settings-icon.svg';
import settingsIconDisabled from '../../images/settings-icon-gray.svg';
import settingsIcon from '../../images/settings-icon-blue.svg'

import {Navigation} from '../navigation/navigation';
import {DropDown} from '../drop-down/drop-down';
import {SideFilters} from '../side-filters/side-filters';


type TTableHeaderProps = {
  areCandidatesFound: boolean,
}
export const TableHeader = ({ areCandidatesFound }: TTableHeaderProps): ReactElement => {
  const [filtersAreOpen, setFiltersAreOpen] = useState<boolean>(false);

  const handleShowFilters = () => {
    setFiltersAreOpen(!filtersAreOpen);
  }

  useEffect(() => {
    if (filtersAreOpen) {
      document.body.classList.add(overlayStyles['body-overlay']);
    } else {
      document.body.classList.remove(overlayStyles['body-overlay']);
    }
  }, [filtersAreOpen])

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
          <DropDown type="filters" onClose={handleShowFilters} isOpen={filtersAreOpen}>
            <SideFilters/>
          </DropDown>
        </div>
      </div>
  )
}
