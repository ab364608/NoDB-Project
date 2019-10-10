let players = [];
let id = 1;

// ------------------POST-----------------

function createPlayer(req, res) {
    //playerName, rating, countryImg, playerImg
    const {playerName, playerRating, countryImg, playerTeam, playerImg} = req.body;
    players.push({
        playerName,
        playerRating,
        countryImg,
        playerTeam,
        playerImg,
        id
    })
    id++;
    res.status(200).json(players);
}

// --------------------GET-------------------

function allPlayers(req, res) {
    res.status(200).json(players);
}

// -------------------DELETE------------------

function deletePlayer(req, res) {
    let {id} = req.params;
    let index = players.findIndex(player => {
        if(player.id == id) {
            return true;
        }
    })
    players.splice(index, 1);
    res.status(200).json(players);
}

// -------------------PUT------------------

function changePlayer(req, res) {
    let {playerName, playerRating} = req.body;
    let index = players.findIndex(player => 
        player.id == req.params.id)
    
    let player = players[index];


    if(playerName !== undefined) {
        players[index].playerName = playerName;
    }

    if(playerRating !== undefined ) {
        players[index].playerRating = playerRating;
    }
    res.status(200).json(players)
}

module.exports = {
    createPlayer,
    allPlayers,
    deletePlayer,
    changePlayer
}