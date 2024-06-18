import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/Orange">Orange</Link>
    </div>
  );
}
