import css from "./style.module.scss";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import React, { useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { SideBar } from "./sidebar";
// import { Card } from "components/Card";

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
    event.preventDefault()
    SignIn({ email: userEmail, password: pass, navigate });
  };

  const handlePass = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPass(event.target.value);
  };

  return (
    <>
      <section className={css.container}>
        <SideBar />
        <div className={css.box}>
          <h3 className={css.loginText}>Login</h3>
          <div className={css.boxInputs}>
            <Input
              type="text"
              placeholder="Digite seu email"
              fullwidth="true"
              label="Email :"
              onChange={handleUserEmail}
            />
          </div>
          <div className={css.boxInputs}>
            <Input
              label="Senha:"
              placeholder="Digite sua senha"
              fullwidth="true"
              type="password"
              onChange={handlePass}
            />
          </div>
          <div className={css.buttonContainer}>
            <Button
              fullwidth="true"
              onClick={callLoginUsecase}
              theme="secondary"
              size="small"
              className={css.backBtn}
            >
              Entrar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
