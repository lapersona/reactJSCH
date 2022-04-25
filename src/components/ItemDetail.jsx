import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Button, Carousel } from 'react-bootstrap';
import '../styles/style.blue.css';
import ItemCount from './ItemCount';
import NavBar from './NavBar';
import Footer from './Footer';
import TopBar from './TopBar';

const ItemDetail = ({id, marca, modelo, img, img2, precio, stock, detail, desc}) => {

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
        <section className='py-5 dark-overlay-xl ventas-back'>
            <br/><br/><br/><br/><br/>
        </section>
        <br/><br/>
        <h2 className='container text-uppercase lined mb-4'>{marca} {modelo}</h2><br></br>
        <div className='container text-center'>
            <br/>
            <Carousel variant='dark'>
            <Carousel.Item>
              <img
                className="img img-fluid text-center"
                style={{width: '50%', height: '50%'}}
                src={img}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img img-fluid"
                style={{width: '50%', height: '50%'}}
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
            <p>{desc}</p>
            <p>{detail}</p>
            <h4>Precio: {precio} U$D</h4><br/>
            <section style={{display: 'inline-block'}}>
            <>
                {
                    !isInCart(id) ?
                    <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={agregarAlCarrito}
            /> : 
            <Link to='/cart'><Button className='btn btn-primary'>Terminar Compra</Button></Link>
            }
            </>
            </section>
            <hr/>
            <Button className='btn btn-primary' onClick={handleNavigate}>Volver</Button>
        </div><br/>
        <Footer/>
        </>
    )
}

export default ItemDetail