import { IHomeProps } from "./ts";
import { isUserLoggedIn } from "../../shared/utils";

const Home = ({ ...props }: IHomeProps) => {
  if (isUserLoggedIn()) {
    return <div {...props}>{"Home"}</div>;
  } else {
    return <div {...props}>{"Landing"}</div>;
  }
};

export default Home;
