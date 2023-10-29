import {TypedUseSelectorHook, useSelector as selectorHook} from 'react-redux';
import {RootState} from "../slices-types";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
