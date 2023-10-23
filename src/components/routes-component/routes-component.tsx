import {Route, Routes} from 'react-router-dom'
import {ReactElement} from 'react'
import {HomePage} from "../../pages/home"
import {Login} from '../../pages/login/login';

export default function RoutesComponent(): ReactElement {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<></>}/>
    </Routes>
  );
}
