import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/ShareitPage/Header/Header";
import Footer from "./pages/ShareitPage/Footer/Footer";
import Addservices from "./pages/Services/AddService/Addservices";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/addservices">
          <Addservices></Addservices>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
