import { SyntheticEvent } from "react";
import { api } from "../../../shared/api";

export async function handleSubmit(event: SyntheticEvent, username:string, password:string) {
    event.preventDefault();
    const route = "/user/register/";
    try {
      const res = await api.post(route, { username, password });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
