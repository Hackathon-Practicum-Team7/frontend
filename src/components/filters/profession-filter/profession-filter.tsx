import styles from "../filter.module.css";
import {CustomButton} from "../../custom-button/custom-button";
import {ReactElement, useEffect} from "react";
import * as React from "react";
import deleteIcon from "../../../images/delete-icon.svg";

type TProfessionFilterProps = {
  onChange: (event: { target: { value: string[] } }) => void,
  isStreamChosen: boolean,
  setProfessionChosen: (value: boolean) => void,
}

export const ProfessionFilter = ({onChange, isStreamChosen, setProfessionChosen}: TProfessionFilterProps): ReactElement => {
  const professions = [
    'Разработчик 1',
    'Разработчик 2',
    'Разработчик 3',
    'Разработчик 4',
  ];
  const [selectedProfessions, setSelectedProfessions] = React.useState<string[]>([]);
  useEffect(() => {
    onChange({target: {value: selectedProfessions}});
  }, [selectedProfessions]);
  function onClearClick() {
    setSelectedProfessions([]);
    setProfessionChosen(false);
  }

  function handleClick(value: string) {
    if (selectedProfessions.includes(value)) {
      const newValueArr = selectedProfessions.filter(profession =>  profession !== value);
      setSelectedProfessions(newValueArr);
      if (newValueArr.length > 0) {
        setProfessionChosen(true);
      } else {
        setProfessionChosen(false);
      }
    } else {
      setSelectedProfessions(current => [...current, value]);
      setProfessionChosen(true);
    }
  }

  return (
    <div className={styles.filter}>
      { isStreamChosen ? (
        <>
          <div className={styles.filter__container}>
            <p className={styles.filter__header}><span className={`${styles.filter__header} ${styles.filter__span}`}>*</span> Специализация</p>
            {(selectedProfessions && selectedProfessions.length > 0) && (
              <div className={styles.delete} onClick={onClearClick}>
                <img className={styles.delete__icon} src={deleteIcon} alt="Очистить фильтры"/>
                <p className={styles.delete__text}>Очистить фильтры</p>
              </div>
            )}
          </div>
          <div className={styles.professions}>
            { professions.map((profession) => {
              return (
                <CustomButton
                  key={profession}
                  customType={selectedProfessions.includes(profession) ? 'customFilterActive' : 'customFilter'}
                  extraStyles='filterButton'
                  onClick={() => handleClick(profession)}
                >
                  {profession}
                </CustomButton>
              )
            })
            }
          </div>
        </>
        ) : (
          <>
            <p className={`${styles.filter__header} ${styles.filter__header_inactive}`}>Специализация</p>
            <p className={styles.text_inactive}>Вам нужно выбрать направление</p>
          </>
        )}
    </div>
  )
}
