import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/style.blue.css';
import ItemCount from "./ItemCount"
import NavBar from "./NavBar"
import Footer from "./Footer"
import TopBar from "./TopBar"

const ItemDetail = ({id, marca, modelo, img, precio, stock, detail, desc}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = () => {
        const itemToAdd = {
            id,
            marca,
            modelo,
            desc,
            detail,
            precio,
            img,
            cantidad
        }

        console.log(itemToAdd)
    }

    return (
        <>
        <TopBar/>
        <NavBar/>
        <div className="container text-center">
            <br/>
            <h1>{marca}</h1>
            <h2>{modelo}</h2>
            <img src={img} alt={modelo}/>
            <p>{desc}</p>
            <p>{detail}</p>
            <h4>Precio: ${precio} U$D</h4><br/>
            <section style={{display: "inline-block"}}>
            <ItemCount
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={agregarAlCarrito}
            /></section>
            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
        </div><br/>
        <Footer/>
        </>
    )
}

export default ItemDetail