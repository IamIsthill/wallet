export interface IHomeProps {}
export interface Wallet {
    balance: number;
    created_at: string;
    currency: string;
    name: string;
    user: number;
}

export interface WalletList extends Array<Wallet> {}