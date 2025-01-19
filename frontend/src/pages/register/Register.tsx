import { useEffect } from "react";
import { isUserLoggedIn } from "../../shared/utils";
import { IRegisterProps } from "./ts";
import { useNavigate } from "react-router";
import { Form } from "../../shared/components";
import { HandleSubmitProps } from "../../shared/components";
import { api } from "../../shared/api";

async function handleRegisterSubmit({ ...props }: HandleSubmitProps) {
  props.e.preventDefault();

  const route = "/user/register/";
  const data = {
    username: props.username,
    password: props.password,
  };

  try {
    const res = await api.post(route, data);
    console.log(res.data);
    const navigate = useNavigate();
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

const Register = ({ ...props }: IRegisterProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/");
    }
  });

  return <Form method="register" handleSubmit={handleRegisterSubmit} />;
};

export default Register;
