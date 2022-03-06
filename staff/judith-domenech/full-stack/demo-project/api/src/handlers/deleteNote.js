const { deleteNote } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        
        const userId = verifyTokenAndGetUserId(req)
        
        const {params: { noteId } } = req

        deleteNote(userId, noteId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
