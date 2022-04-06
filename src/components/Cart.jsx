import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import TopBar from "./TopBar"
import NavBar from "./NavBar"
import Carousel from "./Carousel"

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (<>
                    <TopBar/>
                    <NavBar/>
                    <Carousel/>    
                    <div className="container text-center my-5">
                    <h2>Tu carrito está vacío</h2>
                    <hr/>
                    <h5>Vuelve al sector Ventas para comprar.</h5>
                    <Link to={"/"} className="btn btn-primary">Home</Link>
                </div>
            </>
        )
    }

    return (
        <>
        <TopBar/>
        <NavBar/>
        <Carousel/>  
        <div className="container my-5 text-center">
            <h2>Tu Carrito</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.marca}</h4>
                        <h5>{item.modelo}</h5>
                        <p>Cantidad: {item.cantidad}</p>
                        <h5>Precio Unitario: U$D{item.precio}</h5>
                        <h4>Precio Total: U$D{item.precio * item.cantidad}</h4>
                        <Button variant="outline-primary" size="sm"
                            onClick={() => removeItem(item.id)}
                        >Eliminar Producto
                        </Button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: ${cartTotal()}</h3>
            <hr/>
            <Button variant="outline-success" size="md" onClick={emptyCart}>Finalizar Compra</Button>
            <Button variant="outline-danger" size="md" onClick={emptyCart}>Vaciar Carrito</Button>
        </div>
        </>
    )
}

export default Cart;