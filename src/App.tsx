import './App.css';

import { Router } from './utils/router';
import {RouterProvider} from 'react-router-dom'

export const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={Router}/>
    </div>
  )
}