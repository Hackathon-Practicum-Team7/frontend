import styles from "../filter.module.css";
import {ReactElement, useEffect} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import * as React from "react";
import {ClearFilters} from "../../clear-filters/clear-filters";

export const SkillsFilter = ({onChange}: {onChange: (event: { target: { value: string[] } }) => void}): ReactElement => {
  const skills = [
    'HTML',
    'CSS',
    'Figma',
    'JavaScript',
    'TypeScript',
    'Adobe Photoshop',
  ];
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  function onClearClick() {
    setSelectedSkills([])
  }
  useEffect(() => {
    onChange({target: {value: selectedSkills}});
  }, [selectedSkills]);

  return (
    <>
      <div className={styles.filter__container}>
        <p className={styles.filter__header}>Профессиональные навыки</p>
        { (selectedSkills.length > 0) && (<ClearFilters onClick={onClearClick}>Очистить фильтр</ClearFilters>) }
      </div>
      <InputWithChip
        filterOptions={skills}
        onClearClick={onClearClick}
        input={selectedSkills}
        setInput={setSelectedSkills}
        placeholderText={'Выберите навыки'}
      />
    </>
  )
}
