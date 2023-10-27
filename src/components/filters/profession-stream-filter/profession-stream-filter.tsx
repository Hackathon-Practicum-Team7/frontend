import styles from "../filter.module.css";
import {CustomButton} from "../../custom-button/custom-button";
import {ReactElement, useEffect} from "react";
import * as React from "react";
import deleteIcon from "../../../images/delete-icon.svg";

type TProfessionStreamFilterProps = {
  onChange: (event: { target: { value: string } }) => void,
  setStreamChosen: (value: boolean) => void,
}

export const ProfessionStreamFilter = ({onChange, setStreamChosen}: TProfessionStreamFilterProps): ReactElement => {
  const professionStreams = [
    'Программирование',
    'Дизайн',
    'Маркетинг',
    'Анализ данных',
    'Менеджмент',
  ];
  const [selectedProfessionStream, setSelectedProfessionStream] = React.useState<string>('');

  useEffect(() => {
    onChange({target: {value: selectedProfessionStream}});
  }, [selectedProfessionStream]);
  function onClearClick() {
    setSelectedProfessionStream('');
    setStreamChosen(false);
  }

  function handleClick(value: string) {
    if (selectedProfessionStream === value) {
      setSelectedProfessionStream('');
      setStreamChosen(false);
    } else {
      setSelectedProfessionStream(value);
      setStreamChosen(true);
    }
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filter__container}>
        <p className={styles.filter__header}><span className={`${styles.filter__header} ${styles.filter__span}`}>*</span> Направление</p>
        {(selectedProfessionStream) && (
          <div className={styles.delete} onClick={onClearClick}>
            <img className={styles.delete__icon} src={deleteIcon} alt="Очистить фильтры"/>
            <p className={styles.delete__text}>Очистить фильтры</p>
          </div>
        )}
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
