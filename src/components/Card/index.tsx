
import { PropsWithChildren } from "react";
interface IProps {
  title: string;
  valor?: string;
  theme: "blue" | "pink" | "yellow";
}

export function Card(props: PropsWithChildren<IProps>) {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <div>
          <h4>{props.children}</h4>
        </div>
      </div>
    </div>
  );
}
