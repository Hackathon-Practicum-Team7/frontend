import {IContacts, IData, IProfile, TComparator, TOrder} from "./types";
import {gradeOrder, TGrade} from "./constants/constants";

export function createData(
  id: number,
  profile: IProfile,
  grade: TGrade,
  location: string,
  skills: string[],
  contacts: IContacts,
  isLiked: boolean,
  hash: string
): IData {
  return {
    id,
    profile,
    grade,
    location,
    skills,
    contacts,
    isLiked,
    hash
  };
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function gradeComparator<T extends IData>(a: T, b: T) {
  const aGrade = gradeOrder.get(a["grade"]);
  const bGrade = gradeOrder.get(b["grade"]);
  if (bGrade === undefined || aGrade === undefined)
    return 0;
  if (bGrade < aGrade) {
    return -1;
  }
  if (bGrade > aGrade) {
    return 1;
  }
  return 0;
}

export function profileScoreComparator<T extends IData>(a: T, b: T) {
  if (b.profile.score < a.profile.score) {
    return -1;
  }
  if (b.profile.score > a.profile.score) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof IData>(
  order: TOrder,
  orderBy: Key,
): TComparator {
  if (orderBy === "grade")
    return (a, b) => (order === 'asc' && -1 || 1)*gradeComparator(a, b);
  if (orderBy === "profile")
    return (a, b) => (order === 'asc' && -1 || 1)*profileScoreComparator(a, b);
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const getResponseData = (res: Response) => {
  if (!res.ok) {
    return res.text().then(text => {
      throw new Error(`Ошибка: ${text}`)
    })
  }
  return res.json();
}

export function setCookie(cookieName: string, tokenValue: string | number | boolean | null, props: any = {}) {
  props = {
    path: '/',
    ...props
  }
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  if (tokenValue !== null) {
    tokenValue = encodeURIComponent(tokenValue);
  }
  let updatedCookie = cookieName + '=' + tokenValue;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(cookieName: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(cookieName: string) {
  setCookie(cookieName, null, {expires: -1});
}
