import { useState } from "react";

import { handleSubmit } from "../api";

export function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form onSubmit={(e) => handleSubmit(e, username, password)}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
