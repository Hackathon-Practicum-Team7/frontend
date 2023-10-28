import styles from "../filter.module.css";
import {ReactElement, useMemo} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import {ClearFilters} from "../../clear-filters/clear-filters";
import {useSelector} from "../../../services/hooks/use-selector";

export const LocationFilter = ({onChange, value}: {onChange: (event: { target: { value: string[] } }) => void, value: string[]}): ReactElement => {
  const filters = useSelector(state => state.getFiltersState);
  const cities = useMemo(() => filters.cities.map(filter => filter.title), [filters]);

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
        { (selectedLocations.length > 0) && (<ClearFilters color="gray" onClick={onClearClick}>Очистить фильтр</ClearFilters>) }
      </div>
      <InputWithChip
        filterOptions={cities}
        onClearClick={onClearClick}
        input={selectedLocations}
        setInput={setSelectedLocations}
        placeholderText={'Введите город, область'}
      />
    </>
  )
}
