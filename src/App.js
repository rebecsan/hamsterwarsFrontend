import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom'; 


// Todo:
// Redirect
// i router för ökad användarupplevelse


import './App.css';
import './components/UploadHamster';
import Home from './components/Home';
import Battle from './components/Battle';
import Matchup from './components/Matchup';
import Splash from './components/Splash';
import Stats from './components/Stats';
import UploadHamster from './components/UploadHamster';
import AllHamsters from './components/AllHamsters';

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/splash"> </Route>
                <Route path='/'>
                    <header>
                        <Link to="/" className="heading">
                            <h1>Hamsterwars</h1>
                        </Link>
                        <nav>
                            {/* <NavLink to="/" activeClassName="active"> Home </NavLink> */}
                            <NavLink to="/battle" className="navLink" activeClassName="active"> Battle </NavLink>
                            <NavLink to="/stats" className="navLink" activeClassName="active"> Stats </NavLink>
                            <NavLink to="/upload" className="navLink" activeClassName="active"> Upload hamster </NavLink>
                        </nav>
                    </header>
                </Route>
            </Switch>
            <main>
                <Switch>
                    <Route path="/splash"> <Splash /> </Route>
                    <Route path='/battle/:id1/:id2'>
                        <Battle/>
                    </Route>
                    <Route path='/battle'>
                        <Battle/>
                    </Route>
                    <Route path='/matchup/:id/:id2'>
                        <Matchup/>
                    </Route>
                    <Route path='/stats'>
                        <Stats/>
                    </Route>
                    <Route path='/upload'>
                        <UploadHamster/>
                    </Route>
                    <Route path='/allhamsters'>
                        <AllHamsters/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </main>
            <footer>
                <Switch>
                    <Route path="/splash"> </Route>
                    <Route path='/'>
                        <p>Hamsterwars brought to you by rebecsan</p>
                    </Route>
                </Switch>
            </footer>
        </Router>
    );
}

export default App;
