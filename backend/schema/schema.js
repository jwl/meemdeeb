
const graphql = require('graphql');
const _ = require('lodash');

// Load dummy data
//const Memes = [
  //{ memeid: 1, url: 'https://i.imgur.com/bX16KcN.gif' },
  //{ memeid: 2, url: 'https://i.imgur.com/jzc9UkS.gif' },
  //{ memeid: 3, url: 'https://i.imgur.com/0it3YM9.jpg' },
//];
const Memes = require('../data/memes');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID
} = graphql;

const MemeType = new GraphQLObjectType({
  name: 'Meme',
  description: "This represents a meme",
  fields: ( ) => ({
    memeid: { type: GraphQLID },
    url: { type: GraphQLString }
  })
});

// This is the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    meme: {
      type: MemeType,
      args: { id: {type: GraphQLID }},
      resolve(parent, args) {
        // get data from db
        console.log(typeof(args.id));
        return _.find(Memes, {id: args.id });
      }
    }
  }
});

const MeemdeebSchema = new GraphQLSchema({
  query: RootQuery
});

module.exports = MeemdeebSchema;


