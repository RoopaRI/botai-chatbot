import React from "react";
import "./Card.css";

export default function Card(props){
    const { text, subText } = props;
    return(
    <div className="card-items">
       <h3>{text}</h3>
       <p>{subText}</p> 
    </div>
       
    );
}