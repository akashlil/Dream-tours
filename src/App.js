import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/ShareitPage/Header/Header";
import Footer from "./pages/ShareitPage/Footer/Footer";
import Addservices from "./pages/Services/AddService/Addservices";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PriveateRoute from "./PriveateRoute/PriveateRoute";
import ServiceBookDetals from "./pages/ServiceBookDetals/ServiceBookDetals";
import MyOrder from "./pages/MyOrder/MyOrder";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PriveateRoute exact path="/addservices">
            <Addservices></Addservices>
          </PriveateRoute>
          <PriveateRoute exact path="/myoder">
            <MyOrder></MyOrder>
          </PriveateRoute>
          <PriveateRoute exact path="/bookservice/:bookserviceid/:bookstitle">
            <ServiceBookDetals></ServiceBookDetals>
          </PriveateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
