
//import components/pages
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Goal from "./pages/Goal"

function App() {

  const URL = "https://localhost:8000/"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
