import {FunctionComponent, useEffect} from 'react';

import sideFiltersStyles from './side-filters.module.css';
import filtersIcon from '../../images/settings-icon-white.svg';
import {MenuItem} from '../menu-item/menu-item';
import {ProfessionFilter} from '../filters/profession-filter/profession-filter';
import {ProfessionStreamFilter} from '../filters/profession-stream-filter/profession-stream-filter';
import {SelectInput} from '../select-input/select-input';
import {filterOptions} from '../../utils/constants/constants';
import {InputWithChip} from '../input-with-chip/input-with-chip';
import * as React from 'react';

export const SideFilters: FunctionComponent = () => {
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);

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
        <MenuItem itemName="Сбросить все фильтры" onClick={() => console.log('hi there!')}/>
      </div>
      <div className={sideFiltersStyles['filters__filters-area']}>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Направление</p>
          <SelectInput filterOptions={filterOptions.profession} width={'100%'} isMulti={false}/>
        </div>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Специализация</p>
          <SelectInput filterOptions={['Выберите из списка', '1', '2']} width={'100%'} isMulti={false}/>
        </div>
        <div>
          <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Квалификация</p>
          <InputWithChip filterOptions={filterOptions.grade}
                         onClearClick={onClearClick}
                         input={selectedSkills}
                         setInput={setSelectedSkills}
                         placeholderText={'Выберите из списка'}
                         width={'100%'}
                         chipVariant='gray'
          />
        </div>
        <span className={sideFiltersStyles.decor}></span>

      </div>
    </div>
  )
}
