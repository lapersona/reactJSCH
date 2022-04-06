import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirDatos } from "./PedirDatos";


function ItemListContainer(props) {

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
        pedirDatos()
            .then(function (res) {
                //console.log(res);
                setItemList(res);
            });
  },[]);

  return (
    <div className="bg-gray-400">
      <br/><br/>
      <h2> {props.greeting} </h2>
      <ItemList itemList={itemList} />
      </div>
    
  );
}

export default ItemListContainer;