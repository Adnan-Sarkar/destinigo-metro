import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Destination.css";
import { enUS } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import GoogleMap from "../GoogleMap/GoogleMap";

export const Destination = (props) => {
    const [date, setDate] = useState();
    const { id } = useParams();


    return (
        <div className="container destination">
            <div className="row mt-4">
                <div className="col-md-4 col">
                    <div className="form-content">
                        <label htmlFor="pick-from">Pick From</label>
                        <input
                            className="form-control"
                            type="text"
                            name="pick-from"
                            id="pick-from"
                            defaultValue="Dhaka"
                        />
                        <label htmlFor="pick-to">Pick To</label>
                        <input
                            className="form-control"
                            type="text"
                            name="pick-to"
                            id="pick-to"
                            defaultValue="Sylhet"
                        />
                        <div className="calender">
                            <p>Select Date</p>
                            <DatePicker
                                date={date}
                                onDateChange={setDate}
                                locale={enUS}
                            >
                                {({ inputProps, focused }) => (
                                    <input
                                        className={
                                            "input" +
                                            (focused ? " -focused" : "")
                                        }
                                        {...inputProps}
                                    />
                                )}
                            </DatePicker>
                        </div>
                        <div className="search-btn">
                            <Button
                                as={Link}
                                to={`/pricing/${id}`}
                                variant="success"
                                className="d-block"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col right-map">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;