type Query {
  allMemes: [Meme!]!
}

type Meme {
  memeid: ID!
  url: String!
  tags: Tag
}

type Tag {
  tagid: ID!
  memes: [Meme]!
}
