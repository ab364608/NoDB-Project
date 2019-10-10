const express = require('express')
const {createPlayer, allPlayers, deletePlayer, changePlayer} = require('./playerController')

const app = express();
app.use(express.json());

app.post("/api/ultiteam", createPlayer);
app.get("/api/ultiteam", allPlayers);
app.delete("/api/ultiteam/:id", deletePlayer);
app.put("/api/ultiteam/:id", changePlayer);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})