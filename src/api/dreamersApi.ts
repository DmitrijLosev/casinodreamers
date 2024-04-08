import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://38.180.121.47:8080/",
    headers: {
        "Content-Type": "application/json"
    }
});

export const dreamersApi = {
    getCasino() {
        return instance.get<CasinoInfoType[], AxiosResponse<CasinoInfoType[]>>("casinsos")
    }
}

export type CasinoReviewInfoType={
    about: string,
    about_image_url: string,
    about_image_webp_url: string,
    software_and_games: string,
    safety_and_security: string,
    mobile_gambling: string,
    final_thoughts: string,
    deposit_and_withdrawal: string,
    customer_support: string,
    bonuses_and_promotions: string
}


export type CasinoInfoType = {
    bonus: string
    casino_review: CasinoReviewInfoType
    casino_url: string
    extra:[string,string,string],
    free_spins:string,
    id:number,
    logo_url:string,
    logo_webp_url:string,
    logo_background:string,
    name:string,
    payment_methods:{url:string,title:string,alt:string}[]
    rating:number
    specifications:{name:string,score:number}[]
}
