import {ReactElement, useEffect, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import sideFiltersStyles from './side-filters.module.css';
import filtersIcon from '../../images/settings-icon-white.svg';
import {SelectInput} from '../select-input/select-input';
import {InputWithChip} from '../input-with-chip/input-with-chip';
import {ClearFilters} from '../clear-filters/clear-filters';
import {filterOptions} from '../../utils/constants/constants';
import {IFormInput} from '../../utils/types';
import {CustomButton} from '../custom-button/custom-button';
import {getStudents} from "../../services/async-thunk/get-students";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";
import {selectedFiltersSlice} from "../../services/slices/selected-filters";

export const SideFilters = ({setFiltersAreOpen} : {setFiltersAreOpen: (value: boolean) => void}): ReactElement => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(state => state.selectedFiltersState);
  const {control, handleSubmit, reset, watch, resetField, setValue} = useForm<IFormInput>();

  const professionStream = watch('professionStream', '');
  watch((_, { name }) => {
    if (name === "professionStream")
      resetField("professions");
  });
  const professions = watch('professions', []);
  const grades = watch('grade', []);
  const skills = watch('skills', []);
  const hasPortfolio = watch('hasPortfolio', '');
  const workingConditions = watch('workingConditions', []);
  const employmentTypes = watch('employmentTypes', []);

  const filters = useSelector(state => state.getFiltersState);

  const professionStreams = useMemo(() => filters.professionStreams.map(filter => filter.title), [filters]);
  const skillsOptions = useMemo(() => filters.skills.map(filter => filter.title), [filters]);

  const professionByStreams = useMemo(() => {
    return filters.professionStreams.reduce((professionsMap, professionStream) => {
      professionsMap.set(professionStream.title, professionStream.professions.map(profession => profession.title));
      return professionsMap;
    }, new Map<string, string[]>());
  }, [filters]);

  const professionOptions = useMemo(() => professionByStreams.get(professionStream) || [], [professionStream]);
  const onSubmit = (data: IFormInput) => {
    const queryParams = data;
    if (queryParams.hasPortfolio[0] === 'Указано') {
      queryParams.hasPortfolio = 'True'
    }
    for (const option in queryParams) {
      if (queryParams[option].length > 0 && queryParams[option][0] !== 'Не имеет значения') {
        continue;
      }
      delete queryParams[option];
    }
    dispatch(selectedFiltersSlice.actions.setSelectedFilters(queryParams));
    dispatch(getStudents(queryParams));
    setFiltersAreOpen(false);
  };

  useEffect(() => {
    Object.entries(selectedFilters).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [selectedFilters]);

  const handleIsAnyFilterSet = () => {
    return hasPortfolio.length > 0
          || professions.length > 0
          || workingConditions.length > 0
          || grades.length > 0
          || skills.length > 0
          || employmentTypes.length > 0;
  }

  const onClearClick = (input: string) => {
    resetField(input)
  }

  return (
    <div className={sideFiltersStyles.filters}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={sideFiltersStyles['filters__header']}>
          <div className={sideFiltersStyles['filters__heading-wrap']}>
            <img src={filtersIcon} alt="Иконка фильтров" className={sideFiltersStyles['filters__header-icon']}/>
            <h2 className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_header']}`}>Фильтры</h2>
          </div>
          <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
            <ClearFilters color="white" onClick={() => { reset() }}>Сбросить все фильтры</ClearFilters>
          </div>
        </div>
        <div className={sideFiltersStyles['filters__filters-area']}>
          <div>
            <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Направление</p>
            <Controller
              render={({field}) => {
                return <SelectInput filterOptions={professionStreams}
                                    onChange={field.onChange}
                                    value={field.value}
                                    width={'100%'}
                                    isMulti={false}
                />;
              }}
              name="professionStream"
              control={control}
              defaultValue={""}
            />
          </div>
          <div>
            <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Специализация</p>
            <Controller
              render={({field}) => {
                return <InputWithChip filterOptions={professionOptions}
                                      input={field.value}
                                      setInput={field.onChange}
                                      placeholderText={'Выберите из списка'}
                                      width={'100%'}
                                      chipVariant='gray'
                />;
              }}
              name="professions"
              control={control}
              defaultValue={[]}
            />
          </div>
          {
            (professions.length > 0) &&
            <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
              <ClearFilters color="white" onClick={() => onClearClick('professions')}>Очистить фильтр</ClearFilters>
            </div>
          }
          <div>
            <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Квалификация</p>
            <Controller
              render={({field}) => {
                return <InputWithChip filterOptions={filterOptions.grade}
                                      placeholderText={'Выберите из списка'}
                                      width={'100%'}
                                      chipVariant='gray'
                                      input={field.value}
                                      setInput={field.onChange}
                />;
              }}
              name="grade"
              control={control}
              defaultValue={[]}
            />
          </div>
          {
            (grades.length > 0) &&
            <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
              <ClearFilters color="white" onClick={() => onClearClick('grade')}>Очистить фильтр</ClearFilters>
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
              name="hasPortfolio"
              control={control}
              defaultValue={""}
            />
          </div>
          <div>
            <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Профессиональные навыки</p>
            <Controller
              render={({field}) => {
                return <InputWithChip filterOptions={skillsOptions}
                                      placeholderText={'Выберите из списка'}
                                      width={'100%'}
                                      chipVariant='gray'
                                      input={field.value}
                                      setInput={field.onChange}
                />;
              }}
              name="skills"
              control={control}
              defaultValue={[]}
            />
          </div>
          {
            (skills.length > 0) &&
            <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
              <ClearFilters color="white" onClick={() => onClearClick('skills')}>Очистить фильтр</ClearFilters>
            </div>
          }

          <span className={sideFiltersStyles.decor}></span>

          <div>
            <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Условия работы</p>
            <Controller
              render={({field}) => {
                return <InputWithChip filterOptions={filterOptions.workingConditions}
                                      placeholderText={'Выберите из списка'}
                                      width={'100%'}
                                      input={field.value}
                                      setInput={field.onChange}
                                      chipVariant='gray'
                />;
              }}
              name="workingConditions"
              control={control}
              defaultValue={[]}
            />
          </div>
          {
            (workingConditions.length > 0) &&
            <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
              <ClearFilters color="white" onClick={() => onClearClick('workingConditions')}>Очистить фильтр</ClearFilters>
            </div>
          }
          <div>
            <p className={`${sideFiltersStyles.text} ${sideFiltersStyles['text_common']}`}>Тип занятости</p>
            <Controller
              render={({field}) => {
                return <InputWithChip filterOptions={filterOptions.employmentTypes}
                                      placeholderText={'Выберите из списка'}
                                      width={'100%'}
                                      chipVariant='gray'
                                      input={field.value}
                                      setInput={field.onChange}
                />;
              }}
              name="employmentTypes"
              control={control}
              defaultValue={[]}
            />
          </div>
          {
            (employmentTypes.length > 0) &&
            <div className={sideFiltersStyles['filters__clear-filters-wrap']}>
              <ClearFilters color="white" onClick={() => onClearClick('employmentTypes')}>Очистить фильтр</ClearFilters>
            </div>
          }
          {
            handleIsAnyFilterSet() &&
            <div className={sideFiltersStyles['filters__buttons-wrap']}>
              <CustomButton width="100%" customType="customContained" extraStyles="filterButton"
                             type="submit">
                Применить фильтры
              </CustomButton>
              <CustomButton width="100%" customType="customOutlinedFilter" extraStyles="filterButton"
                            onClick={() => console.log('hi')} type="submit">
                Создать вакансию на основе фильтров
              </CustomButton>
            </div>
          }
        </div>
      </form>
    </div>
  )
}
