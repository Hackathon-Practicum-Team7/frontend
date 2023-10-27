import {createTheme} from "@mui/material";
import * as yup from 'yup';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    customContained: true;
    customOutlined: true;
    customFilterActive: true;
    customFilter: true;
  }
}

export const filterOptions = {
  workingConditions: [
    'Не имеет значения',
    'Офис',
    'Гибрид',
    'Удаленка',
  ],
  employmentTypes: [
    'Не имеет значения',
    'Полная занятость',
    'Частичная занятость',
    'Проектная работа',
    'Стажировка',
  ],
  hasPortfolio: [
    'Не имеет значения',
    'Указано',
  ],
  grade: [
    'Не имеет значения',
    'Junior',
    'Middle',
    'Senior',
    'Lead',
  ],
}

export const authValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введите корректный адрес электронной почты вида example@mail.ru')
    .required('Это поле обязательно'),
  password: yup
    .string()
    .required('Это поле обязательно')
});

export const student = {
  "name": "Ирина",
  "surname": "Иванова",
  "profession": "Web-разработчик",
  "grade": "middle",
  "city": "Санкт-Петербург",
  "started_working": "2023-02-02",
  "about": "Я дизайнер",
  "avatar": "student_35ce3300-9c12-40b6-93ce-c03b7548200d/avatars/maxresdefault.jpg",
  "resume": "student_35ce3300-9c12-40b6-93ce-c03b7548200d/resumes/hakaton.pdf",
  "is_looking_for_job": true,
  "has_portfolio": true,
  "employment_types": [
    "Полная занятось",
    "Частичная занятость",
    "Проектная работа",
    "Стажировка"
  ],
  "working_condition": [
    "Офис",
    "Гибрид",
    "Удаленка"
  ],
  "contact": {
    "id": 2,
    "email": "student2@example.com",
    "phone": "+79998887744",
    "telegram": "https://t.me/alena",
    "portfolio": "https://github.com/alena",
    "whatsapp": "+79998887744"
  },
}
