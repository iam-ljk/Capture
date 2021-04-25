import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from './pages/MovieDetail'
//Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
