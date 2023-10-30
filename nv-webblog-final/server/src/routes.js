const UserController = require('./controllers/UserController.js');
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')
const BloghelmetController = require('./controllers/BloghelmetController');

const Bloghelmet = require('./models/Bloghelmet.js');

let multer = require("multer")

// upload section
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/uploads");
    },
    filename: function (req, file, callback) {
        // callback(null, file.fieldname + '-' + Date.now());
        console.log(file);
        callback(null, file.originalname);
    }
})
let upload = multer({ storage: storage }).array("userPhoto", 10)


module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', isAuthenController, UserController.index)
    app.post('/login', UserAuthenController.login)
    app.post('/bloghelmet',BloghelmetController.create)
    app.put('/bloghelmet/:bloghelmetId', BloghelmetController.put)
    app.delete('/bloghelmet/:bloghelmetId', BloghelmetController.remove)
    app.get('/bloghelmet/:bloghelmetId', BloghelmetController.show)
    app.get('/blogshelmet', BloghelmetController.index)

    app.post('/upload', function (req, res) {
        upload(req, res, function (err) {
            // isUserAuthenicated,
            if (err) {
                return res.end("Error uploading file.")
            }
            res.end("File is uploaded")
        })
    })
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs');
            console.log(req.body.filename)
            fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
                (err) => {
                    if (err) throw err;
                    res.send("Delete sucessful")
                    // console.log('successfully deleted material file');
                });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete file the material'
            })
        }

    })
}