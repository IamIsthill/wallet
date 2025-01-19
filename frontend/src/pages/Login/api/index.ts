import { api } from "../../../shared/api";
import { HandleSubmitProps } from "../../../shared/components";
import { LOG_TOKEN } from "../../../shared/contants";

import { useNavigate } from "react-router";

export async function handleLoginSubmit({ ...props }: HandleSubmitProps) {
    props.e.preventDefault();
    const navigate = useNavigate();
  
    const data = {
      username: props.username,
      password: props.password,
    };
  
    const route = "/api/token/";
  
    try {
      const res = await api.post(route, data);
      console.log(res.data);
  
      // Set the log token
      localStorage.setItem(LOG_TOKEN, "yes");
  
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }