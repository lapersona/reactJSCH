import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";

const Checkout = () => {

    const {cart, cartTotal} = useContext(CartContext);

    const [ values, setValues] = useState({
        name: "",
        email: "",
        address: "",
        cellphone: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = (e) => {
        e.preventDefault();
        const order = {
            items: cart,
            total: cartTotal(),
            buyer: {...values},
        }
        console.log(order);
    }
    return (
        <>
        <TopBar/>
        <NavBar/>
        <Carousel/>  
        <div className="container-fluid text-center bg-gray-400" style={{padding: "2rem 2rem 2rem 2rem"}}>
            <h2>Resumen de Compra</h2>
            <hr/>
            <div className="container-fluid bg-gray-400">
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h6>{item.marca}</h6>
                        <h6>{item.modelo}</h6>
                        <h6>Cantidad: {item.cantidad}</h6>
                        <h5>Total: U$D {item.precio * item.cantidad}</h5>
                    </div>
                ))
            }
            </div>
            <hr/>
            <h2>Datos de Comprador</h2>
            <div className="d-flex justify-content-center">
            <form onSubmit={sendOrder}>
                <input
                    className="form-control bg-gray-100"
                    type='name'
                    placeholder="Nombre"
                    size={50}
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <input
                    className="form-control bg-gray-100"
                    type='cellphone'
                    placeholder="Celular"
                    size={50}
                    name='cellphone'
                    value={values.cellphone}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <input
                    className="form-control bg-gray-100"
                    type='address'
                    placeholder="Dirección"
                    size={50}
                    name='address'
                    value={values.address}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <input
                    className="form-control bg-gray-100"
                    type='email'
                    placeholder="Email"
                    size={70}
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <br/>
                <Button variant="outline-success" type="submit" size="md">Enviar</Button>
            </form>
            </div>
        </div>
        <Footer/>
        </>

    )}

export default Checkout;