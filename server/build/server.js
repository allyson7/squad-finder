import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: "Genshin 1" },
        { id: 1, name: "Genshin 2" },
        { id: 1, name: "Genshin 3" },
    ]);
});
app.listen(3333);
