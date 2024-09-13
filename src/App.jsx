import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"
import ViewUser from "./components/ViewUser"
import Display from "./components/Display"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="EditUser/:id" element={<EditUser />} />
        <Route path="ViewUser/:id" element={<ViewUser />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App