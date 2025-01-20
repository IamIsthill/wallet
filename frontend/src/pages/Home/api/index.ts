import { AxiosResponse, AxiosError } from "axios";
import { api } from "../../../shared/api";
import { Wallet, WalletList } from "../ts";



export async function getWalletList():Promise<Wallet[]|null>{
    const route = '/wallet-account/create/'
    try {
        const res: AxiosResponse<WalletList> = await api.get(route)
        console.log(res.data)
        return res.data
        // return res.data
    } catch (err) {
       if (err instanceof AxiosError && err.response) {
      console.log(err.response.data);
    } else {
      console.error('An unexpected error occurred:', err);
    }
    return null
    }
}