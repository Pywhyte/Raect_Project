import React from "react"
import './App.css';
import { Footer } from "./footer/footer.js";
import { Content } from "./header/Content/Content";
import Header from "./header/headers.js";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { ScrollMenu } from "./header/Content/ScrollMenu/ScrollMenu";
import { OurCompany } from "./OurCompany/Company";
import { Conditions } from "./Conditions/Conditions";
import { Contacts } from "./Contacts/Contact";



function App(props) {
  return (
    <Router exact path="/">
      <>
        <Header />
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/Company">
          <OurCompany />
        </Route>
        <Route path="/cars">
          <ScrollMenu cars={props.ListOfCars.cars} />
        </Route>
        <Route path="/Price">
          <Conditions />
        </Route>
        <Route path="/About">
          <Contacts />
        </Route>
        <Footer />
      </>
    </Router>
  )

}
export default App;
