import express from 'express';
import storeRouter from './router/store.js'
import { connectDB } from './db/database.js';
import {config} from './config.js'
import cors from 'cors'

const app = express();

// app.use(express.json());
app.use(cors())
app.use('/banapresso', storeRouter)

app.use((req, res, next) => {
    res.sendStatus(404);
});

connectDB()
.then(db=>{
    console.log('init!')
    const server=app.listen(config.host.port)
})
.catch(console.error)