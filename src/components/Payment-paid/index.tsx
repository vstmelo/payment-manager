import { Card } from "../../components/Card";
import { CardData } from "../../components/Card-data";
import Header from "../../components/SideBar";
import css from './style.module.scss';
export function PaymentPaid() {
  const data = [
    {
      id: 1,
      idBill: 135,
      username: "Jose",
      value: 1000,
      date: "2021-10-10",
      status: "Pago"
    },
    {
      id: 2,
      username: "Juca",
      idBill: 135,
      value: 1000,
      date: "2021-10-10",
      status: "Pago"
    },
    {
      id: 2,
      username: "Juca",
      idBill: 135,
      value: 1000,
      date: "2021-10-10",
      status: "Pago"
    },
    {
      id: 2,
      username: "Juca",
      idBill: 135,
      value: 1000,
      date: "2021-10-10",
      status: "Pago"
    },
  ]
  return (
    <div >
      <Card title="Cobranças Pagas " theme="blue" >
        R$: 5k
      </Card>

      <div className={css.containerWrapper}>
        <p>Cliente</p>
        <p>Id da Cob.</p>
        <p>Valor</p>
      </div>
      <div>
        {
          data.map((item) => (
            <CardData clients={item} />
          ))
        }
      </div>

    </div>
  )
}