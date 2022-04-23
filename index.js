const WebSocket = require('websocket').server

const http = require('http');

const {
    Server
} = require('ws')

const express = require('express')

// const {
//     start
// } = require('repl');
// const server = http.createServer()

const PORT = process.env.PORT || 3000

// server.listen(PORT, () => {
//     console.log('server started on port ' + PORT);
// })

const INDEX = './index.html'

const server = express()
    .get('/chess', (req, res) => res.sendFile(INDEX, {
        root: __dirname
    }))
    .use(express.static('.'))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));


const wss = new WebSocket({
    'httpServer': server
})

let clients = {}

let games = {}

let colors = {
    '0': 'white',
    '1': 'black'
}

wss.on('request', request => {
    const connection = request.accept(null, request.origin)
    connection.on('open', () => {
        console.log('connection opened');
    })

    connection.on('close', () => {
        console.log('connection closed');
    })

    connection.on('message', message => {
        let result = JSON.parse(message.utf8Data)

        // client want to create a new game
        if (result.method == 'create') {

            const gameID = guid()

            games[gameID] = {
                id: gameID,
                clients: [],
                status: []
            }

            let payLoad = {
                method: 'create',
                game: games[gameID]
            }

            let con = clients[result.clientID].connection
            console.log(payLoad);
            con.send(JSON.stringify(payLoad))

        }

        // a client want to join a game
        if (result.method == 'join') {
            let con = clients[result.clientID].connection
            let clientID = result.clientID
            let gameID = result.gameID
            let game = games[gameID]
            if (!game || !(game.clients.length < 2)) {
                let payLoad = {
                    method: 'join',
                    success: false,
                    message: !game ? 'game not found' : 'game room is full'
                }
                con.send(JSON.stringify(payLoad))
            } else {
                let color = colors[game.clients.length]
                game.clients.push({
                    clientID,
                    color
                })
                //if i want i can tell the other client that someone has joined the game

                let payLoad = {
                    method: 'join',
                    game,
                    success: true,
                    message: 'joined the game successfully'
                }
                con.send(JSON.stringify(payLoad))

                if (game.clients.length == 2) {
                    payLoad = {
                        method: 'start',
                        game
                    }
                    game.clients.forEach(c => clients[c.clientID].connection.send(JSON.stringify(payLoad)))
                }
            }
        }


        if (result.method == 'set') {
            let payLoad = {
                method: 'set',
                location: result.location,
                index: result.index
            }
            let clientID = result.clientID
            let gameID = result.gameID
            let game = games[gameID]
            game.clients.forEach(c => c.clientID != clientID && clients[c.clientID].connection.send(JSON.stringify(payLoad)))
        }
    })

    const clientID = guid()
    clients[clientID] = {
        connection
    }

    let payLoad = {
        method: 'connect',
        clientID,
    }

    console.log(payLoad);

    connection.send(JSON.stringify(payLoad))

})



function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}