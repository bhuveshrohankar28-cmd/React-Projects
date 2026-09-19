import ReactLogo from "./assets/react.svg";

export default function Header(){
  return(
    <header className="header">
      <img src={ReactLogo} className="nav-logo"  />
      <nav >
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}