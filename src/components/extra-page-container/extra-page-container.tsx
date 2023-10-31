import {FunctionComponent} from 'react';

import extraPagesStyles from './extra-page-container.module.css';

import {CustomButton} from '../custom-button/custom-button';
import {useNavigate} from 'react-router-dom';

import {TExtraPage} from '../../utils/types';

export const ExtraPageContainer: FunctionComponent<TExtraPage> = (props) => {
  const navigate = useNavigate();

  return (
    <section className={props.type === 'in-progress'
      ? `${extraPagesStyles.section} ${extraPagesStyles['section_in-progress']}`
      : `${extraPagesStyles.section} ${extraPagesStyles['section_not-found']}`}>
      <div className={extraPagesStyles['info-area']}>
        <h2 className={`${extraPagesStyles.text} ${extraPagesStyles['text_title']}`}>{props.title}</h2>
        <p className={`${extraPagesStyles.text} ${extraPagesStyles['text_subtitle']}`}>{props.subtitle}</p>
        <div className={extraPagesStyles['info-area__text-wrap']}>
          <p className={`${extraPagesStyles.text} ${extraPagesStyles['text_paragraph']}`}>{props.firstParagraph}</p>
          <p className={`${extraPagesStyles.text} ${extraPagesStyles['text_paragraph']}`}>{props.secondParagraph}</p>
        </div>
        <CustomButton onClick={() => navigate(-1)} customType={"customContained"}>Вернуться назад</CustomButton>
      </div>
    </section>
  )
}
