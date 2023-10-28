import {TypedUseSelectorHook, useSelector as selectorHook} from 'react-redux';
import {RootState} from "../store-types";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
