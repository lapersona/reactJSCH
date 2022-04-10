import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


function ItemListContainer() {

  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef)
      .then(resp => {
        const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setItemList(items)
      })
  },[categoryId]);

  return (
    <div className="bg-gray-400">
      <br/><br/>
      <ItemList itemList={itemList} />
      </div>
    
  );
}

export default ItemListContainer;