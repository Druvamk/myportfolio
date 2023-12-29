import React from "react";
import  ReactDOM  from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skills/Skill";
import Work from "./components/Works/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
function App(){
    return (
        <div>
            <Navbar/>
            <Intro/>
            <Skill/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><App/>
</>)