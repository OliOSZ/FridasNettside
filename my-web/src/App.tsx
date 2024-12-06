import {
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import { HomePage } from "./pages/homepage";
import { BlogPage } from "./pages/BlogPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path="/HomePage" element={<HomePage />}/>
      <Route path="/BlogPage" element={<BlogPage />}/>
    </Routes>
  );
}

function StartPage (){
  return (
    <>
    <Navbar/>
    </>  
  )
}
export default App
