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
): IData {
  return {
    id,
    profile,
    grade,
    location,
    skills,
    contacts,
    isLiked,
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
