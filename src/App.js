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
          <div className="soccer-gif">
            <h1 className="rage">If you haven't had a moment like this <br/> playing FIFA... you're lying</h1>
            <img className="fifa-gif" src="https://media1.giphy.com/media/3ov9k0VpCnvFyPvSik/source.gif" alt="soccer gif" height="200px" width="375px"/>
            <img className="rage-gif" src="https://steamuserimages-a.akamaihd.net/ugc/952966790412187259/6A387019D51624900B4ABAE6AF709BE04D46ACA4/" alt="rage gif" height="200px" width="375px"/>
          </div>
          <button className="create" onClick={() => this.setState({currentPage: "create"})}>Build Ultimate Team</button>
        </nav>
            {this.state.currentPage === "create" ? <CreatePlayer /> : null}
        <Footer />
      </div>
    )
  }
}