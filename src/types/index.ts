export interface Client {
    id: number;
    idBill: number;
    username: string;
    value: number;
    status?: string;
}

export interface ITemplate {
    children: React.ReactNode;
}