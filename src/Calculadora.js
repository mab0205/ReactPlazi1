import {useState} from 'react'

function Calculadora(elemento1, elemento2){
    const [num1, setNum1]=useState(0);
    const [num2, setNum2]=useState(0);
    const[respuesta, setRes]=useState(0);
    
    let numero1 = elemento1;
    let numero2 = elemento2;
return( 
    < div>
    <h1>Calculadora</h1>
    <button  onClick={() => {setNum1(numero1)}}>{num1}</button>
    <h2>{num1}</h2>
    <br/>
    <button  onClick={() => {setNum2(numero2)}}>{num2}</button>
    <h2>{num2}</h2>
    <br/>
    <button onClick={() => {setRes(num1+num2)}}>Sumar</button>
    <br/>
    <h2>{respuesta}</h2>
   
    </div>

);
}
export default Calculadora