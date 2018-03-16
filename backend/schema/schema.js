const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var memes = [
  { memeid: 1, url: 'https://i.imgur.com/bX16KcN.gif' },
  { memeid: 2, url: 'https://i.imgur.com/jzc9UkS.gif' },
  { memeid: 3, url: 'https://i.imgur.com/0it3YM9.jpg' },
];

const MemeType = new GraphQLObjectType({
  name: 'Meme',
  fields: ( ) => ({
    memeid: { type: GraphQLInt },
    url: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    meme: {
      type: MemeType,
      args: { id: {type: GraphQLInt }},
      resolve(parent, args) {
        // get data form db
        return _.find(books, {id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});


