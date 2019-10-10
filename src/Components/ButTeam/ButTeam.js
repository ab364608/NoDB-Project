// import React, {Component} from 'react';
// import axios from 'axios';

// export default class ButTeam extends Component {
//     constructor() {
//         super();

//         this.state = {
//             playerName: "",
//             playerRating: "",
//             countryImg: "",
//             playerImg: ""
//         }
//     }

//     getAllFavPlayers = () => {
//         axios.get('/api.ultiteam').then(response => {
            
//         })
//     }

//     render() {
//         const {playerName, playerRating, countryImg, playerImg} = this.state;

//         return(
//             <div>
//                 <h1>{playerName}</h1>
//                 <img src={playerImg} alt="player img" />
//                 <img src={countryImg} alt="country img" />
//                 <h2>Player Rating: {playerRating}</h2>
//             </div>
//         )
//     }
// }