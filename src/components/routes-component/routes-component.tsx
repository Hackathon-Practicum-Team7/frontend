
import {Route, Routes} from 'react-router-dom'
import {ReactElement} from 'react'
import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import { ProfilePage } from '../../pages/profile';
import { ModalSkills } from '../modalSkills/modalSkills';

export default function RoutesComponent(): ReactElement {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/results' element={<ResultsPage />} />
      <Route path='/profile/:id' element={<ProfilePage />} />
      <Route path='/skills' element={
        <ModalSkills
          value={[]}
          onChange={(event: { target: { value: string[]; }; }) => {console.log('skills', event.target.value)}}
          onClose={() => {console.log('close')}}
        />
      }/>
      <Route path='*' element={<></>} />
    </Routes>
  );
}
