import React from 'react';
import {TGrade} from "./constants/constants";

export type TAuthForm = {
  email: string,
  password: string
}

export interface IFormInput extends Record<string, string[] | string> {
  professionStream: string;
  professions: string[];
  skills: string[];
  locations: string[];
  workingConditions: string[];
  employmentTypes: string[];
  hasPortfolio: string;
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
  score: number;
}

export interface IContacts {
  phone: string;
  email: string;
}

export interface IData {
  id: number;
  profile: IProfile;
  grade: TGrade;
  location: string;
  skills: string[];
  contacts: IContacts;
  isLiked: boolean;
  hash: string;
}

export type TOrder = 'asc' | 'desc';
export type TComparator = (a: IData, b: IData) => number;
export interface IHeadCell {
  id: keyof IData;
  label: string;
  sortable?: boolean;
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
  path?: string,
  onClick: () => void
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
