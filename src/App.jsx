import Sidebar from "./components/Sidebar"
import './App.css'

import CreateTask from "./components/CreateTask"
import Today from "./pages/Today"

function App() {
  return (
    <main>
      <Sidebar />
     <Today/>

      {/* <CreateTask/> */}
    </main>
  )
}

export default App
