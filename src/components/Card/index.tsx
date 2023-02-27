import classNames from "classnames";
import { PropsWithChildren } from "react";
import css from "./styles.module.scss";
interface IProps {
  title: string;
  valor?: string;
  theme: 'blue' | 'pink' | 'yellow';
}

export function Card(props: PropsWithChildren<IProps>) {
  const { theme = '' } = props;
  return (
    <div className={classNames(css.cardRecycleWrapper, {
      [css.blue]: theme === 'blue',
      [css.pink]: theme === 'pink',
      [css.yellow]: theme === 'yellow',
    })}>
      <div className={css.infosCard}>
        <h3>{props.title}</h3>
        <div className={css.descriptionCard}>
          <h4>{props.children}</h4>
        </div>
      </div>
    </div>
  );
}
