const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const MemeType = new GraphQLObjectType({
  name: 'Meme',
  fields: ( ) => ({
    id: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});
