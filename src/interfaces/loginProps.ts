export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  lastName: string;
}

export interface UserProps {
  email: string;
  id: string;
  lastName: string;
  name: string;
}

export const InitialUserProps = {
  email: "",
  id: "",
  lastName: "",
  name: "",
};
