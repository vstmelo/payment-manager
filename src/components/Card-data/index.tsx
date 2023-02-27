import { Client } from "../../types";
import css from "./style.module.scss";

export function CardData( {clients} : { clients: Client }) {
    return (
        <>
            <section className={css.container}>
                <div className={css.cardClients}>
                    {/* <p>Cliente</p> */}
                    <p>
                        {clients.username}
                    </p>
                </div>
                <div className={css.cardClients}>
                    {/* <p>Id</p> */}
                    <p>
                        {clients.id}
                    </p>
                </div>

                <div className={css.cardClients}>
                    {/* <p>Valor</p> */}
                    <p>
                        {clients.value}
                    </p>
                </div>
            </section>

        </>
    )
}