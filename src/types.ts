

export type TUser = {
    id:string,
    email:string,
    password:string
}

export enum CATEGORYS {
    ACESSORIES = "Acessories",
    CELPHONES = "Celphones",
    KEYBOARDS = "Keyboard"
}

export type TProduct = {
    id:string,
    name:string,
    price:number,
    category:CATEGORYS
}
export type TPurchase = {
    id:string,
    productId:string,
    quantity:number,
    totalPrice:number
}