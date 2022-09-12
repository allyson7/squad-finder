import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "Genshin 1" },
    { id: 2, name: "Genshin 2" },
    { id: 3, name: "Genshin 3" },
    { id: 4, name: "Fall guys 3" },
  ]);
});

app.listen(3333);
