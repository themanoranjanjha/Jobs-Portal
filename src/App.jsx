import { Button } from './components/ui/button'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from './layouts/app-layout';
import LandingPage from './Pages/landing';
import './App.css'
import JobListing from './Pages/job-listing';
import JobPage from './Pages/job';
import PostJob from './Pages/post-job';
import SavedJobs from './Pages/saved-jobs';
import MyJobs from './Pages/my-jobs';
import Onboarding from './Pages/onboarding';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:<Onboarding />
      },
      {
        path:'/jobs',
        element:<JobListing />
      },
      {
        path:'/job/:id',
        element:<JobPage />
      },
      {
        path:'/post-job',
        element:<PostJob />
      },
      {
        path:'/saved-job',
        element:<SavedJobs />
      },
      {
        path:'/my-jobs',
        element:<MyJobs />
      }
      
    ]
  },
  
])

function App() {
  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>  
   
  )
}

export default App
