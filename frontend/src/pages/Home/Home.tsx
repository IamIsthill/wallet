import { IHomeProps } from "./ts";
import { LOG_TOKEN } from "../../shared/contants";

const Home = ({ ...props }: IHomeProps) => {
  const isLoggedIn = localStorage.getItem(LOG_TOKEN);
  if (isLoggedIn !== null) {
    return <div {...props}>{"Home"}</div>;
  } else {
    return <div {...props}>{"Landing"}</div>;
  }
};

export default Home;
