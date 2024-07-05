import { BrowserRouter } from "react-router-dom"
import { PageRoutes } from "../pages"
import { HomePage } from "../pages/HomePage"


function App() {

  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
