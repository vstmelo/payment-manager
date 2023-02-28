import { PropsWithChildren } from "react";
import { CardHeader } from "../../assets/styles/components/card";
interface IProps {
  title: string;
  valor?: string;
}

export function Card(props: PropsWithChildren<IProps>) {
  return (
    <CardHeader>
      <div>
        <h3>{props.title}</h3>
        <div>
          <h4>{props.children}</h4>
        </div>
      </div>
    </CardHeader>
  );
}
