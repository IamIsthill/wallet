import { useNavigate } from "react-router";
import { useEffect } from "react";

const Logout = () => {
  localStorage.clear();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });
  return <div>{"Logout"}</div>;
};

export default Logout;
