import React from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import SplineModel from "./components/SplinModel"
import './App.css'

function App() {
  return (
    <div className="App" class="bg-black bg-[url(/gradient.png)] ">
      <Sidebar />
      <SplineModel class="w-40 h-40 fixed bottom-10 right-10 z-50 transition-all duration-700 ease-in-out"/>
      <Topbar />
    </div>
  )
}

export default App
 