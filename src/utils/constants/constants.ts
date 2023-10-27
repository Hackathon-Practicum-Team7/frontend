import * as yup from 'yup';
import {createData} from "../helpers";
import {IHeadCell} from "../types";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    customContained: true;
    customOutlined: true;
    customFilterActive: true;
    customFilter: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    gray: true;
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

export const tableOptions = {
  sorting: [
    'По умолчанию',
  ],
  pagination: [
    {text: 'По 5 кандидатов', value: 5},
    {text: 'По 10 кандидатов', value: 10},
    {text: 'По 20 кандидатов', value: 20},
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
};

export const rows = [
  createData(1, {
      name: 'Мария Иванова',
      profession: 'Python-разработчик',
      src: 'https://imageup.ru/img106/4591822/dsc03760-2-1-1.jpg'},
    'Junior',
    'Москва',
    ['HTML', 'CSS', 'JavaScript', 'React'],
    {
      tg: '@nickname',
      email: 'email@email.ru',
    },
    true ),
  createData(2, {
      name: 'Анастасия Иванова',
      profession: 'C++-разработчик ',
      src: 'https://imageup.ru/img37/4591831/_ssl-mzpqr8.jpg'},
    'Junior',
    'Санкт-Петербург',
    ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, false),
  createData(3, {
      name: 'Екатерина Иванова',
      profession: 'Python-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Казань',
    ['HTML', 'CSS', 'React'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, true),
  createData(4, {
      name: 'Полина Иванова',
      profession: 'Java-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Саратов',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, false),
  createData(5, {
      name: 'Дарья Иванова',
      profession: 'Web-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Санкт-Петербург',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, false),
  createData(6, {
      name: 'Ирина Иванова',
      profession: 'Web-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Москва',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, true),
];

export const headCells: IHeadCell[] = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'profile',
    label: 'Профиль',
  },
  {
    id: 'grade',
    label: 'Уровень',
  },
  {
    id: 'location',
    label: 'Локация',
  },
  {
    id: 'skills',
    label: 'Ключевые навыки',
  },
  {
    id: 'contacts',
    label: 'Контакты',
  },
  {
    id: 'isLiked',
    label: '',
  },
];

export const newHeadCells = headCells.slice(1);
