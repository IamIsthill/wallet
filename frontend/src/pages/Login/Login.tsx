import { Form, HandleSubmitProps } from "../../shared/components";
import { api } from "../../shared/api";

async function handleLoginSubmit({ ...props }: HandleSubmitProps) {
  props.e.preventDefault();

  const data = {
    username: props.username,
    password: props.password,
  };

  const route = "/api/token/";

  try {
    const res = await api.post(route, data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

const Login = () => {
  return <Form method="login" handleSubmit={handleLoginSubmit} />;
};

export default Login;
