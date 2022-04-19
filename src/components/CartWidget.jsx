import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (
        <Link to={'/cart'} className='cart-widget'>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>{cartQuantity() || ''}</span> 
        </Link>
    )
}

export default CartWidget;