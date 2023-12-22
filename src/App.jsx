import Sidebar from "./components/Sidebar"
import './App.css'

import CreateTask from "./components/CreateTask"
import Today from "./pages/Today"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Upcoming from "./pages/Upcoming";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Today />,
    },
    {
      path: "/upcoming",
      element: <Upcoming />,
    },
    {
      path: "/pending",
      element: <Pending />,
    },
    {
      path: "/completed",
      element: <Completed />,
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
