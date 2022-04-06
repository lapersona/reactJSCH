import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/App.css';

function Item(props) {
    
  return (
    <>
    <div className="item-card text-center bg-gray-400" style={{paddingTop: '2rem'}}>
      <div>
        <h1 className="text-uppercase">{props.item.marca}</h1>
        <h3>{props.item.modelo}</h3>
        <h4>{props.item.desc}</h4>
        <div>
          <img className="img img-fluid" style={{width: "40%", height: "40%"}} src={props.item.img} alt="img" />
        </div><br/>
        <h4>Precio: {props.item.precio} U$D</h4><br/>
        <Link to={`/detail/${props.item.id}`}><Button variant="outline-primary" size="sm">
          Mas Informacion
        </Button></Link>
      </div><br/>
      <section style={{display: "inline-block"}}>
      </section><br/><br/><hr/>
    </div>
    <br/>
    </>
  );
}

export default Item;