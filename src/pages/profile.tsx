import { Card, CardContent, CardHeader, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './profile.module.css';
import { CardAbout } from '../components/cardAbout/cardAbout';

export const ProfilePage: React.FC = () => {
  const { id } = useParams();

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
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '400',
            minHeightheight: '128px',
            padding: '0'
          },
        },
      },
    },
  });

  return (
    <div>
      <h1> Profile Page </h1>
      <p>{id}</p>

      <div className={styles.content}>

      <CardAbout></CardAbout>

      <ThemeProvider theme={theme}>

      <Card>
        <CardHeader title="Навыки" />
        <CardContent>
Маркетинговая аналитика
UX - исследования
UI
Figma
Adobe Photoshop
Adobe Photoshop</CardContent>
      </Card>

      <Card>
        <CardHeader title="Опыт работы" />
        <CardContent>
6 лет
Продуктовый дизайнер
Интеллектуальные динамические системы
Октябрь 2020 — по настоящее время
Веду и завершаю крупные разделы продукта, внедряя новые функции и защищая гипотезы. Взаимодействие, как с разработкой, менеджментом, аналитиками, так и с бизнесом. Пересмотр слабых моментов продукта, как в визуальном, так и в функциональном плане. Разработка продукта, базирующегося на legacy движке.
Дизайнер интерфейсов
ООО "ГлобалТрак Информационные Технологии"
Ноябрь 2017 — Сентябрь 2020
Конкурентный анализ рынка, анализ ЦА, JTBD, разработка внутренней дизайн-системы, проведение бизнес-интервью с пользователями, построение User Flow..</CardContent>
      </Card>

      <Card>
        <CardHeader title="Образование" />
        <CardContent>
6 лет
2023
Продуктовый дизайнер
Менторство в Helper, Студия MAX
2021
UI  дизайнер
Пятигорский техникум экономики и инновационных технологий
2013 - 2017
Дизайнер
Рязанский государственный радиотехнический университет, Рязань</CardContent>
      </Card>
     </ThemeProvider>

     </div>

    </div>
  )
}


