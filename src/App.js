import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";
import Pricing from "./components/Pricing/Pricing";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <PrivateRoute path="/destination/:id">
                            <Destination></Destination>
                        </PrivateRoute>
                        <Route path="/pricing/:ticketId">
                            <Pricing></Pricing>
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
