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
  isOpen: boolean,
  children: React.ReactNode,
  onClose: () => void,
}
