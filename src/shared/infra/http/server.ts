import express from 'express';

import '../infra/typeorm'

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello, world' })
})

app.listen(3333, () => {
    console.log("App started on port 3333!");
})


