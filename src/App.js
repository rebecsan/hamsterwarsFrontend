import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom'; // Redirect 
import './App.css';
import './components/UploadHamster';
import Home from './components/Home';
import Battle from './components/Battle';
import Matchup from './components/Matchup';
import Stats from './components/Stats';
import UploadHamster from './components/UploadHamster';
// import AllHamsters from './components/AllHamsters';

function App() {

    // const [activeTab, setTab] = useState(1);

    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <header>
                        <Link to="/">
                            <h1>Hamsterwars</h1>
                        </Link>
                        <nav>
                            {/* <NavLink to="/" activeClassName="active"> Home </NavLink> */}
                            <NavLink to="/battle" activeClassName="active"> Battle </NavLink>
                            <NavLink to="/stats" activeClassName="active"> Stats </NavLink>
                            <NavLink to="/upload" activeClassName="active"> Upload hamster </NavLink>
                        </nav>
                    </header>
                </Route>
            </Switch>
            <main>
                <Switch>
                    <Route path='/battle/:id1/:id2'>
                        <Battle/>
                    </Route>
                    <Route path='/battle'>
                        <Battle/>
                    </Route>
                    <Route path='/matchup/:gameid'>
                        <Matchup/>
                    </Route>
                    <Route path='/stats'>
                        <Stats/>
                    </Route>
                    <Route path='/upload'>
                        <UploadHamster/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
