import styles from "../filter.module.css";
import {ReactElement, useEffect} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import * as React from "react";
import {ClearFilters} from "../../clear-filters/clear-filters";

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
