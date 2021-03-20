import React from 'react';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt, faTrain, faSubway, faBus } from '@fortawesome/free-solid-svg-icons'
import fakeData from "../../fakeData/fakeData.json";
import { useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';

const Pricing = () => {
    const { ticketId } = useParams();
    const tickets = fakeData;
    const { name, id } = tickets[ticketId];
    
    return (
        <div className="container pricing">
            <div className="row mt-4">
                <div className="col-md-6 col-lg-4 col">
                    <div className="main-content">
                        <div className="places">
                            <h4 className="place-from">Dhaka</h4>
                            <h4 className="place-to">Sylhet</h4>
                        </div>
                        <div className="ticket-price">
                            <h2>{name}</h2>
                            <div className="single-ticket">
                                <div className="row justify-content-around">
                                    <div className="icon">
                                        {id === 0 ? <FontAwesomeIcon icon={faTicketAlt} /> : null}
                                        {id === 1 ? <FontAwesomeIcon icon={faTrain} /> : null}
                                        {id === 2 ? <FontAwesomeIcon icon={faSubway} /> : null}
                                        {id === 3 ? <FontAwesomeIcon icon={faBus} /> : null}
                                    </div>
                                    <div className="amount"><p>Ticket 1</p></div>
                                    <div className="price"><h5>$67</h5></div>
                                </div>
                            </div>
                            <div className="single-ticket">
                                <div className="row justify-content-around">
                                    <div className="icon">
                                        {id === 0 ? <FontAwesomeIcon icon={faTicketAlt} /> : null}
                                        {id === 1 ? <FontAwesomeIcon icon={faTrain} /> : null}
                                        {id === 2 ? <FontAwesomeIcon icon={faSubway} /> : null}
                                        {id === 3 ? <FontAwesomeIcon icon={faBus} /> : null}
                                    </div>
                                    <div className="amount"><p>Ticket 2</p></div>
                                    <div className="price"><h5>$110</h5></div>
                                </div>
                            </div>
                            <div className="single-ticket">
                                <div className="row justify-content-around">
                                    <div className="icon">
                                        {id === 0 ? <FontAwesomeIcon icon={faTicketAlt} /> : null}
                                        {id === 1 ? <FontAwesomeIcon icon={faTrain} /> : null}
                                        {id === 2 ? <FontAwesomeIcon icon={faSubway} /> : null}
                                        {id === 3 ? <FontAwesomeIcon icon={faBus} /> : null}
                                    </div>
                                    <div className="amount"><p>Ticket 3</p></div>
                                    <div className="price"><h5>$170</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-8 col right-map">
                    <GoogleMap className='google-map'></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Pricing;