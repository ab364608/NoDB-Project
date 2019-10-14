import React, {Component} from 'react';
import axios from 'axios';
import './createPlayer.css'

//Components
import Player from "./../Player/Player";

export default class CreatePlayer extends Component {
    constructor() {
        super();

        this.state = {
            playerName: "",
            playerRating: "",
            playerPosition: "",
            countryImg: "",
            playerTeam: "",
            playerImg: "",
            allPlayers: []
        }
    }

    // --------------------Create--------------------

    handlePlayerName = e => {
        this.setState({playerName: e.target.value});
    }

    handleRating = e => {
        this.setState({playerRating: e.target.value});
    }

    handlePosition = e => {
        this.setState({playerPosition: e.target.value});
    }

    handleCountry = e => {
        this.setState({countryImg: e.target.value});
    }

    handleTeam = e => {
        this.setState({playerTeam: e.target.value});
    }

    handlePlayerImg = e => {
        this.setState({playerImg: e.target.value});
    }

    handleCreatePlayer = e => {
        const {playerName, playerRating, playerPosition, countryImg, playerTeam, playerImg} = this.state;
        e.preventDefault();
        axios.post("/api/ultiteam", {
            playerName,
            playerRating,
            playerPosition,
            countryImg,
            playerTeam,
            playerImg
        }).then(response => {
            this.setState({allPlayers: response.data})
        }).catch(error => {
            console.log(error);
        })
    }

    // --------------------------Read--------------------------

    getAllPlayers = () => {
        axios.get("/api/ultiteam").then(response => {
            this.setState({allPlayers: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount(){
        this.getAllPlayers();
    }

    // ---------------------------Delete-------------------------

    
    newPlayerArr = arr => {
        this.setState({allPlayers: arr})
    }
    


    render() {
        let createdPlayers = this.state.allPlayers.map((element, index) => {
            return (
                <Player element={element} key={index} newPlayerArr={this.newPlayerArr} />
            )
        })
        return(
            <div>
                <form className="input-fields">
                    <div className="input">
                        <input placeholder="Choose a Player Name" onChange={this.handlePlayerName} />
                        <input placeholder="Rating between 50-99" onChange={this.handleRating} />
                        <input placeholder="Choose the Player's Position" onChange={this.handlePosition} />
                        <input placeholder="Country url: futhead.com" onChange={this.handleCountry} />
                        <input placeholder="Team url: futhead.com" onChange={this.handleTeam} />
                        <input placeholder="Player url: futhead.com" onChange={this.handlePlayerImg} />
                    </div>
                    <button className="create-player" onClick={this.handleCreatePlayer} >Create Player</button>
                </form>
                <section className="overflow">
                    {createdPlayers}
                </section>
            </div>
        )
    }
}