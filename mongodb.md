```
db.createCollection("nome")

db.nomeDaCollection.insert({obj})

db.nomeDaCollection.find()

db.nomeDaCollection.remove({
    "_id": ObjectId("ID_DO_ITEM")
})

db.nomeDaCollection.find({ "nome": "fulano" })
db.nomeDaCollection.find({ "habilidades.nome": "ingles" })
db.nomeDaCollection.find({ "nome": "fulano", "habilidades.nome": "ingles" }) -- AND
db.nomeDaCollection.find({ $or: ["nome":  "fulano", "nome":  "ciclano", "habilidades.nome": "ingles"] }) -- OR
db.nomeDaCollection.find({ "nome": { $in : ["fulano", "ciclano"] } }) -- IN

db.nomeDaCollection.update({
    "curso.nome" : "Sistema de informação"
}, {
    $set : {
        "curso.nome" : "Sistemas de informação"
    }
})

db.nomeDaCollection.update({
    "nome" : "Stanley"
}, {
    $push : {
        "notas" : 100
    }
})

db.nomeDaCollection.find({
    "notas" : {
        $gt : 5
    }
})


db.nomeDaCollection.findOne({
    "notas" : {
        $gt : 5
    }
})

db.nomeDaCollection.find().sort({ "nome": 1 })
db.nomeDaCollection.find().sort({ "nome": -1 }).limit(3)

```
