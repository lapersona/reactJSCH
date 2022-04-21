import React from 'react';
import Item from './Item';
import {Spinner} from 'react-bootstrap';


function ItemList(props) {
  return (
    <>
      {props.itemList.length > 0 ? (
        <>
        <h2 className='container text-uppercase lined mb-4'>Avionica</h2><br></br>
        <div className='container text-center'>
          <header className='mb-5 d-inline-block'>
              {props.itemList.map((item) => {
              return <Item key={item.id} item={item} />;
              })}
          </header>
        </div>
        </>
      ) : (
        <div className='container text-center'>
        <Spinner animation='grow' variant='dark' />
        <h6>Cargando, por favor espere..</h6>
        </div>
      )}
    </>
  );
}

export default ItemList;