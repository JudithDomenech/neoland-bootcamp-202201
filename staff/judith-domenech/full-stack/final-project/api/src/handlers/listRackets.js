const { listRackets } = require('logic')

module.exports = (req, res) => {
    try {

        listRackets(racketId)
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}