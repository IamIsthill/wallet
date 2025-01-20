import { IHeaderProps } from "./ts";
import { NavBar } from "../../shared/ui";

const Header = ({ ...props }: IHeaderProps) => {
  return (
    <header {...props}>
      <NavBar />
    </header>
  );
};

export default Header;
