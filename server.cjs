// const crypto = require('crypto')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// const hash = crypto.createHash('md5').update('token').digest("hex")

// function isAuthorized(req) {
//     const { headers } = req;
//
//     if(headers && 'token' in headers) {
//         return headers['token'] === hash
//     }
//
//     return false
//
//     return true
// }

server.use(middlewares)

// server.get('/forget-password', (req, res) => {
//     if(!req.query.email) {
//         res.status(401).jsonp({
//             error: "no email address provided"
//         })
//     }
//
//     res.status(200).jsonp({
//         message: `reset password email sent to ${req.query.email}!`
//     })
// })
//
// server.get('/login', (req, res) => {
//     if(req.query.username && req.query.password) {
//         res.status(200).jsonp({
//             token: hash
//         })
//     }
//
//     res.status(401).jsonp({
//         error: "unable to login"
//     })
// })

server.get('/search', (req, res) => {
    if(req.query.name) {

        // TODO: get food image from api via base64
        // return it in JSON


        res.status(200).jsonp({
            image: 'hash'
        })
    }

    res.status(401).jsonp({
        error: "unable to find food item"
    })
})

server.use((req, res, next) => {
    // if (isAuthorized(req)) {
    //     next()
    // } else {
    //     res.status(401).jsonp({
    //         error: "unable to authenticate"
    //     })
    // }

    next()
})

server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})
