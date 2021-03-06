import TopBar from './TopBar';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';
import swal from 'sweetalert2';
import jsPDF from 'jspdf';
import { useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Button } from 'react-bootstrap';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc } from 'firebase/firestore';

const Checkout = () => {

    const print = () => {
        var doc = new jsPDF();
        doc.html(document.body, {
        callback: function (doc) {
                    doc.save();
                },
        x: 10,
        y: 10,
        html2canvas: {
            scale: 0.08,
        }});     
    }

    const {cart, cartTotal, emptyCart} = useContext(CartContext);

    const [ values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        cellphone: '',
    });

    const [ orderId, setOrderId ] = useState('');

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = (e) => {
        e.preventDefault();
        if (values.name === '' || values.email === '' || values.address === '' || values.cellphone === '') {

            swal.fire({
                title: 'Error',
                html: 'Porfavor, complete todos los datos de comprador.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else if ( values.email !== values.emailConfirm) {

            swal.fire({
                title: 'Error',
                html: 'Los correos electrónicos no coinciden.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    
        else {

        const order = {
            items: cart,
            total: cartTotal(),
            buyer: {...values},
            time: Timestamp.fromDate(new Date())
        }
        
        const ordersRef = collection(db, 'orders');
        
        swal.fire({
            icon: 'loading',
            title: 'Enviando pedido',
            html: 'Espere un momento por favor...',
            timer: 4000,
            timerProgressBar: true,
        });

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)
            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                        addDoc(ordersRef, order)
                            .then((doc) => {
                            setOrderId(doc.id);
                            emptyCart();
                        })
                        } else {
                        swal.fire({
                            title: 'Error, no hay stock suficiente del producto ' + item.marca + ' ' + item.modelo,
                            icon: 'error',
                            showDenyButton: false,
                            showCancelButton: false,
                            confirmButtonText: 'Volver a intentar',
                        })
                    }
                })
        })
    }}

    if (orderId) {
        swal.fire({
            title: 'Pedido enviado',
            html: 'Su pedido ha sido enviado con éxito. <br/>Su número de pedido es: ' + orderId,
            icon: 'success',
            confirmButtonText: 'Aceptar',
        });
        return (
            <>
            <TopBar/>
            <NavBar/>
            <Carousel/>  
            <div className='container-fluid text-center bg-gray-400' style={{padding: '2rem 2rem 2rem 2rem'}}>
                <h2>Resumen de Compra</h2>
                <hr/>
                <h3>¡Tu orden fue registrada exitosamente!</h3>
                <h4>Tu numero de orden es la siguiente:</h4>
                <h5>{orderId}</h5>
                <hr/>
                <h4>Datos de comprador:</h4>
                <h6>Nombre: {values.name}</h6>
                <h6>Email: {values.email}</h6>
                <h6>Dirección: {values.address}</h6>
                <h6>Celular: {values.cellphone}</h6>
                <hr/>
                <Link to='/'><Button className='btn btn-primary'>Home</Button></Link>
                <Button className='btn btn-primary m-2' onClick={print}>Imprimir</Button>
            </div>
            <Footer/>
            </>
        )
    }        

    if (cart.length === 0) {
        return <Navigate to='/'/>
    }
    
    return (
        <>
        <TopBar/>
        <NavBar/>
        <Carousel/>  
        <div className='container-fluid text-center bg-gray-400' style={{padding: '2rem 2rem 2rem 2rem'}}>
            <h2>Resumen de Compra</h2>
            <hr/>
            <div className='container-fluid bg-gray-400'>
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
            <div className='d-flex justify-content-center'>
            <form onSubmit={sendOrder}>
                <input
                    className='form-control bg-gray-100'
                    type='name'
                    placeholder='Nombre'
                    size={50}
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <input
                    className='form-control bg-gray-100'
                    type='cellphone'
                    placeholder='Celular'
                    size={50}
                    name='cellphone'
                    value={values.cellphone}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <input
                    className='form-control bg-gray-100'
                    type='address'
                    placeholder='Dirección'
                    size={50}
                    name='address'
                    value={values.address}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <input
                    className='form-control bg-gray-100'
                    type='email'
                    placeholder='Email'
                    size={70}
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <input
                    className='form-control bg-gray-100'
                    type='email'
                    placeholder='Confirmacion de Email'
                    size={70}
                    name='emailConfirm'
                    value={values.emailConfirm}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <br/>
                <Button variant='outline-success' type='submit' size='md'>Enviar</Button>
            </form>
            </div>
        </div>
        <Footer/>
        </>

    )}

export default Checkout;