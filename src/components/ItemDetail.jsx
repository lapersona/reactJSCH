import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext";
import Memo from "./Memo";
import '../styles/style.blue.css';
import ItemCount from "./ItemCount"
import NavBar from "./NavBar"
import Footer from "./Footer"
import TopBar from "./TopBar"
import Carousel from "./Carousel"

const ItemDetail = ({id, marca, modelo, img, precio, stock, detail, desc}) => {

    const { addItem, isInCart } = useContext(CartContext)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(0)

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

        cantidad > 0 && addItem(itemToAdd)
    }

    return (
        <>
        <TopBar/>
        <NavBar/>
        <Carousel/>
        <div className="container text-center">
            <br/>
            <h1>{marca}</h1>
            <h2>{modelo}</h2>
            <img src={img} alt={modelo} className="img-fluid"/>
            <p>{desc}</p>
            <p>{detail}</p>
            <h4>Precio: {precio} U$D</h4><br/>
            <section style={{display: "inline-block"}}>
            <Memo/>
            <>
                {
                    !isInCart(id) ?
                    <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={agregarAlCarrito}
            />
            : <Link to="/cart" className="btn btn-success d-block my-3">Terminar Compra</Link>
            }
            </>
            </section>
            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
        </div><br/>
        <Footer/>
        </>
    )
}

export default ItemDetail