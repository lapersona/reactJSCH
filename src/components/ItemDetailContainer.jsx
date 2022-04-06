import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "./PedirDatos";
import ItemDetail from "./ItemDetail"
import { Spinner } from "react-bootstrap";
import TopBar from "./TopBar";
import NavBar from "./NavBar"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="container-fluid bg-gray-400" style={{paddingRight:'0px', paddingLeft:'0px'}}>
            {
                loading
                ? 
                <>
                <TopBar/>
                <NavBar/>
                <div className="container text-center">
                <Spinner animation="grow" variant="dark" />
                <h6>Cargando, por favor espere..</h6>
                </div></>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer