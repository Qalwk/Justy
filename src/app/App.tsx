import { BrowserRouter } from "react-router-dom"
import { PageRoutes } from "../pages"
import { TelegramProvider } from "./providers"


function App() {

  return (
    <BrowserRouter>
      <TelegramProvider />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
