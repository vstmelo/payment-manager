import { forwardRef, InputHTMLAttributes } from "react";
import { InputLabel } from "../../assets/styles/components/input";


export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  position?: "left" | "right";
  inputSize?: "medium" | "large";
  fullwidth?: "true" | "false";
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>((props: IProps, ref) => {
  const { name, label, className, inputSize, fullwidth, ...rest } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <InputLabel {...props} ref={ref} />
    </>
  );
});

Input.displayName = "Input";

export default Input;

