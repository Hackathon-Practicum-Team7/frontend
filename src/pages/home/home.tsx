import styles from "./home.module.css";
import {ReactElement, useEffect, useMemo} from "react";
import {CustomButton} from "../../components/custom-button/custom-button";
import {SelectInput} from "../../components/select-input/select-input";
import {filterOptions} from "../../utils/constants/constants";
import {SkillsFilter} from "../../components/filters/skills-filter/skills-filter";
import { useForm, Controller } from "react-hook-form";
import {LocationFilter} from "../../components/filters/location-filter/location-filter";
import {ProfessionStreamFilter} from "../../components/filters/profession-stream-filter/profession-stream-filter";
import {ProfessionFilter} from "../../components/filters/profession-filter/profession-filter";
import {IFormInput} from "../../utils/types";
import {useSelector} from "../../services/hooks/use-selector";
import loginStyles from '../login/login.module.css';

import {useLocation} from 'react-router-dom';

export const HomePage = (): ReactElement => {
  const { control, handleSubmit, reset, watch } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput | undefined) => {
    console.log(JSON.stringify(data));
  };
  const professionStream = watch("professionStream", "");
  const professions = watch("professions", []);

  const isStreamChosen = (professionStream !== '');
  const isSubmitButtonEnabled = (professionStream !== '') && (professions.length > 0);

  const filters = useSelector(state => state.getFiltersState);
  const professionByStreams = useMemo(() => {
    return filters.professionStreams.reduce((professionsMap, professionStream) => {
      professionsMap.set(professionStream.title, professionStream.professions.map(profession => profession.title));
      return professionsMap;
    }, new Map<string, string[]>());
  }, [filters]);

  const professionOptions = useMemo(() => professionByStreams.get(professionStream) || [], [professionStream]);

  const {pathname} = useLocation();
  useEffect( () => {
    const main = document.getElementsByTagName("main");
    if (pathname !== 'login' && main[0].classList.contains(loginStyles['main-login-page'])) {
      main[0].classList.remove(loginStyles['main-login-page']);
    }
  }, [pathname])

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
                value={field.value}
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
                  value={field.value}
                  isStreamChosen={isStreamChosen}
                  professions={professionOptions}
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
                return <SkillsFilter onChange={field.onChange} value={field.value}/>;
              }}
              name="skills"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <Controller
              render={({ field }) => {
                return <LocationFilter onChange={field.onChange} value={field.value}/>;
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
                return <SelectInput filterOptions={filterOptions.workingConditions} onChange={field.onChange} value={field.value}/>;
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
                return <SelectInput filterOptions={filterOptions.employmentTypes} onChange={field.onChange} value={field.value}/>;
              }}
              name="employmentTypes"
              control={control}
              defaultValue={[]}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.filter__header}>Портфолио</p>
            <Controller
              render={({ field }) => {
                return <SelectInput filterOptions={filterOptions.hasPortfolio} onChange={field.onChange} value={field.value} isMulti={false}/>;
              }}
              name="hasPortfolio"
              control={control}
              defaultValue={''}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.filter__header}>Квалификация</p>
            <Controller
              render={({ field }) => {
                return <SelectInput filterOptions={filterOptions.grade} onChange={field.onChange} value={field.value}/>;
              }}
              name="grade"
              control={control}
              defaultValue={[]}
            />
          </div>
        </div>
        <div className={styles.buttons__container}>
          <CustomButton customType='customContained' type='submit' disabled={!isSubmitButtonEnabled}>Найти</CustomButton>
          <CustomButton customType='customOutlined' type='button' onClick={reset}>Сбросить все</CustomButton>
        </div>
      </form>
    </section>

  )
}
