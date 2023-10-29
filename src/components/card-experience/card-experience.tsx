import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import styles from './card-experience.module.css';

export const CardExperience: React.FC = () => {

  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderBox: 'none',
            borderRadius: '0',
            boxShadow: 'none'
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFF',
            color: '#000',
            textTransform: 'none',
            fontSize: '24px',
            fontWeight: '500',
            paddingTop: '0',
            paddingLeft: '0',
            height: '60px'
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            backgroundColor: '#F1F6FF',
            color: '#000',
            textTransform: 'none',
            minHeight: '396px',
            height: '100%',
            padding: '0',
            borderRadius: '12px'
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardHeader title="Опыт работы 6 лет" />
        <CardContent>
          <div className={styles.content}>

            <div className={styles.item}>
              <p className={styles.title}>Продуктовый дизайнер</p>
              <p className={styles.company}>Интеллектуальные динамические системы</p>
              <p className={styles.time}>Октябрь 2020 — по настоящее время</p>
              <p className={styles.description}>Веду и завершаю крупные разделы продукта, внедряя новые функции и защищая гипотезы. Взаимодействие, как с разработкой, менеджментом, аналитиками, так и с бизнесом. Пересмотр слабых моментов продукта, как в визуальном, так и в функциональном плане. Разработка продукта, базирующегося на legacy движке.
              </p>
            </div>

            <div className={styles.item}>
              <p className={styles.title}>Дизайнер интерфейсов</p>
              <p className={styles.company}>ООО "ГлобалТрак Информационные Технологии"</p>
              <p className={styles.time}>Ноябрь 2017 — Сентябрь 2020</p>
              <p className={styles.description}>Конкурентный анализ рынка, анализ ЦА, JTBD, разработка внутренней дизайн-системы, проведение бизнес-интервью с пользователями, построение User Flow.
              </p>
            </div>
          </div>

        </CardContent>
      </Card>
    </ThemeProvider>
  )
}


