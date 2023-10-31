import React from 'react';
import {ExtraPagesContainer} from '../components/extra-pages-container/extra-pages-container';

export const InProgressPage: React.FC = () => {

  return (
    <ExtraPagesContainer type="in-progress"
                         title="Кажется, слишком рано..."
                         subtitle="Раздел находится в разработке"
                         firstParagraph="Обновление займет некоторое время, но не переживайте: совсем скоро все будет работать."
                         secondParagraph="Приносим извинения и ждем вас позже!"/>
  )
}
