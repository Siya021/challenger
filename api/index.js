const { express, routes } = require('./controller')
const app = express()
const path = require('path')
const port = +process.env.PORT || 3000

//Static
app.use(express.static('./Static'))
app.use(
    express.urlencoded({
        extended: false
    }),
    routes
)
routes.get('^/$|/challenger', (req, res) => {
    res.sendFile(path.resolve(__dirname,
        "../static/HTML/index.html"))
})
  
app.listen(port, () => {
    console.log(`The server is running on port 
    ${port}`);
})