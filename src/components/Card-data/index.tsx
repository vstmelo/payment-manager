import { Client } from "../../types";

export function CardData( {clients} : { clients: Client }) {
    return (
        <>
            <section >
                <div >
                    {/* <p>Cliente</p> */}
                    <p>
                        {clients.username}
                    </p>
                </div>
                <div >
                    {/* <p>Id</p> */}
                    <p>
                        {clients.id}
                    </p>
                </div>

                <div >
                    {/* <p>Valor</p> */}
                    <p>
                        {clients.value}
                    </p>
                </div>
            </section>

        </>
    )
}