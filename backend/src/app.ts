import express from 'express';

const app: express.Application = express();

const PORT = process.env.SERVER_PORT || 3001;

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function() {
  console.log(`Node app listening on port ${PORT}`);
});
