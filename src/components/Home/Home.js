import './Home.css'
import fakeData from "../../fakeData/fakeData.json";
import SingleTicket from "../SingleTicket/SingleTicket";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row cards-row">
                    {fakeData.map((ticket) => (
                        <SingleTicket
                            key={ticket.id}
                            ticket={ticket}
                        ></SingleTicket>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
