import styles from "../filter.module.css";
import {CustomButton} from "../../custom-button/custom-button";
import {ReactElement, useMemo} from "react";
import {ClearFilters} from "../../clear-filters/clear-filters";
import {useSelector} from "../../../services/hooks/use-selector";

type TProfessionStreamFilterProps = {
  onChange: (event: { target: { value: string } }) => void,
  value: string;
}

export const ProfessionStreamFilter = ({onChange, value}: TProfessionStreamFilterProps): ReactElement => {
  const filters = useSelector(state => state.getFiltersState);
  const professionStreams = useMemo(() => filters.professionStreams.map(filter => filter.title), [filters]);

  const selectedProfessionStream = value;
  const setSelectedProfessionStream = (newValue: string) => {
    onChange({target: {value: newValue}});
  }

  function onClearClick() {
    setSelectedProfessionStream('');
  }

  function handleClick(value: string) {
    if (selectedProfessionStream === value) {
      setSelectedProfessionStream('');
    } else {
      setSelectedProfessionStream(value);
    }
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filter__container}>
        <p className={styles.filter__header}><span className={`${styles.filter__header} ${styles.filter__span}`}>*</span> Направление</p>
        {(selectedProfessionStream) && (<ClearFilters color="gray" onClick={onClearClick}>Очистить фильтр</ClearFilters>) }
      </div>
      <div className={styles.professions}>
        { professionStreams.map((stream) => {
          return (
            <CustomButton
            key={stream}
            customType={ (selectedProfessionStream === stream) ? 'customFilterActive' : 'customFilter' }
            extraStyles='filterButton'
            onClick={() => handleClick(stream)}
          >
            {stream}
            </CustomButton>
            )
          })
        }
      </div>
    </div>
  )
}
