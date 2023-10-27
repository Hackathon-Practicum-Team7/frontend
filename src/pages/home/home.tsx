import styles from "./home.module.css";
import {ReactElement, useState} from "react";
import {CustomButton} from "../../components/custom-button/custom-button";
import {SelectInput} from "../../components/select-input/select-input";
import {filterOptions} from "../../utils/constants";
import {SkillsFilter} from "../../components/filters/skills-filter/skills-filter";
import { useForm, Controller } from "react-hook-form";
import {LocationFilter} from "../../components/filters/location-filter/location-filter";
import {ProfessionStreamFilter} from "../../components/filters/profession-stream-filter/profession-stream-filter";
import {ProfessionFilter} from "../../components/filters/profession-filter/profession-filter";

interface IFormInput {
  professionStream: string;
  professions: string[];
  skills: string[];
  locations: string[];
  workingConditions: string[];
  employmentType: string[];
  hasPortfolio: string[];
  grade: string[];
}

export const HomePage = (): ReactElement => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log(JSON.stringify(data));
  };
  const [ isStreamChosen, setStreamChosen ] = useState<boolean>(false);
  const [ isProfessionChosen, setProfessionChosen ] = useState<boolean>(false);

  const isSubmitButtonEnabled = isStreamChosen && isProfessionChosen;

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Найти специалиста</h1>
      <span className={`${styles.filter__header} ${styles.filter__span}`}>* — обязательное поле</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.grid}>
          <Controller
            render={({ field }) => {
              return (
                <ProfessionStreamFilter
                onChange={field.onChange}
                setStreamChosen={setStreamChosen}
                />
              );
            }}
            name="professionStream"
            control={control}
            defaultValue={""}
          />
          <Controller
            render={({ field }) => {
              return (
                <ProfessionFilter
                  onChange={field.onChange}
                  isStreamChosen={isStreamChosen}
                  setProfessionChosen={setProfessionChosen}
                />
              );
            }}
            name="professions"
            control={control}
            defaultValue={[]}
          />
          <div className={styles.filter}>
            <Controller
              render={({ field }) => {
                return <SkillsFilter onChange={field.onChange} />;
              }}
              name="skills"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <Controller
              render={({ field }) => {
                return <LocationFilter onChange={field.onChange} />;
              }}
              name="locations"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.filter__header}>Условия работы</p>
            <Controller
              render={({ field }) => {
                return <SelectInput filterOptions={filterOptions.workingConditions} onChange={field.onChange}/>;
              }}
              name="workingConditions"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.filter__header}>Тип занятости</p>
            <Controller
              render={({ field }) => {
                return <SelectInput filterOptions={filterOptions.employmentTypes} onChange={field.onChange}/>;
              }}
              name="workingConditions"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.filter__header}>Портфолио</p>
            <Controller
              render={({ field }) => {
                return <SelectInput filterOptions={filterOptions.hasPortfolio} onChange={field.onChange}/>;
              }}
              name="workingConditions"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.filter__header}>Квалификация</p>
            <Controller
              render={({ field }) => {
                return <SelectInput filterOptions={filterOptions.grade} onChange={field.onChange}/>;
              }}
              name="workingConditions"
              control={control}
              defaultValue={[]}
            />
          </div>
        </div>
        <div className={styles.buttons__container}>
          <CustomButton customType='customContained' type='submit' disabled={!isSubmitButtonEnabled}>Найти</CustomButton>
          <CustomButton customType='customOutlined' type='reset'>Сбросить все</CustomButton>
        </div>
      </form>
    </section>

  )
}
