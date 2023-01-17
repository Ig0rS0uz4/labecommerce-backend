import express, {Request, Response} from "express"
import cors from "cors"
import {users, products, purchase} from "./database"
import { createUsers, getAllUsers, createProducts, getAllProducts } from "./database"
import { TProduct, TPurchase } from "./types"
import { TUser } from "./types"
import { CATEGORYS } from "./types"
import { request } from "http"


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get(`/ping`, (req:Request, res:Response)=>{
    res.send(`pong`)
})

app.get(`/users`, (req: Request, res:Response)=>{
    res.status(200).send(users)
})

app.get(`/products`, (req:Request, res:Response)=>{
    res.status(200).send(products)
})

app.post(`/products`,(req:Request,res:Response)=>{
    const {id,name,price,category} = req.body as TProduct

    const newProduct = {
        id,
        name, 
        price, 
        category,
    }
    products.push(newProduct)

    res.status(201).send("produto cadastrado com sucesso")
})

app.post(`/users`, (req:Request,res:Response)=>{
    const {id,password,email} = req.body as TUser

    const newUser = {
        id,
        password,
        email,
    }
    users.push(newUser)

    res.status(201).send("usuario cadastrado com sucesso")
})

app.get(`/products/search`, (req:Request, res:Response)=>{
    const q = req.query.q as string

    const result = products.filter((product)=>{
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send(result)
})

app.get(`/products/:id`, (req:Request, res:Response)=>{
    const id = req.params.id

    const result = products.find((product)=>{
        return product.id === id
    })
    res.status(200).send(result)
})

app.get(`/users/purchases/:id`, (req:Request, res:Response)=>{
    const id = req.params.id 

    const result = purchase.find((purchases)=>{
        return purchases.id === id
    })
    res.status(200).send(result)
})

app.delete(`/users/:id`, (req:Request, res:Response)=>{
    const id = req.params.id 

    const userIndex = users.findIndex((user)=>{
        return user.id === id
    })
    if(userIndex>=0){
        users.splice(userIndex,1)
        res.status(200).send("user deletado com sucesso")
    }else{
        res.status(404).send("user não encontrado")
    }
})

app.delete(`/products/:id`, (req:Request, res:Response)=>{
    const id = req.params.id 

    const productIndex = products.findIndex((product)=>{
        return product.id === id
    })
    if(productIndex>=0){
        products.splice(productIndex,1)
        res.status(200).send("produto deletado com sucesso")
    }else{
        res.status(404).send("produto não encontrado")
    }
})

app.put(`/users/:id`, (req:Request, res:Response)=>{
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const updateUser = users.find((user)=>{
        return user.id === id
    })
    if(updateUser){
        updateUser.id = newId || updateUser.id
        updateUser.email = newEmail || updateUser.email
        updateUser.password = newPassword || updateUser.password

        res.status(200).send("user atualizado com sucesso")
    }else{
        res.status(404).send("user não encontrado")
    }
})

app.put(`/products/:id`, (req:Request, res:Response)=>{
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category 

    const updateProduct = products.find((product)=>{
        return product.id === id
    })
    if(updateProduct){
        updateProduct.id = newId || updateProduct.id
        updateProduct.name = newName || updateProduct.name
        updateProduct.price = newPrice || updateProduct.price
        updateProduct.category = newCategory || updateProduct.category

        res.status(200).send("produto atualizado com sucesso")
    }else{
        res.status(404).send("produto não encontrado")
    }
})








// createUsers("muri", "muri@gmail.com", "12345" )
// getAllUsers()
// createProducts(
//     "celphones", 
//     "Galaxy S22", 
//     5000, 
//     CATEGORYS.CELPHONES)
// getAllProducts()