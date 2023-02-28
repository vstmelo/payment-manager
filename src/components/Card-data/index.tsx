import { ContainerData } from "../../assets/styles/components/payment";
import { Client } from "../../types";

export function CardData( {clients} : { clients: Client }) {
    return (
     
            <ContainerData >
                <div >
                  
                    <p>
                        {clients.username}
                    </p>
                </div>
                <div >
                   
                    <p>
                        {clients.id}
                    </p>
                </div>

                <div >
                    <p>
                        {clients.value}
                    </p>
                </div>
            </ContainerData>

    
    )
}