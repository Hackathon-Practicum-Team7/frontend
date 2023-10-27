import {CustomButton} from "../custom-button/custom-button";
import styles from './results-not-found.module.css'
import {useNavigate} from "react-router-dom";

export default function ResultsNotFound() {

  const navigate = useNavigate();
  function onClick() {
    navigate('/');
  }

  return (
    <div className={styles['no-results']}>
      <h2 className={styles['no-results__header']}>Кандидаты не найдены</h2>
      <p className={styles['no-results__text']}>Не удалось найти кандидатов по заданным параметрам. Попробуйте изменить условия поиска или обратитесь за помощью к менеджеру по подбору персонала</p>
      <CustomButton customType={'customOutlined'} width={236} onClick={onClick}>Вернуться к фильтрам</CustomButton>
    </div>
  )
}
