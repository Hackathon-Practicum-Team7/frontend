import styles from "./home.module.css";
import {ReactElement} from "react";
import {CustomButton} from "../components/custom-button/custom-button";

export const HomePage = (): ReactElement => {

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Найти специалиста</h1>
      <span className={`${styles.filter__header} ${styles.filter__span}`}>* — обязательное поле</span>
      <div className={styles.grid}>
        <div className={styles.filter}>
          <p className={styles.filter__header}><span className={`${styles.filter__header} ${styles.filter__span}`}>*</span> Направление</p>
          <div className={styles.professions}>
            <CustomButton customType='customFilterActive' extraStyles='filterButton'>Программирование</CustomButton>
            <CustomButton customType='customFilter' extraStyles='filterButton'>Дизайн</CustomButton>
            <CustomButton customType='customFilter' extraStyles='filterButton'>Маркетинг</CustomButton>
            <CustomButton customType='customFilter' extraStyles='filterButton'>Анализ данных</CustomButton>
            <CustomButton customType='customFilter' extraStyles='filterButton'>Менеджмент</CustomButton>
          </div>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}><span className={`${styles.filter__header} ${styles.filter__span}`}>*</span> Специализация</p>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}>Профессиональные навыки</p>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}>Местоположение</p>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}>Условия работы</p>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}>Тип занятости</p>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}>Портфолио</p>
        </div>
        <div className={styles.filter}>
          <p className={styles.filter__header}>Квалификация</p>
        </div>
      </div>
      <div className={styles.buttons__container}>
        <CustomButton customType='customContained'>Найти</CustomButton>
        <CustomButton customType='customOutlined'>Сбросить все</CustomButton>
      </div>
    </section>

  )
}
