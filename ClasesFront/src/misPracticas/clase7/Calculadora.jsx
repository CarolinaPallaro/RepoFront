import { useState
 } from "react"
function Calculadora(props) {

    const [contador, setContador] = useState(0);

   
    function sumar(){ setContador(contador + props.numero )}
    function restar(){ setContador(contador - 1)} 
    function reset() { setContador( 0)}
    function igual() {  console.log(contador);}
   

    return( 

        <div>
            <p> {contador} </p>
            <button onClick={restar}> menos</button>
            <button onClick={sumar}> + </button>
            <button onClick={reset}> C </button>
            <button onClick={igual}> = </button>
        </div>
    )
    
}

    export default Calculadora;