import React from 'react';
import {TGrade} from "./constants/constants";

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
}

export type TOrder = 'asc' | 'desc';
export type TComparator = (a: IData, b: IData) => number;
export interface IHeadCell {
  id: keyof IData;
  label: string;
  sortable?: boolean;
}
