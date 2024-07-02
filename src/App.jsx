import Header from "./Components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      
      <Outlet />

      <Footer></Footer>

    </>
  )
}

export default App
