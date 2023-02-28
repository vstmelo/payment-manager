import { CardHeader } from "../../assets/styles/components/card";
import {
  ContainerData,
  ContainerPayment,
} from "../../assets/styles/components/payment";
import { CardData } from "../../components/Card-data";
import Header from "../../components/SideBar";
import { Card } from "../Card";

export function PaymentPaid() {
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
      <Card title="Cobranças Pagas ">R$: 53k</Card>

      <ContainerData>
        <p>Cliente</p>
        <p>Id da Cob.</p>
        <p>Valor</p>
      </ContainerData>

      {data.map((item, i) => (
        <CardData clients={item} key={i} />
      ))}
    </ContainerPayment>
  );
}
