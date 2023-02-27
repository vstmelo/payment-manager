import { getUser } from "../../api/request/users/getuser";
import { Card } from "../../components/Card";
import React from "react";
import css from "./style.module.scss";
import { User } from "../../api/schemas/interfaces";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { PaymentPaid } from "../../components/Payment-paid";
import { PaymentLate } from "../../components/Payment-late";
import { PaymentComming } from "../../components/Payment-comming";
import { Header } from "../../components/Header";
import { Template } from "../../components/Template";
export default function Home(): JSX.Element {

  const [user, setUser] = React.useState<User | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    getUser(id).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
      } else {
        return "Usuario não encontrado !";
      }
    });
  }, []);

  return (
    <>
      <Template />
      <section className={css.container}>
        <div className={css.containerCards}>
          <PaymentPaid />
        </div>
        <div className={css.containerCards2}>
          <PaymentLate />
        </div>
        <div className={css.containerCards3}>
          <PaymentComming />
        </div>
      </section>
    </>

  );
}
