
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
import { createContext, useState } from 'react';
export const CreateTaskContext = createContext(null);
export const TaskContext = createContext(null);

import sampleData from "./data.json"
function App() {
  const [createTask, setCreateTask] = useState(false)
  const [task, setTask] = useState(sampleData)

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

  ], { basename: '/Todo-List' });


  return (
    <main>

      {/* <Today /> */}
      <CreateTaskContext.Provider value={{ createTask, setCreateTask }}>
        <TaskContext.Provider value={{ task, setTask }}>
          <RouterProvider router={router} />
          {createTask && <CreateTask />}
        </TaskContext.Provider>
      </CreateTaskContext.Provider>

    </main>
  )
}

export default App
