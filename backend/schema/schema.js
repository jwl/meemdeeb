const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const MemeType = new GraphQLObjectType({
  name: 'Meme',
  fields: ( ) => ({
    memeid: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    meme: {
      type: MemeType,
      args: { id: {type: GraphQLString }},
      resolve(parent, args) {
        // get data form db
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})


