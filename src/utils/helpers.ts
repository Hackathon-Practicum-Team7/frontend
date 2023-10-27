import {IContacts, IData, IProfile, TComparator, TOrder} from "./types";


export function createData(
  id: number,
  profile: IProfile,
  grade: string,
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
export function getComparator<Key extends keyof IData>(
  order: TOrder,
  orderBy: Key,
): TComparator {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
