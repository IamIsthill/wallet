import { api } from "../../../shared/api";
import { HandleSubmitProps } from "../../../shared/components";
import {
  LOG_TOKEN,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from "../../../shared/contants";

export async function handleLoginSubmit({ ...props }: HandleSubmitProps) {
  props.e.preventDefault();
  //   const navigate = useNavigate();

  const data = {
    username: props.username,
    password: props.password,
  };

  const route = "/api/token/";

  try {
    const res = await api.post(route, data);

    // Save the tokens
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(LOG_TOKEN, "yes");

    // Navigate to home
    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
}
