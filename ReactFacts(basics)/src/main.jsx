import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";

const root = createRoot(document.querySelector("#root"));

function MainContent(){
  return(
    <main>
    
    <h1>Fun facts about React!</h1>

    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps</li>
    </ul>
  </main>
  )
}
function Footer(){
  return(
    <footer>
      <small>©2026 Devlopment. All rights reserved</small>
    </footer>
  )
}
root.render(
  <>
  <Header /> 
  <MainContent/>
  <Footer />
  </>
);