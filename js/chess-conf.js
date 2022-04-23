const chessPiecesB = {
    pawn: [{
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 0,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 1,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 2,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 3,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 4,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 5,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 6,
            y: 1,
            color: 'black',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-black'],
            x: 7,
            y: 1,
            color: 'black',
            type: 'pawn'
        }
    ],
    rook: [{
            class: ['fa-solid', 'fa-chess-rook', 'piece', 'rook', 'chess-black'],
            x: 0,
            y: 0,
            color: 'black',
            type: 'rook'
        },
        {
            class: ['fa-solid', 'fa-chess-rook', 'piece', 'rook', 'chess-black'],
            x: 7,
            y: 0,
            color: 'black',
            type: 'rook'
        },
    ],
    knight: [{
            class: ['fa-solid', 'fa-chess-knight', 'piece', 'knight', 'chess-black'],
            x: 1,
            y: 0,
            color: 'black',
            type: 'knight'
        },
        {
            class: ['fa-solid', 'fa-chess-knight', 'piece', 'knight', 'chess-black'],
            x: 6,
            y: 0,
            color: 'black',
            type: 'knight'
        },
    ],
    bishop: [{
            class: ['fa-solid', 'fa-chess-bishop', 'piece', 'bishop', 'chess-black'],
            x: 2,
            y: 0,
            color: 'black',
            type: 'bishop'
        },
        {
            class: ['fa-solid', 'fa-chess-bishop', 'piece', 'bishop', 'chess-black'],
            x: 5,
            y: 0,
            color: 'black',
            type: 'bishop'
        },
    ],
    queen: [{
        class: ['fa-solid', 'fa-chess-queen', 'piece', 'queen', 'chess-black'],
        x: 3,
        y: 0,
        color: 'black',
        type: 'queen'
    }, ],
    king: [{
        class: ['fa-solid', 'fa-chess-king', 'piece', 'king', 'chess-black'],
        x: 4,
        y: 0,
        color: 'black',
        type: 'king'
    }, ]

}

const chessPiecesW = {
    pawn: [{
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 0,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 1,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 2,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 3,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 4,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 5,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 6,
            y: 6,
            color: 'white',
            type: 'pawn'
        },
        {
            class: ['fa-solid', 'fa-chess-pawn', 'piece', 'pawn', 'chess-white'],
            x: 7,
            y: 6,
            color: 'white',
            type: 'pawn'
        }
    ],
    rook: [{
            class: ['fa-solid', 'fa-chess-rook', 'piece', 'rook', 'chess-white'],
            x: 0,
            y: 7,
            color: 'white',
            type: 'rook'
        },
        {
            class: ['fa-solid', 'fa-chess-rook', 'piece', 'rook', 'chess-white'],
            x: 7,
            y: 7,
            color: 'white',
            type: 'rook'
        },
    ],
    knight: [{
            class: ['fa-solid', 'fa-chess-knight', 'piece', 'knight', 'chess-white'],
            x: 1,
            y: 7,
            color: 'white',
            type: 'knight'
        },
        {
            class: ['fa-solid', 'fa-chess-knight', 'piece', 'knight', 'chess-white'],
            x: 6,
            y: 7,
            color: 'white',
            type: 'knight'
        },
    ],
    bishop: [{
            class: ['fa-solid', 'fa-chess-bishop', 'piece', 'bishop', 'chess-white'],
            x: 2,
            y: 7,
            color: 'white',
            type: 'bishop'
        },
        {
            class: ['fa-solid', 'fa-chess-bishop', 'piece', 'bishop', 'chess-white'],
            x: 5,
            y: 7,
            color: 'white',
            type: 'bishop'
        },
    ],
    queen: [{
        class: ['fa-solid', 'fa-chess-queen', 'piece', 'queen', 'chess-white'],
        x: 3,
        y: 7,
        color: 'white',
        type: 'queen'
    }, ],
    king: [{
        class: ['fa-solid', 'fa-chess-king', 'piece', 'king', 'chess-white'],
        x: 4,
        y: 7,
        color: 'white',
        type: 'king'
    }, ]
}