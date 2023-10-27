import React from 'react';

export type TAuthForm = {
  email: string,
  password: string
}

export interface IFormInput {
  professionStream: string;
  professions: string[];
  skills: string[];
  locations: string[];
  workingConditions: string[];
  employmentType: string[];
  hasPortfolio: string[];
  grade: string[];
}

export type TDropDown = {
  type: 'menu' | 'filters',
  isOpen: boolean,
  children: React.ReactNode,
  onClose: () => void,
}

export interface IProfile {
  name: string;
  profession: string;
  src: string;
}

export interface IContacts {
  tg: string;
  email: string;
}

export interface IData {
  id: number;
  profile: IProfile;
  grade: string;
  location: string;
  skills: string[];
  contacts: IContacts;
  isLiked: boolean;
}

export type TOrder = 'asc' | 'desc';
export type TComparator = (a: IData, b: IData) => number;
export interface IHeadCell {
  id: keyof IData;
  label: string;
}

export enum MenuItemName {
  MY_VACANCIES = "Мои вакансии",
  FIND_CANDIDATE = "Найти кандидата",
  FAVORITES = "Избранное",
  CHAT = "Чат",
  PROFILE_INFO = "Инфо профиля",
  HELP = "Помощь",
  LOGOUT = "Выйти",
}

export type TMenuItem = {
  itemName: string,
}
