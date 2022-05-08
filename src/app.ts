import express from "express";
import DbController from "./db_controller";
const app = express();
const port = 3000;

app.post('/:group/:id', (req, res) => {
  console.log(`post group:${req.params.group} id:${req.params.id}`);
  res.send('Hello World!');
});

app.get('/:group/:id', (req, res) => {
  console.log(`get group:${req.params.group} id:${req.params.id}`);
  res.send('Hello World!');
});

app.delete('/:group/:id', (req, res) => {
  console.log(`delete group:${req.params.group} id:${req.params.id}`);
  res.send('Hello World!');
}); 

app.get('/:group', (req, res) => {
  console.log(`get group:${req.params.group}`);
  res.send('Hello World!');
});

app.get('/', (req, res) => {
  console.log(`get root`);
  res.send('Hello World!');
});

const cont = new DbController();

app.listen(port,  () => {
  return console.log(`Listening on port ${port}`);
});
