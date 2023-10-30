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

export const baseUrl = 'https://seventeam-hakaton.sytes.net/api/v1';

export const filterOptions = {
  profession: [
    'Выберите из списка',
    'Программирование',
    'Дизайн',
    'Маркетинг',
    'Анализ данных',
    'Менеджмент'
  ],
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

export const failedAuthErrorMessage = 'Неверные почта или пароль';
// export const failedAuthErrorMessage = 'Не удается войти. Пожалуйста, проверь правильность написания логина и пароля';

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
      score: 100,
      src: 'https://imageup.ru/img106/4591822/dsc03760-2-1-1.jpg'},
    'Junior',
    'Москва',
    ['HTML', 'CSS', 'JavaScript', 'React'],
    {
      phone: '+7 (999) 000-00-00',
      email: 'email@email.ru',
    },
    true ),
  createData(2, {
      name: 'Анастасия Иванова',
      profession: 'C++-разработчик ',
      score:100,
      src: 'https://imageup.ru/img37/4591831/_ssl-mzpqr8.jpg'},
    'Junior',
    'Санкт-Петербург',
    ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], {
      phone: '+7 (999) 000-00-00',
      email: 'email@email.ru',
    }, false),
  createData(3, {
      name: 'Екатерина Иванова',
      profession: 'Python-разработчик ',
      score: 75,
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Казань',
    ['HTML', 'CSS', 'React'], {
      phone: '+7 (999) 000-00-00',
      email: 'email@email.ru',
    }, true),
  createData(4, {
      name: 'Полина Иванова',
      profession: 'Java-разработчик ',
      score: 50,
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Саратов',
    ['HTML', 'CSS'], {
      phone: '+7 (999) 000-00-00',
      email: 'email@email.ru',
    }, false),
  createData(5, {
      name: 'Дарья Иванова',
      profession: 'Web-разработчик ',
      score: 25,
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Senior',
    'Санкт-Петербург',
    ['HTML', 'CSS'], {
      phone: '+7 (999) 000-00-00',
      email: 'email@email.ru',
    }, false),
  createData(6, {
      name: 'Ирина Иванова',
      profession: 'Web-разработчик ',
      score: 0,
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Lead',
    'Москва',
    ['HTML', 'CSS'], {
      phone: '+7 (999) 000-00-00',
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
    sortable: true,
  },
  {
    id: 'grade',
    label: 'Уровень',
    sortable: true,
  },
  {
    id: 'location',
    label: 'Локация',
    sortable: true,
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

export type TGrade = 'Junior' | 'Middle' | 'Senior' | 'Lead';
export const gradeOrder = new Map<TGrade, number>([
  ['Junior', 0],
  ['Middle', 1],
  ['Senior', 2],
  ['Lead', 3],
]);

export const newHeadCells = headCells.slice(1);
