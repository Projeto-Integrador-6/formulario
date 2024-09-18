import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/index";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Login realizado com sucesso!</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
