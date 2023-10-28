import {FunctionComponent, useState} from 'react';

import sideFiltersStyles from './side-filters.module.css';
import filtersIcon from '../../images/settings-icon-white.svg';
import {SelectInput} from '../select-input/select-input';
import {filterOptions} from '../../utils/constants/constants';
import {InputWithChip} from '../input-with-chip/input-with-chip';
import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {IFormInput} from '../../utils/types';
import {LocationFilter} from '../filters/location-filter/location-filter';
import {ClearFilters} from '../clear-filters/clear-filters';

export const SideFilters: FunctionComponent = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const {control, handleSubmit, reset, watch} = useForm<IFormInput>();

  function onClearClick() {
    setSelectedSkills([])
  }

  return (
    <div className={sideFiltersStyles.filters}>
      <div className={sideFiltersStyles['filters__header']}>
        <div className={sideFiltersStyles['filters__heading-wrap']}>
          <img src={filtersIcon} alt="Иконка фильтров" className={sideFiltersStyles['filters__header-icon']}/>
          <h2 className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_header']}`}>Фильтры</h2>
        </div>
        <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
          <ClearFilters color="white" onClick={onClearClick}>Сбросить все фильтры</ClearFilters>
        </div>
      </div>
      <div className={sideFiltersStyles['filters__filters-area']}>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Направление</p>
          <Controller
            render={({field}) => {
              return <SelectInput filterOptions={filterOptions.profession} onChange={field.onChange} value={field.value}
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
                                    onClearClick={onClearClick}
                                    input={selectedSkills}
                                    setInput={setSelectedSkills}
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
          (selectedSkills.length !== 0) &&
          <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
            <ClearFilters color="white" onClick={onClearClick}>Очистить фильтр</ClearFilters>
          </div>
        }
        <span className={sideFiltersStyles.decor}></span>

      </div>
    </div>
  )
}
