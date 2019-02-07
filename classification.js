// House price - based on data

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
    let result = []

    return setData.map(item => {

        item.price = 0

        let neighbor = getNeighborById(item.neighbor)
        let rating = neighbor.length > 0 ? neighbor[0].rating : 0

        item.neighbor = neighbor.length > 0 ? neighbor[0].name : null

        item.price += rating * 1

        item.price += item.rooms * 1
        item.price += item.bathrooms * 1
        item.price += item.squareSize * 1

        item.priceDiff = item.priceExpected - item.price

        return item
    })
}

let parameters = [
    {
        rooms: 1,
        bathrooms: 1,
        squareSize: 1000,
        neighbor: 1,
        priceExpected: 5000
    },
    {
        rooms: 2,
        bathrooms: 2,
        squareSize: 2000,
        neighbor: 2,
        priceExpected: 10000
    },
    {
        rooms: 3,
        bathrooms: 3,
        squareSize: 3000,
        neighbor: 3,
        priceExpected: 15000
    }
]

let result = calculateIdealPrice(parameters)

console.log(result)
