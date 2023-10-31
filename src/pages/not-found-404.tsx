import {FunctionComponent} from 'react';
import {ExtraPageContainer} from '../components/extra-page-container/extra-page-container';

export const NotFound404: FunctionComponent = () => {
  return (
    <ExtraPageContainer type="not-found"
                         title="Ошибка 404"
                         subtitle="Эта страница за пределами Вселенной"
                         firstParagraph="Страница, которую вы пытаетесь найти, не существует или была перемещена."
                         secondParagraph="Попробуйте вернуться назад"
    />
  )
}
