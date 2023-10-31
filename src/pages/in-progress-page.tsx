import React from 'react';
import {ExtraPageContainer} from '../components/extra-page-container/extra-page-container';

export const InProgressPage: React.FC = () => {

  return (
    <ExtraPageContainer type="in-progress"
                        title="Кажется, слишком рано..."
                        subtitle="Раздел находится в разработке"
                        firstParagraph="Обновление займет некоторое время, но не переживайте: совсем скоро все будет работать."
                        secondParagraph="Приносим извинения и ждем вас позже!"/>
  )
}
