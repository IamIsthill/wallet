import { api } from "../../../shared/api";
import { HandleSubmitProps } from "../ts";

export async function handleSubmit({...props}:HandleSubmitProps) {
    props.e.preventDefault();
    const route = "/user/register/";
    const data = {
      username: props.username,
      password: props.password
    }
    try {
      const res = await api.post(route, data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

export async function handleLoginSubmit({...props}:HandleSubmitProps) {
  props.e.preventDefault();
  const route = "/user/register/";
  const data = {
    username: props.username,
    password: props.password
  }
  try {
    const res = await api.post(route, data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}