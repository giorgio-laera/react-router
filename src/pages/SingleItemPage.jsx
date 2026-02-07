import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"


function singleProduct() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();
    function getDati() {
        const url = `https://fakestoreapi.com/products/${id}`;

        axios.get(url).then(res => {
            setItem(res.data)
            console.log("questo e il singolo item", res.data)
        }
        ).catch(err => {
            console.error("c'è qualquadra che non cosa", err.message)
            navigate("/Products");
        })
    } console.log({ item })
    useEffect(getDati, [id])

    if (item ==''){
       return <>
       <h1>Questo articolo non e disponibile</h1>
       <Link to="/Products">Torna ai prodotti</Link>
       <Link to="/">Torna alla Home</Link>
       </>
    }else{return <>
        <div className='flex-container flex-wrap'>
            
                <div className='card'>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="" />
                    <p> {item.price} $</p>
                    <p>{item.description}</p>
                    <Link to={`/Products/${parseInt(id) -1}`} className="link">Prodotto precedente</Link>
                    <Link to={`/Products/${parseInt(id) +1}`} className="link">Prossimo prodotto</Link>
                </div>
            
        </div>
    </>}
    
}
export default singleProduct