import { Card } from "../../components/Card";
import { CardData } from "../../components/Card-data";
import css from './style.module.scss'

export function PaymentComming(){
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
    return(
      <>
        <Card title="Cobranças Previstas " theme="yellow" >
          R$: 5k
        </Card>
        <div >
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
      </>
    )
}