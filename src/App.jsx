import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import { Navbar, Nav, NavItem, NavLink, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";

const Header = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg">
          <img alt="logo" src={logo} className="img-responsive"></img>
          <NavLink className="mr-auto" href="/">
            <div>
              <h2 className="h2-style" style={{ color: "white" }}>
                Lucky Universal
              </h2>
            </div>
          </NavLink>

          <Nav navbar>
            <NavItem>
              <NavLink href="/about">
                <Button variant="secondary">About</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/projects">
                <Button variant="secondary">Projects</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/careers">
                <Button variant="secondary">Careers</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/contact">
                <Button variant="secondary">Contact</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about/" component={About}></Route>
        <Route path="/projects/" component={Projects}></Route>
        <Route path="/careers/" component={Careers}></Route>
        <Route path="/contact/" component={Contact}></Route>
      </div>
    </Router>
  );
};

export default class App extends React.Component {
  state = { loading: true };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.wait(2000);
  }
  render() {
    if (this.state.loading) return <Loader />;
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}
