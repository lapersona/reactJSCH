import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Spinner } from 'react-bootstrap';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Carousel from './Carousel';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then(doc => {
                const prod = {id: doc.id, ...doc.data()}
                setItem(prod)
            })
            .finally(() => setLoading(false))
    }, [itemId])

    

    return (
        <div className='container-fluid' style={{paddingRight:'0px', paddingLeft:'0px'}}>
            {
                loading
                ? 
                <>
                <TopBar/>
                <NavBar/>
                <Carousel/>
                <div className='container text-center'>
                <Spinner animation='grow' variant='dark' />
                <h6>Cargando, por favor espere..</h6>
                </div></>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer;