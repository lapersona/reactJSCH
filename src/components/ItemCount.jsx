import React, { useState } from "react";
import { Button } from "react-bootstrap";
import '../styles/style.blue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function ItemCount({stock, onAdd})  {
  const [count, setCount] = useState(1);

  return (
    <>
      <div style={{ width: "240px" }}>
        <div className="d-flex flex-row justify-content-between">
          <Button
            variant="outline-primary"
            disabled={count < 2}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
          <div>{count}</div>
          <Button
            variant="outline-primary"
            disabled={count >= stock}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" onClick={() => onAdd()}>
          <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </div>
      </div>
    </>
  );
}
export default ItemCount;