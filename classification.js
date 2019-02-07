// House price - based on data

let price = 0

// neighbor rated by rating
let neighborList = [
    {
        id: 1,
        name: 'Springfield',
        rating: 4
    },
    {
        id: 2,
        name: 'Endor',
        rating: 2
    },
    {
        id: 3,
        name: 'Liverpool',
        rating: 5
    },
    {
        id: 4,
        name: 'Mordor',
        rating: 1
    }
]

function getNeighborById(id) {
    return neighborList.filter(item => item.id == id)
}

function calculateIdealPrice(setData) {

    // let the magic flow
    let neighbor = getNeighborById(2)
    return neighbor.length > 0 ? neighbor[0].name : null
}

let parameters = {
    rooms: 0,
    bathrooms: 0,
    squareSize: 0,
    neighbor: 0
}

let result = calculateIdealPrice(parameters)

console.log(result)
