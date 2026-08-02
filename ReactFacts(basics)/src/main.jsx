import { createRoot } from "react-dom/client";
import ReactLogo from "./assets/react.svg";

const root = createRoot(document.querySelector("#root"));

root.render(
  <main>
    <img src={ReactLogo} width="40px" />
    <h1>Fun facts about React!</h1>

    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps</li>
    </ul>
  </main>
);