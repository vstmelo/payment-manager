import Input from "../../components/Input";
import React, { useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { SideBar } from "./sidebar";
import {
  BoxInput,
  BoxLogin,
  ButtonLogin,
  ContainerLogin,
  TitleLogin,
} from "../../assets/styles/pages/Login";
export default function Login(): JSX.Element {
  const [userEmail, setUserEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();

  const { SignIn } = useContext(AuthContext);

  const handleUserEmail: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserEmail(event.target.value);
  };

  const callLoginUsecase = async (event: any) => {
    event.preventDefault();
    SignIn({ email: userEmail, password: pass, navigate });
  };

  const handlePass = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPass(event.target.value);
  };

  return (
    <>
      <ContainerLogin>
        <SideBar />
        <BoxLogin>
          <TitleLogin>Login</TitleLogin>
          <BoxInput>
            <Input
              type="text"
              placeholder="Digite seu email"
              fullwidth="true"
              label="Email:"
              onChange={handleUserEmail}
            />
          </BoxInput>
          <BoxInput>
            <Input
              label="Senha:"
              placeholder="Digite sua senha"
              fullwidth="true"
              type="password"
              onChange={handlePass}
            />
          </BoxInput>
          <ButtonLogin onClick={callLoginUsecase} type="submit">
            Entrar
          </ButtonLogin>
        </BoxLogin>
      </ContainerLogin>
    </>
  );
}
