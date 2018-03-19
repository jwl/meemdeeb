type Meme {
  memeid: Id!
  url: String!
  tags: Tag
}

type Tag {
  tagid: Id!
  memes: [Meme]!
}
