import { Calendar, Finance, VesselInfo, Maintenance, AddFinance } from "./pages"
import DashboardLayout from "./pages/layouts/DashboardLayout"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {loader as vesselLoader} from './pages/Vessel/VesselInfo'

const router = createBrowserRouter([
  {
    path:'/',
    element:<DashboardLayout/>,
    children:[
      {
        index: true,
        path:'sensors',
        element:<VesselInfo/>,
        loader: vesselLoader
      },
      {
        path:'finance',
        children:[
          {
            index: true,
            path:'all',
            element:<Finance/>
          },
          {
            path:'add',
            element: <AddFinance/>
          }
        ]
      },
      {
        path:'calendar',
        element:<Calendar/>
      },
      {
        path:'Maintenance',
        element:<Maintenance/>
      }
    ]
  }
])
const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}
export default App