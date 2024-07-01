import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import { useState } from "react"
import Details from "./pages/Details"

function App() {

  const [descriptionId, setDescriptionId] = useState()

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>

          <Route 
            path="/description" 
            element={<Details descriptionId={descriptionId} setDescriptionId={setDescriptionId} />} 
          />  
          
                  
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
