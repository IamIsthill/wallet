import { Link } from "react-router";
import { isUserLoggedIn } from "../../../shared/utils";

export function NavBar() {
  if (isUserLoggedIn()) {
    return (
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/logout"}>Logout</Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
    );
  }
}
