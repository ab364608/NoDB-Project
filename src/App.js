import React, {Component} from 'react';
import './App.css';
import './reset.css';

//Components
import CreatePlayer from "./Components/CreatePlayer/CreatePlayer";
// import ButTeam from "./Components/ButTeam/ButTeam";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: ""
    }
  }

  render() {
    return (
      <div>
        <Header />
        <nav className="player-button">
          <button className="create" onClick={() => this.setState({currentPage: "create"})}>Build Team</button>
          {/* <button onClick={() => this.setState({currentPage: "BUT"})} >My BUT</button> */}
        </nav>
          <div>
            {/* {this.state.currentPage === "create" ? <CreatePlayer /> : this.state.currentPage === "BUT" ? <ButTeam /> : null} */}
            {this.state.currentPage === "create" ? <CreatePlayer /> : null}
          </div>
        <Footer />
      </div>
    )
  }
}