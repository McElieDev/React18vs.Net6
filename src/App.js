import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Component
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/pricing" exact component={Pricing}></Route>
        <Route path="/gallery-enquiry" exact component={SignUp}></Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
