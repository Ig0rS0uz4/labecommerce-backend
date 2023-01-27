import { TUser } from "./types"
import { TProduct } from "./types"
import { TPurchase } from "./types"
import { CATEGORYS } from "./types"

export const users:TUser[] = [{
    id: "igor",
    email: "igor@gmail.com",
    password: "lalala"
},
{
    id: "lais",
    email: "lais@gmail.com",
    password: "lululu"
}]

export function createUsers(id: string, email:string, password:string):void{
    const newUser: TUser ={
        id:id,
        email:email,
        password:password
    }
    users.push(newUser)
    console.log("cadastro realizado com sucesso!")
}

export function getAllUsers(){
   console.log(users)
}

export const products:TProduct[] = [{
    id: "p001",
    name: "motorola",
    price: 1000,
    category: CATEGORYS.CELPHONES 
},
{
    id: "p002",
    name: "razer",
    price: 300,
    category: CATEGORYS.KEYBOARDS
}]

export function createProducts(id: string, name:string, price:number, category:string):void{
    const newProduct: TProduct ={
        id:id,
        name: name,
        price:price,
        category:CATEGORYS.CELPHONES,
    }
    products.push(newProduct)
    console.log("produto criado com sucesso!")
}

export function getAllProducts (){
    console.log(products)
}

export const purchase:TPurchase[] = [{
    id: "igor",
    productId: "cel001",
    quantity: 1,
    totalPrice: 1000,
},
{
    id: "lais",
    productId: "ace001",
    quantity: 1,
    totalPrice: 120,
}]
