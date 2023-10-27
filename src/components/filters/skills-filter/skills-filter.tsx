import styles from "../filter.module.css";
import {ReactElement, useEffect} from "react";
import {InputWithChip} from "../../input-with-chip/input-with-chip";
import deleteIcon from '../../../images/delete-icon.svg';
import * as React from "react";

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
        { (selectedSkills.length > 0) && (
          <div className={styles.delete} onClick={onClearClick}>
            <img className={styles.delete__icon} src={deleteIcon} alt="Очистить фильтры"/>
            <p className={styles.delete__text}>Очистить фильтры</p>
          </div>
          )
        }
      </div>
      <InputWithChip filterOptions={skills} onClearClick={onClearClick} input={selectedSkills} setInput={setSelectedSkills} />
    </>
  )
}
