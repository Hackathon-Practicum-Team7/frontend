import {ReactElement, useEffect, useState} from "react";
import styles from "./table-header.module.css";
import overlayStyles from '../overlay/overlay.module.css';
import editIcon from '../../images/edit-icon.svg';
import editIconDisabled from '../../images/edit-icon-gray.svg';
import settingsIconDisabled from '../../images/settings-icon-gray.svg';
import settingsIcon from '../../images/settings-icon-blue.svg'
import {DropDown} from '../drop-down/drop-down';
import {SideFilters} from '../side-filters/side-filters';


type TTableHeaderProps = {
  areCandidatesFound: boolean,
  resultsNumber: number
}
export const TableHeader = ({ areCandidatesFound, resultsNumber }: TTableHeaderProps): ReactElement => {
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

  function getResultsNumberPronounce(number: number) {
    if (number % 10 === 1 && number !== 11) return `${number} профиль найден`;
    if ((number % 10 >= 2 && number % 10 <=4) && (number !== 12 && number !== 13 && number !== 14)) return `${number} профиля найдено`;
    return `${number} профилей найдено`;
  }

  return (
      <div className={styles.header}>
        <div>
          <h1 className={styles.header__text}>Список кандидатов</h1>
          <span className={styles.subheader__text}>{getResultsNumberPronounce(resultsNumber)}</span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} disabled={!areCandidatesFound}>
            <img src={areCandidatesFound && editIcon || editIconDisabled} className={styles.button__icon} alt={'Отобразить список'} />
            Отображение списка
          </button>
          <button className={styles.button} disabled={!areCandidatesFound} onClick={handleShowFilters}>
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
