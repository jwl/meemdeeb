const express = require('express')
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  // TODO: pass in schema property
}));

app.listen(4000, () => {
  console.log('Now listening on port 4000...');
});
