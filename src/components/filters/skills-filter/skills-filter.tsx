import styles from "../filter.module.css";
import {ReactElement, useMemo, useState} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import {ClearFilters} from "../../clear-filters/clear-filters";
import {useSelector} from "../../../services/hooks/use-selector";
import { ModalSkills } from "../../modalSkills/modalSkills";

export const SkillsFilter = ({onChange, value, withShowAll = true}: {onChange: (event: { target: { value: string[] } }) => void, value: string[], withShowAll?: boolean}): ReactElement => {
  const filters = useSelector(state => state.getFiltersState);
  const skills = useMemo(() => filters.skills.map(filter => filter.title), [filters]);

  const [showSkillsModal, setShowSkillsModal] = useState<boolean>(false);

  const selectedSkills = value;
  const setSelectedSkills = (newValue: string[]) => {
    onChange({target: {value: newValue}});
  }
  function onClearClick() {
    setSelectedSkills([])
  }

  return (
    <>
      <div className={styles.filter__container}>
        <p className={styles.filter__header}>Профессиональные навыки</p>
        { (selectedSkills.length > 0) && (<ClearFilters onClick={onClearClick} color="#000">Очистить фильтр</ClearFilters>) }
      </div>
      <InputWithChip
        filterOptions={skills}
        onClearClick={onClearClick}
        input={selectedSkills}
        setInput={setSelectedSkills}
        placeholderText={'Выберите навыки'}
        withShowAll={withShowAll}
        onShowAll={() => setShowSkillsModal(true)}
      />

      {showSkillsModal && (
        <ModalSkills
          value={skills}
          onChange={setSelectedSkills}
          onClose={() => setShowSkillsModal(true) }
        />
      )}
    </>
  )
}
