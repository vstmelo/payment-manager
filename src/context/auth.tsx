import { ISign } from "../api/schemas/interfaces";
import { FC, useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { login } from "../api/request/users/login";
import { AuthContext } from "./auth-context";
import { parseCookies, setCookie } from "nookies";
import { api } from "../api";
import { CookiesEnum } from "./cookie";
import jwt_decode from "jwt-decode";

const AuthProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  const isAuthenticated = !!user.id;

  useEffect(() => {
    const { token: token } = parseCookies();

    const handleData = async (token: string) => {
      // Rota para pegar o usuario de acordo com o token
      const {
        data: { id, email },
      } = await api.get("/users/list");
      setUser({ id, email });
    };

    if (token) handleData(token);
  }, [isAuthenticated]);

  async function SignIn({ email, password, navigate }: ISign) {
    try {
      const { data } = await api.post(`/users/login`, {
        email,
        password,
      });

      const { id } = jwt_decode<{
        id: string;
        email: string;
      }>(data.token);

      setCookie(undefined, CookiesEnum.TOKEN, data.token, {
        maxAge: 60 * 60 * 24, // 1 dia
      });

      setUser({ id, email });

      navigate("/home");
    } catch (err) {
      console.log({
        titulo: "Erro",
        texto: "Erro  ao efetuar login !",
      });
    }
  }
  async function Logout(navigate: NavigateFunction) {
    // remover dados de AuthContext
    setUser({
      id: "",
      email: "",
    });

    setCookie(undefined, CookiesEnum.TOKEN, "", {
      maxAge: 60 * 60 * 24, // 1 dia
    });
    navigate("/");
    window.location.reload();
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        SignIn,
        Logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
