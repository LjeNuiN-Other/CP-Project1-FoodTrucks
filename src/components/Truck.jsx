import React from "react";
import '../App.css'


const Truck = (props) => {

    return(
        <div className="card">
        <img className="card-img"src={props.url}/>
        <h3>{props.name}</h3>
        <h4>{props.type}</h4>
        <a href={props.menu}><button>View Menu</button></a>

        </div>
    )
}

export default Truck