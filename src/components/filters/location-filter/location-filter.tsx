import styles from "../filter.module.css";
import {ReactElement} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import {ClearFilters} from "../../clear-filters/clear-filters";

export const LocationFilter = ({onChange, value}: {onChange: (event: { target: { value: string[] } }) => void, value: string[]}): ReactElement => {
  const locations = [
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Пермь',
    'Ярославль',
    'Орел',
  ];

  const selectedLocations = value;
  const setSelectedLocations = (newValue: string[]) => {
    onChange({target: {value: newValue}});
  }
  function onClearClick() {
    setSelectedLocations([])
  }

  return (
    <>
      <div className={styles.filter__container}>
        <p className={styles.filter__header}>Местоположение</p>
        { (selectedLocations.length > 0) && (<ClearFilters onClick={onClearClick}>Очистить фильтр</ClearFilters>) }
      </div>
      <InputWithChip
        filterOptions={locations}
        onClearClick={onClearClick}
        input={selectedLocations}
        setInput={setSelectedLocations}
        placeholderText={'Введите город, область'}
      />
    </>
  )
}
