import React from "react"
import {useState} from "react";
import'./CustomButton.css';

let movimientos = [];
let tableroData = ['','','','','','','','',];
//<CustomButton/>
function CustomButton({texto,posicion}){
    const [contador, setContador]
                           =useState(0);

    const sumar=()=>{
        setContador(variable=>{
            return variable+1;
        });
    };
//const [movimientos,setMovimientos]=useState([]);
    const [estadoGato,setEstadoGato]=useState('-');

    const funciones =(n)=>{
    cambiarEstado(n);
        agregarMovimiento(n);
        };
        
    const agregarMovimiento=(n )=>{
        Movimientos.push(n);
            console.log(movimientos);
        };
    };
    const cambiarEstado=(posicion)=>{
        setEstadoGato(estado=>{
            const nuevoEstado =estado === '-'? 'x': estado=='x'?'o':'-';
            tableroData[posicion]= nuevoEstado;
            return nuevoEstado;
        });
    };
    return(
        <div onClick={()=>{funciones(posicion)}} className="mi-button">
            {estadoGato}
        </div>
    );


export default CustomButton;