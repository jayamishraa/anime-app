import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import { useState } from "react"
import Description from "./pages/Description"
import Trending from "./components/Trending"
import ImagePage from "./pages/ImagePage"
import Home from "./components/Home"

function App() {
  const [descriptionId, setDescriptionId] = useState()
  const [imageId, setImageId] = useState()

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setDescriptionId={setDescriptionId} />}>

        <Route index element={<Home />} />

        <Route
          path="/trending" 
          element={<Trending setDescriptionId={setDescriptionId} />}
        />  
          <Route 
            path="/description" 
            element={<Description descriptionId={descriptionId} setImageId={setImageId} />} 
          />  
          <Route 
            path="/chapter" 
            element={<ImagePage imageId={imageId} />} 
          />  
                           
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
