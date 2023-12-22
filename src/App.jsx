import Sidebar from "./components/Sidebar"
import './App.css'

import CreateTask from "./components/CreateTask"
import Today from "./pages/Today"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Today />,
    },
    
  ]);


  return (
    <main>
      <Sidebar />
      {/* <Today /> */}
      <RouterProvider router={router} />
      {/* <CreateTask/> */}
    </main>
  )
}

export default App
