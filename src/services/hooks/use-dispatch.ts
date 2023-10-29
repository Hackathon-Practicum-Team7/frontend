import {useDispatch as dispatchHook} from 'react-redux';
import {AppDispatch} from "../slices-types";

export const useDispatch: () => AppDispatch = dispatchHook;
