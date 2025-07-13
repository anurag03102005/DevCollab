import './App.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import HomePage from './components/HomePage';
import EditorPage from './components/EditorPage';
import {Toaster} from 'react-hot-toast';
function App() {
  const router = createBrowserRouter([
    {path:"/",element:<HomePage/>},
    {path:"/home",element:<HomePage/>},
    {path:"/editor/:id",element:<EditorPage />}

  ])
  return (
    <>
    <div>
      <Toaster position="top-right"
       toastOptions = {
        {
          success:{
            theme:{
              primary:'#4aed88'
            }
          }
        }
        }>
       </Toaster>
    </div>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
