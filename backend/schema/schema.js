
const graphql = require('graphql');
const _ = require('lodash');

// Load dummy data
const dummyMemes = [
  { memeid: 1, url: 'https://i.imgur.com/bX16KcN.gif' },
  { memeid: 2, url: 'https://i.imgur.com/jzc9UkS.gif' },
  { memeid: 3, url: 'https://i.imgur.com/0it3YM9.jpg' },
];

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLInt,
  GraphQLID
} = graphql;

const MemeType = new GraphQLObjectType({
  name: 'Meme',
  description: "This represents a meme",
  fields: ( ) => ({
    memeid: { type: GraphQLInt },
    url: { type: GraphQLString }
  })
});

// This is the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    meme: {
      type: MemeType,
      args: { memeid: {type: GraphQLInt }},
      resolve(parent, args) {
        // get data from db
        console.log(typeof(args.memeid));
        return _.find(dummyMemes, {memeid: args.memeid });
      }
    },
    allMemes: {
      type: MemeType,
      resolve(parent, args) {
        return dummyMemes;
      }
    }
  }
});

const MeemdeebSchema = new GraphQLSchema({
  query: RootQuery
});

module.exports = MeemdeebSchema;


