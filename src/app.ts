import express from "express";
const exp = express();
const port = 3000;

exp.post('/:group/:id', (req, res) => {
  console.log(`post group:${req.params.group} id:${req.params.id}`);
  res.send('Hello World!');
});

exp.get('/:group/:id', (req, res) => {
  console.log(`get group:${req.params.group} id:${req.params.id}`);
  res.send('Hello World!');
});

exp.delete('/:group/:id', (req, res) => {
  console.log(`delete group:${req.params.group} id:${req.params.id}`);
  res.send('Hello World!');
}); 

exp.get('/:group', (req, res) => {
  console.log(`get group:${req.params.group}`);
  res.send('Hello World!');
});

exp.get('/', (req, res) => {
  console.log(`get root`);
  res.send('Hello World!');
});



exp.listen(port,  () => {
  return console.log(`Listening on port ${port}`);
});
