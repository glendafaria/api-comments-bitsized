const router = require('express').Router()
const Comment = require('../model/comment')

//Retorna todos os comentários
router.get('/', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) return res.status(400).send(err)

        res.send(comments)
    })
})

//Registra um novo comentário
router.post('/add', (req, res) => {
    const { description, userName, idHistory } = { ...req.body }

    if ((description == null) || (userName == null) || (idHistory == null)) return res.status(400).send('Envie todos os dados corretamente')

    const comment = new Comment({
        description,
        userName,
        idHistory
    })

    comment.save()
        .catch(err => res.status(400).send(err))
        .then(resul => res.send({ comment: resul._id }))
})

module.exports = router