import { Form } from "../../shared/components";
import { handleLoginSubmit } from "./api";
import { isUserLoggedIn } from "../../shared/utils";

import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/");
    }
  });

  return <Form method="login" handleSubmit={handleLoginSubmit} />;
};

export default Login;
