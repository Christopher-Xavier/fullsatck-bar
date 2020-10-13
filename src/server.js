require('dotenv');

const app = require('./app');
const knex = require('knex');
const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

app.set('db', db);

app.listen(port, () => {
  console.log(`server listening on ${PORT}...`);
});
