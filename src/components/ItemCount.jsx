import { Button } from 'react-bootstrap';
import '../styles/style.blue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ItemCount({max = 5, onAdd, cantidad, setCantidad})  {

    const handleAdd = () => {
      cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRemove = () => {
      cantidad > 0 && setCantidad(cantidad - 1)
    }

  return (
    <>
      <div style={{ width: '240px' }}>
        <div className='d-flex flex-row justify-content-between'>
          <Button
            className='btn btn-primary'
            disabled={cantidad === 0}
            onClick={handleRemove}
          >
            -
          </Button>
          <span>{cantidad}</span>
          <Button
            className='btn btn-primary'
            disabled={cantidad === max}
            onClick={handleAdd}
          >
            +
          </Button>
        </div>
        <div className='d-flex justify-content-center'>
          <Button 
            className='btn btn-primary'
            disabled={cantidad === 0} 
            onClick={() => onAdd()}>
          <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </div>
      </div>
    </>
  );
}
export default ItemCount;