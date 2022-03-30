import React from "react";
import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/App.css';

function Item(props) {
    function onAdd() {
        console.log("Item agregado.");
      }
  return (
    <>
    <div className="item-card text-center bg-gray-500" style={{paddingTop: '2rem'}}>
      <div>
        <h2>{props.item.marca}</h2><br/>
        <h3>{props.item.modelo}</h3><br/>
        <div>
          <img className="img img-fluid" src={props.item.img} alt="img" />
        </div><br/>
        <h4>Precio: {props.item.precio} U$D</h4>
        <h5>Disponible: {props.item.stock} un.</h5>
        <Link to={`/detail/${props.item.id}`}><Button variant="outline-primary" size="sm">
          Mas Informacion
        </Button></Link>
      </div><br/>
      <section style={{display: "inline-block"}}>
      {<ItemCount stock={props.item.stock} onAdd={onAdd}/>}
      </section><br/><br/>
    </div><br/><br/>
    </>
  );
}

export default Item;