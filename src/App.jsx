import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import { useState } from "react"
import Description from "./pages/Description"
import Trending from "./components/Trending"

function App() {

  const [descriptionId, setDescriptionId] = useState()

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setDescriptionId={setDescriptionId} />}>

        <Route 
          path="/trending" 
          element={<Trending setDescriptionId={setDescriptionId} />}
        />  
          <Route 
            path="/description" 
            element={<Description descriptionId={descriptionId} />} 
          />  
            
          
                  
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
