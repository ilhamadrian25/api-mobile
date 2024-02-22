import express from 'express'
import Database from './config/Database';
import router from './routes';
import bodyParser from 'body-parser';

const app = express()

app.listen(5000, () => {
    console.log('server listening on port 5000');

    connectionDatabase().then((connection) => {})
})


async function connectionDatabase(){
    try {
        await Database.authenticate()
        await Database.sync({ force: true })
        console.log('Database authenticated');
    } catch (error) {
        console.log('error', error)
    }
}
app.use(bodyParser.json())
app.use(express.json())

app.use(router)