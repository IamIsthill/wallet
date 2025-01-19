import { Navigate } from "react-router";

import { handleSubmit, handleLoginSubmit } from "./api";
import { LOG_TOKEN } from "../../shared/contants";
import { Form } from "./ui";

export function Register() {
  const isLoggedIn = localStorage.getItem(LOG_TOKEN);

  if (isLoggedIn === null) {
    return <Form method="register" handleSubmit={handleSubmit} />;
  } else {
    return <Form method="login" handleSubmit={handleLoginSubmit} />;
  }

  // const [username, setUsername] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // return (
  //   <form onSubmit={(e) => handleSubmit(e, username, password)}>
  //     <input
  //       type="text"
  //       name="username"
  //       placeholder="username"
  //       onChange={(e) => setUsername(e.target.value)}
  //       value={username}
  //     />
  //     <input
  //       type="password"
  //       name="password"
  //       id="password"
  //       placeholder="password"
  //       onChange={(e) => setPassword(e.target.value)}
  //       value={password}
  //     />
  //     <input type="submit" value="Submit" />
  //   </form>
  // );
}
