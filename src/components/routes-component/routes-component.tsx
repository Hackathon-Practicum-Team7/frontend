import {Route, Routes} from 'react-router-dom'
import {ReactElement} from 'react'
import {HomePage} from "../../pages/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results";

export default function RoutesComponent(): ReactElement {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/results' element={<ResultsPage />} />
      <Route path='*' element={<></>} />
    </Routes>
  );
}
