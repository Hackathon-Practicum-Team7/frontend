import styles from "../filter.module.css";
import {ReactElement, useEffect} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import deleteIcon from '../../../images/delete-icon.svg';
import * as React from "react";

export const LocationFilter = ({onChange}: {onChange: (event: { target: { value: string[] } }) => void}): ReactElement => {
  const locations = [
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Пермь',
    'Ярославль',
    'Орел',
  ];
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>([]);
  function onClearClick() {
    setSelectedLocations([])
  }
  useEffect(() => {
    onChange({target: {value: selectedLocations}});
  }, [selectedLocations]);

  return (
    <>
      <div className={styles.filter__container}>
        <p className={styles.filter__header}>Местоположение</p>
        { (selectedLocations.length > 0) && (
          <div className={styles.delete} onClick={onClearClick}>
            <img className={styles.delete__icon} src={deleteIcon} alt="Очистить фильтры"/>
            <p className={styles.delete__text}>Очистить фильтры</p>
          </div>
        )
        }
      </div>
      <InputWithChip filterOptions={locations} onClearClick={onClearClick} input={selectedLocations} setInput={setSelectedLocations} />
    </>
  )
}
