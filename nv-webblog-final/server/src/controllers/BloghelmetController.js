const { Bloghelmet } = require('../models')
module.exports = {
    // get all bloghelmet
    async index(req, res) {
        try {
            const blogshelmet = await Bloghelmet.findAll()
            res.send(blogshelmet)
        } catch (err) {
            res.status(500).send({
                error: 'The blogshelmet information was incorrect'
            })
        }
    },
    // create bloghelmet
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const bloghelmet = await Bloghelmet.create(req.body)
            res.send(bloghelmet.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create bloghelmet incorrect'
            })
        }
    },
    // edit bloghelmet, suspend, active
    async put(req, res) {
        try {
            await Bloghelmet.update(req.body, {
                where: {
                    id: req.params.bloghelmetId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update bloghelmet incorrect'
            })
        }
    },
    
// delete bloghelmet
async remove(req, res) {
        try {
            const bloghelmet = await Bloghelmet.findOne({
                where: {
                    id: req.params.bloghelmetId
                }
            })
            if (!bloghelmet) {
                return res.status(403).send({
                    error: 'The bloghelmet information was incorrect'
                })
            }
            await bloghelmet.destroy()
            res.send(bloghelmet)
        } catch (err) {
            res.status(500).send({
                error: 'The bloghelmet information was incorrect'
            })
        }
    },
    // get bloghelmet by id
    async show(req, res) {
        try {
            const bloghelmet = await Bloghelmet.findByPk(req.params.bloghelmetId)
            res.send(bloghelmet)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The blog information was incorrect'
            })
        }
    }
}
