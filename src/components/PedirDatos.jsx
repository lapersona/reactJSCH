import { stock } from "./Stock"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    })
}