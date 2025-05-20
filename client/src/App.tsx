import {BrowserRouter,Route,Routes} from "react-router-dom"
import { DashboardView } from "./pages/DashboardView"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardView/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App