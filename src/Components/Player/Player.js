import React, {Component} from 'react';
import axios from 'axios';
import './player.css';

//Components
// import ButTeam from './../ButTeam/ButTeam';

export default class Player extends Component {
    constructor() {
        super();

        this.state = {
            input: ""
        }
    }

    // ------------------Delete----------------

    deletePlayer = () =>  {
        axios.delete(`./api/ultiteam/${this.props.element.id}`).then(response => {
            console.log(response.data)
            this.props.newPlayerArr(response.data);
        })
    }

    // -----------------Edit-----------------

    editPlayerName = () => {
        axios.put(`./api/ultiteam/${this.props.element.id}`, {
            playerName: this.state.input
        }).then(response => {
            this.props.newPlayerArr(response.data);
        })
    }

    editName = e => {
        this.setState({input: e.target.value});
    }

    editPlayerRating = () => {
        axios.put(`./api/ultiteam/${this.props.element.id}`, {
            playerRating: this.state.input
        }).then(response => {
            this.props.newPlayerArr(response.data);
        })
    }

    editRating = e => {
        this.setState({input: e.target.value});
    }

    editPlayerPosition = () => {
        axios.put(`/api/ultiteam/${this.props.element.id}`, {
            playerPosition: this.state.input
        }).then(response => {
            this.props.newPlayerArr(response.data);
        })
    }

    editPosition = e => {
        this.setState({input: e.target.value});
    }

    render() {
        const {playerName, playerRating, playerPosition, countryImg, playerTeam, playerImg} = this.props.element;


        return(
            <main className="player-info">
                <div className="card-size">
                    <section className="name-img">
                        <img src={playerImg} alt="player img" />
                        <div className="name-rating">
                            <h1>{playerName}</h1>
                            <h2>{playerRating}</h2>
                        </div>
                    </section>
                    <section className="cntry-team">
                        <h1 className="position">{playerPosition}</h1>
                        <img src={countryImg} alt="country img" height="30px" width="40px"/>
                        <img src={playerTeam} alt="player team" height="40px" width="40px"/>
                    </section>
                    <section className="edit">
                        <div className="name-button">
                            <input className="edit-name" placeholder="Edit Player Name" onChange={this.editName} />
                            <button onClick={this.editPlayerName} >Change Name</button>
                        </div>
                        <div className="edit-button">
                            <input className="edit-rating" placeholder="Edit Player Rating" onChange={this.editRating} ></input>
                            <button onClick={this.editPlayerRating} >Change Rating</button>
                        </div>
                        <div className="position-edit">
                            <input className="edit-position" placeholder="Change Position" onChange={this.editPosition} />
                            <button onClick={this.editPlayerPosition}>Change Position</button>
                        </div>
                        <button className="delete" onClick={this.deletePlayer} >Remove Player</button>
                    </section>
                </div>
            </main>
        )
    }
}