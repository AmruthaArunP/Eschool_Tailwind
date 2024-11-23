import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Header from './components/Header';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <BrowserRouter>
      <div>
      <Sidebar sidebarOpen={sidebarOpen} updateSideBar={(val)=>{setSidebarOpen(val)}} />
      <div className="lg:pl-72">
        <Header updateSideBar={(val)=>{setSidebarOpen(val)}} />
          <main className="">
            <div className="px-4 sm:px-4 lg:px-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>

            </div>
          </main>

      </div>


      </div>
    </BrowserRouter>
  )
}

export default App;