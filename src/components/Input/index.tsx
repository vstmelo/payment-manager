import { forwardRef, InputHTMLAttributes } from "react";


export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  position?: "left" | "right";
  inputSize?: "medium" | "large";
  fullwidth?: "true" | "false";
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>((props: IProps, ref) => {
  const { name, label, className, inputSize, fullwidth, ...rest } = props;

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input {...props} ref={ref} />
    </section>
  );
});

Input.displayName = "Input";

export default Input;

//   display: flex;
//   flex-direction: column;
//   width: fit-content;
//   position: relative;
//   resize: both;
//   & > label {
//     margin-bottom: 4px;
//     font-size: 18px;
//     font-weight: 400;
//     margin-bottom: 10px;
//   }
// }

// .medium,
// .large {
//   border-radius: 12px;
//   outline: none;
//   font-size: 16px;
//   color: $color-dark;
//   font-weight: 500;
//   border: none;
//   box-shadow: 0px 4px 16px rgba(6, 15, 1, 0.3);
//   width: 100%;

//   &:focus {
//     outline-offset: -2px;
//   }

//   &::placeholder {
//     color: $color-gray;
//   }
// }

// .medium {
//   padding: 14px 14px 14px 24px;
// }

// .large {
//   padding: 60px;
// }

// .fullWidth {
//   width: 100%;

//   & > div > input {
//     width: 100%;
//   }
// }
