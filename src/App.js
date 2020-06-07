import React, { Suspense } from 'react';
import './App.scss';
import MenuTop from './components/MenuTop';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieInfor from './components/MovieInfor';
// import Home from './pages/Home';

const Home = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
      <Router>
          <MenuTop/>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/movie-infor" component={MovieInfor}></Route>
          </Switch>
          <Footer/>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
