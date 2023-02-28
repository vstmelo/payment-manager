import { CardHeader } from "../../assets/styles/components/card";
import {
  ContainerData,
  ContainerPayment,
} from "../../assets/styles/components/payment";
import { CardData } from "../../components/Card-data";
import { Card } from "../Card";
import css from "./style.module.scss";

export function PaymentComming() {
  const data = [
    {
      id: 1,
      idBill: 135,
      username: "Jose",
      value: 1000,
      date: "2021-10-10",
      status: "Pago",
    },
    {
      id: 2,
      username: "Juca",
      idBill: 135,
      value: 1000,
      date: "2021-10-10",
      status: "Pago",
    },
    {
      id: 2,
      username: "Juca",
      idBill: 135,
      value: 1000,
      date: "2021-10-10",
      status: "Pago",
    },
    {
      id: 2,
      username: "Juca",
      idBill: 135,
      value: 1000,
      date: "2021-10-10",
      status: "Pago",
    },
  ];
  return (
    <ContainerPayment>
      <Card title="Cobranças Previstas ">R$: 5k</Card>

      <ContainerData>
        <p>Cliente</p>
        <p>Id da Cob.</p>
        <p>Valor</p>
      </ContainerData>

      {data.map((item) => (
        <CardData clients={item} />
      ))}
    </ContainerPayment>
  );
}
