import  express from 'express';

const app = express()
import  bodyParser from 'body-parser';
const urlencodedParser = bodyParser.urlencoded({ extended: false })
import dbBaglan from './db.js';

app.post('/login', urlencodedParser, function (req, res) {
 console.log(req.body)

})
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/todolist',async function (req,res){
   const db = await dbBaglan()
    db.query("SELECT * FROM todo",function (error,results,fields){
        res.send(JSON.stringify(results))
    })
})

app.listen(3000)