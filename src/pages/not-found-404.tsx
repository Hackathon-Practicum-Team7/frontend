import {FunctionComponent} from 'react';
import {ExtraPagesContainer} from '../components/extra-pages-container/extra-pages-container';

export const NotFound404: FunctionComponent = () => {
  return (
    <ExtraPagesContainer type="not-found"
                         title="Ошибка 404"
                         subtitle="Эта страница за пределами Вселенной"
                         firstParagraph="Страница, которую вы пытаетесь найти, не существует или была перемещена."
                         secondParagraph="Попробуйте вернуться назад"
    />
  )
}
