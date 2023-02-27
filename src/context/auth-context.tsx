import { TypeContext } from "../api/schemas/interfaces";
import { createContext } from "react";

export const AuthContext = createContext<TypeContext>({
  user: {
    id: "",
    email: "",
  },
  isAuthenticated: false,
  SignIn: () => {},
  Logout: () => {},
});
