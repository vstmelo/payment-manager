import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = (props: PropsWithChildren<IProps>) => {
  const { ...rest } = props;
  return <button {...rest}>{props.children}</button>;
};
