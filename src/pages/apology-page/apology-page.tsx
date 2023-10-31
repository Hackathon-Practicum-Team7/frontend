import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/custom-button/custom-button"
import styles from './apology-page.module.css';

export const ApologyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.page}>
      <div className={styles.section}>

        <div className={styles.content}>
          <h1 className={styles.title}>Кажется слишком рано...</h1>
          <p className={styles.subtitle}>Раздел находится в разработке</p>
          <div className={styles.container}>
            <p className={styles.text}>Обновление займет некоторое время, но не переживайте - совсем скоро все будет работать.</p>
            <p className={styles.text}>Приносим извинения и ждем вас позже!</p>
          </div>

          <CustomButton onClick={() => navigate(-1)} customType={"customContained"}>Вернуться назад</CustomButton>
        </div>

        <img className={styles.pic} src="/apology-page.svg" alt="Иллюстрация к отсутствующей странице: работяга в запарке" />
      </div>
    </section>
  )
}
