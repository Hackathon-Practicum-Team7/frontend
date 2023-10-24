import { Route, Routes } from 'react-router-dom'
import { ReactElement } from 'react'
import { HomePage } from "../../pages/home"

export default function RoutesComponent(): ReactElement {
  return (
    <Routes>
      <Route path='/login' element={<></>} />
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<></>} />
    </Routes>
);
}
