import React from "react";
import { Link } from "react-router-dom";
import "./SingleTicket.css";

const SingleTicket = (props) => {
    const { name, id, img, price} = props.ticket;
    return (
        <div className="col-lg col-sm-6 col-md-6 col-8 m-2 text-center my-card" >
            <div className="card-body" style={{background: `url(${img})`, backgroundRepeat: 'no-repeat', width: "113%"}}>
                <h1 className="card-title">{name}</h1>
                <Link to={`/destination/${id}`}  className="my-btn">
                    Buy Now
                </Link>
                <h6>{price}</h6>
            </div>
        </div>
    );
};

export default SingleTicket;
