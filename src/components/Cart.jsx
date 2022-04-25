import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    return (
        cart.length === 0 ?
                <>
                    <TopBar/>
                    <NavBar/>
                    <Carousel/>    
                    <div className='container-fluid text-center' style={{padding: '2rem 2rem 2rem 2rem'}}>
                    <h2>Carrito vacio</h2>
                    <hr/>
                    <Link to={'/ventas'} className='btn btn-primary'>Ventas</Link>
                    </div>
                    <Footer/>
                </>
                :
                <>
                    <TopBar/>
                    <NavBar/>
                    <Carousel/>  
                    <div className='container-fluid text-center' style={{padding: '2rem 2rem 2rem 2rem'}}>
                    <h2>Resumen de Compra</h2>
                    <hr/>
                    {
                        cart.map((item) => (
                        <div key={item.id}>
                        <h4>{item.marca}</h4>
                        <h5>{item.modelo}</h5>
                        <p>Cantidad: {item.cantidad}</p>
                        <h5>Precio Unitario: U$D {item.precio}</h5>
                        <h4>Precio Total: U$D {item.precio * item.cantidad}</h4>
                        <Button variant='outline-primary' size='sm'
                            onClick={() => removeItem(item.id)}
                        >Eliminar Producto
                        </Button>
                        <hr/>
                        </div>
                        ))
                    }
                    <h3>TOTAL: U$D{cartTotal()}</h3>
                    <hr/>
                    <Link to={'/checkout'}><Button variant='outline-success' size='md'>Finalizar Compra</Button></Link>
                    <Button variant='outline-danger' size='md' onClick={emptyCart}>Vaciar Carrito</Button>
                    </div>
                    <Footer/>
                </>
        )
    }

export default Cart;