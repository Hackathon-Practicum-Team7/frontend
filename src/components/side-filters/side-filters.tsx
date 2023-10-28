import {FunctionComponent} from 'react';

import sideFiltersStyles from './side-filters.module.css';
import filtersIcon from '../../images/settings-icon-white.svg';
import {MenuItem} from '../menu-item/menu-item';

export const SideFilters: FunctionComponent = () => {
  return (
    <div className={sideFiltersStyles.filters}>
      <div className={sideFiltersStyles['filters__header']}>
        <div className={sideFiltersStyles['filters__heading-wrap']}>
          <img src={filtersIcon} alt="Иконка фильтров" className={sideFiltersStyles['filters__header-icon']}/>
          <h2 className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_header']}`}>Фильтры</h2>
        </div>
        <MenuItem itemName="Сбросить все фильтры" onClick={() => console.log('hi there!')}/>
      </div>
    </div>
  )
}
