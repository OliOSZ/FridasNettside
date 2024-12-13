import {
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import { KursPage } from "./pages/KursPage";
import { BlogPage } from "./pages/BlogPage";
import Navbar from "./components/Navbar/Navbar";
import { FAQ } from "./pages/FAQ";
import { EventPage } from "./pages/EventPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path="/BlogPage" element={<BlogPage />}/>
      <Route path="/KursPage" element={<KursPage />}/>
      <Route path="/EventPage" element={<EventPage />}/>
      <Route path="/FAQ" element={<FAQ />}/>
    </Routes>
  );
}

function StartPage (){
  return (
    <>
    <Navbar/>
    <img className="FridaYogaStartPage" src="../src\assets\lotusCropped.jpg" alt="" />
    <h1>FriMedYoga</h1>
    <h3>Frida's medesinkse yoga</h3>
    </>  
  )
}
export default App
