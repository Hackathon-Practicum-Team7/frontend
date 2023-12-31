import * as yup from 'yup';
import {IHeadCell} from "../types";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    customContained: true;
    customOutlined: true;
    customFilterActive: true;
    customFilter: true;
    customOutlinedFilter: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    gray: true;
  }
}

export const baseUrlProduction = 'https://seventeam-hakaton.sytes.net/api/v1';
export const baseUrlLocal = 'http://127.0.0.1:8000/api/v1';

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
  pagination: [
    {text: 'По 10 кандидатов', value: 10},
    {text: 'По 20 кандидатов', value: 20},
    {text: 'По 50 кандидатов', value: 50},
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
