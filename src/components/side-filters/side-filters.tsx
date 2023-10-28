import {FunctionComponent, useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

import sideFiltersStyles from './side-filters.module.css';
import filtersIcon from '../../images/settings-icon-white.svg';

import {SelectInput} from '../select-input/select-input';
import {InputWithChip} from '../input-with-chip/input-with-chip';
import {ClearFilters} from '../clear-filters/clear-filters';

import {filterOptions} from '../../utils/constants/constants';
import {IFormInput} from '../../utils/types';
import {CustomButton} from '../custom-button/custom-button';

export const SideFilters: FunctionComponent = () => {
  const [selectedQualification, setSelectedQualification] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);

  const {control, handleSubmit, reset, watch, getValues} = useForm<IFormInput>();

  const allValues = watch(['professions', 'specialization', 'portfolio', 'workingCondition']);

  const handleIsAnyFilterSet = () => {
    console.log(allValues)
    return allValues.some(inputValue => inputValue?.length > 0)
      || selectedQualification.length > 0
      || selectedSkills.length > 0
      || employmentTypes.length > 0;
  }

  const onClearQualification = () => {
    setSelectedQualification([])
  }

  const onClearSkills = () => {
    setSelectedSkills([])
  }

  const onClearEmploymentTypes = () => {
    setEmploymentTypes([]);
  }

  const onClearAll = () => {
    onClearQualification();
    onClearSkills();
    onClearEmploymentTypes();
  }

  return (
    <div className={sideFiltersStyles.filters}>
      <div className={sideFiltersStyles['filters__header']}>
        <div className={sideFiltersStyles['filters__heading-wrap']}>
          <img src={filtersIcon} alt="Иконка фильтров" className={sideFiltersStyles['filters__header-icon']}/>
          <h2 className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_header']}`}>Фильтры</h2>
        </div>
        <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
          <ClearFilters color="white" onClick={() => {
            reset();
            onClearAll();
          }}>Сбросить все фильтры</ClearFilters>
        </div>
      </div>
      <div className={sideFiltersStyles['filters__filters-area']}>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Направление</p>
          <Controller
            render={({field}) => {
              return <SelectInput filterOptions={filterOptions.profession} onChange={field.onChange}
                                  value={field.value}
                                  width={'100%'} isMulti={false}/>;
            }}
            name="professions"
            control={control}
            defaultValue={""}
          />
        </div>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Специализация</p>
          <Controller
            render={({field}) => {
              return <SelectInput filterOptions={['Выберите из списка', '1', '2']} onChange={field.onChange}
                                  value={field.value}
                                  width={'100%'} isMulti={false}/>;
            }}
            name="specialization"
            control={control}
            defaultValue={""}
          />
        </div>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Квалификация</p>
          <Controller
            render={({field}) => {
              return <InputWithChip filterOptions={filterOptions.grade}
                                    onClearClick={onClearQualification}
                                    input={selectedQualification}
                                    setInput={setSelectedQualification}
                                    placeholderText={'Выберите из списка'}
                                    width={'100%'}
                                    chipVariant='gray'
                                    onChange={field.onChange}
                                    value={field.value}
              />;
            }}
            name="qualification"
            control={control}
            defaultValue={[]}
          />
        </div>
        {
          (selectedQualification.length !== 0) &&
          <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
            <ClearFilters color="white" onClick={onClearQualification}>Очистить фильтр</ClearFilters>
          </div>
        }

        <span className={sideFiltersStyles.decor}></span>

        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Портфолио</p>
          <Controller
            render={({field}) => {
              return <SelectInput filterOptions={filterOptions.hasPortfolio} onChange={field.onChange}
                                  value={field.value}
                                  width={'100%'} isMulti={false}/>;
            }}
            name="portfolio"
            control={control}
            defaultValue={""}
          />
        </div>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Профессиональные навыки</p>
          <Controller
            render={({field}) => {
              return <InputWithChip filterOptions={filterOptions.grade}
                                    onClearClick={onClearSkills}
                                    input={selectedSkills}
                                    setInput={setSelectedSkills}
                                    placeholderText={'Выберите из списка'}
                                    width={'100%'}
                                    chipVariant='gray'
                                    onChange={field.onChange}
                                    value={field.value}
              />;
            }}
            name="skills"
            control={control}
            defaultValue={[]}
          />
        </div>
        {
          (selectedSkills.length !== 0) &&
          <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
            <ClearFilters color="white" onClick={onClearSkills}>Очистить фильтр</ClearFilters>
          </div>
        }

        <span className={sideFiltersStyles.decor}></span>

        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Условия работы</p>
          <Controller
            render={({field}) => {
              return <SelectInput filterOptions={filterOptions.workingConditions} onChange={field.onChange}
                                  value={field.value}
                                  width={'100%'} isMulti={false}/>;
            }}
            name="workingCondition"
            control={control}
            defaultValue={""}
          />
        </div>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Тип занятости</p>
          <Controller
            render={({field}) => {
              return <InputWithChip filterOptions={filterOptions.employmentTypes}
                                    onClearClick={onClearEmploymentTypes}
                                    input={employmentTypes}
                                    setInput={setEmploymentTypes}
                                    placeholderText={'Выберите из списка'}
                                    width={'100%'}
                                    chipVariant='gray'
                                    onChange={field.onChange}
                                    value={field.value}
              />;
            }}
            name="employmentTypes"
            control={control}
            defaultValue={[]}
          />
        </div>
        {
          (employmentTypes.length !== 0) &&
          <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
            <ClearFilters color="white" onClick={onClearEmploymentTypes}>Очистить фильтр</ClearFilters>
          </div>
        }
        {
          handleIsAnyFilterSet() &&
          <div className={sideFiltersStyles['filters__buttons-wrap']}>
            <CustomButton width="100%" customType="customContained" extraStyles="filterButton"
                          onClick={() => console.log('hi')} type="submit">
              Применить фильтры
            </CustomButton>
            <CustomButton width="100%" customType="customOutlinedFilter" extraStyles="filterButton"
                          onClick={() => console.log('hi')} type="submit">
              Создать вакансию на основе фильтров
            </CustomButton>
          </div>
        }
      </div>
    </div>
  )
}
