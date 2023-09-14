import { useState } from "react";
import './inputText.css'



function InputText(props){

    const Digitado = (e) => {
        props.alterado(e.target.value)
    }

    return(
        <div className="input_text">
            <label>{props.label}</label>
            <input 
            value={props.valor} 
            onChange={Digitado} 
            placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputText;