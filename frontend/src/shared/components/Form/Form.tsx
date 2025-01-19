import { SyntheticEvent, useState } from "react";

export interface HandleSubmitProps {
  username: string;
  password: string;
  e: SyntheticEvent;
}

interface FormProps {
  method: "register" | "login";
  handleSubmit: ({ ...props }: HandleSubmitProps) => Promise<void>;
}

export function Form({ ...props }: FormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitLabel = props.method == "register" ? "Register" : "Login";

  return (
    <form onSubmit={(e) => props.handleSubmit({ e, username, password })}>
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
      <input type="submit" value={submitLabel} />
    </form>
  );
}
