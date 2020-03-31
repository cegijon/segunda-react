import React from 'react';
import './Card.css';
import truck from './truck.jpg';
import envio_pago from './dolar.png';



const Card = props => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.info.thumbnail}></img>
            </div>
            <div className="bottom">
                <div className="details">
                    <h5>{props.info.title}</h5>
                    <p>{props.info.price}</p>
                </div>
                <div className="shipping">
                    {props.info.free_shipping &&
                    < img src={truck}></img>
                    }

                </div>
            </div>

        </div >
    )
}

export default Card;


