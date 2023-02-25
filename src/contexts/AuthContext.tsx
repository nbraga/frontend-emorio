import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

import {
  InitialUserProps,
  LoginProps,
  RegisterProps,
  UserProps,
} from "../interfaces/loginProps";

import api from "../services/api";

interface AuthContextProps {
  signIn: ({ email, password }: LoginProps) => Promise<any>;
  signOut: () => void;
  registerUser: ({
    email,
    password,
    name,
    lastName,
  }: RegisterProps) => Promise<any>;
  user: UserProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<UserProps>(InitialUserProps);
  const [cookies, setCookie, removeCookie] = useCookies(["@emorio.token"]);

  /* Deslogar */
  const signOut = () => {
    toast.success(
      "Para acessar todos os recursos disponíveis, faça o login em nosso site. Até Mais!"
    );
    removeCookie("@emorio.token", { path: "/" });
    setUser(InitialUserProps);
  };

  /* Logar */
  const signIn = async ({ email, password }: LoginProps): Promise<any> => {
    const response = await api.post("/login", {
      email,
      password,
    });

    if (response.status === 200) {
      setCookie("@emorio.token", response.data.token, { path: "/" });
      setUser(response.data.user);
    }

    return response;
  };

  const registerUser = async ({
    email,
    password,
    name,
    lastName,
  }: RegisterProps): Promise<any> => {
    const response = await api.post("/register", {
      email,
      password,
      name,
      lastName,
    });

    return response;
  };

  useEffect(() => {
    const token = cookies["@emorio.token"];

    if (token) {
      api
        .get("/getUser", { headers: { authorization: `Bearer ${token}` } })
        .then((response) => setUser(response.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        registerUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
