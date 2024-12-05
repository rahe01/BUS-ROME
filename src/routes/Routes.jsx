import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Page/Home'
import BigBus from '../Page/BigBus'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/bigbus',
        element : <BigBus></BigBus>
      }
      
    ],
  },
 
])