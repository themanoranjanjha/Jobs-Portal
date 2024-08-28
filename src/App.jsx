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
import ProtectedRoute from './components/Protected-route';

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
        element:(
          <ProtectedRoute>
             <Onboarding />
          </ProtectedRoute>
         
        )
      },
      {
        path:'/jobs',
        element:(
          <ProtectedRoute>
            <JobListing />
           </ProtectedRoute> 
        )
      },
      {
        path:'/job/:id',
        element:(
          <ProtectedRoute>
           <JobPage />
           </ProtectedRoute> 
        )
      },
      {
        path:'/post-job',
        element:(
          <ProtectedRoute>
           <PostJob />
           </ProtectedRoute> 
        )
      },
      {
        path:'/saved-job',
        element:(
          <ProtectedRoute>
           <SavedJobs />
           </ProtectedRoute> 
        )
      },
      {
        path:'/my-jobs',
        element:(
          <ProtectedRoute>
           <MyJobs />
           </ProtectedRoute> 
        )
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
