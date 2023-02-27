import { getUser } from "../../api/request/users/getuser";
import React from "react";
import { User } from "../../api/schemas/interfaces";
import { useParams } from "react-router-dom";
import { PaymentPaid } from "../../components/Payment-paid";
import { PaymentLate } from "../../components/Payment-late";
import { PaymentComming } from "../../components/Payment-comming";
import { ContainerCards } from "../../assets/styles/pages/Home";
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
      <ContainerCards>
        <PaymentPaid />
        <PaymentLate />
        <PaymentComming />
      </ContainerCards>
    </>
  );
}
