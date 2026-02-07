import { Link } from "react-router-dom"
function errorPage(){
    return <>
       <h1>C'è qualquadra che non cosa</h1>
       <Link to="/Products" >Torna ai prodotti</Link>
       <Link to="/">Torna alla Home</Link>
       </>
}
export default errorPage