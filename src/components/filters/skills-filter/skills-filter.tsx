import styles from "../filter.module.css";
import {ReactElement} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import {ClearFilters} from "../../clear-filters/clear-filters";

export const SkillsFilter = ({onChange, value}: {onChange: (event: { target: { value: string[] } }) => void, value: string[]}): ReactElement => {
  const skills = [
    'Маркетинговая аналитика',
    'Unit-экономика',
    'Email-маркетинг',
    'JavaScript',
    'Performance маркетинг',
    'Adobe Photoshop',
    'SQL',
    'PySpark',
    'Python',
    'Keras',
    'Catboost',
    'Scikit-learn',
    'Pytorch',
    'UX',
    'CSS',
    'HTML'
];

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
