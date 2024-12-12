import {
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import { HomePage } from "./pages/homepage";
import { BlogPage } from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import { FAQ } from "./pages/FAQ";

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path="/HomePage" element={<HomePage />}/>
      <Route path="/BlogPage" element={<BlogPage />}/>
      <Route path="/FQL" element={<FAQ />}/>
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
