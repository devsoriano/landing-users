import { useEffect } from "react";
import useAuth from "./../../hooks/useAuth";
import { Header, Indicative } from "./../../styles/Ui/structure";

export const NavBar = () => {
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      console.log("entra a esta shit");
    })();
  }, [auth]);

  return (
    <Header>
      <nav>
        <Indicative onClick={logout}>logout</Indicative>
      </nav>
    </Header>
  );
};
