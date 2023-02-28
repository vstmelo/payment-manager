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
import { motion } from "framer-motion";
import { InputStyled } from "../../assets/styles/components/input";
import { BtnMotion } from "../../components/motions/btnMotion";
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
            <InputStyled
              type="text"
              placeholder="Digite seu email"
              label="Email:"
              size="medium"
              onChange={handleUserEmail}
            />
          </BoxInput>
          <BoxInput>
            <InputStyled
              label="Senha:"
              placeholder="Digite sua senha"
              size="medium"
              type="password"
              onChange={handlePass}
            />
          </BoxInput>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ButtonLogin onClick={callLoginUsecase} type="submit">
              Entrar
            </ButtonLogin>
          </motion.div>
        </BoxLogin>
      </ContainerLogin>
    </>
  );
}
