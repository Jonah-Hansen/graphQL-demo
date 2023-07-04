const gql = require('graphql-tag')

const typeDefs = gql`
"""Query defines the entry points into retrieving our data
fields in Query are like the possible endpoints"""
type Query {
  tracks: [Track!]!
  "get a specific track by id"
  track(id:ID!): Track
}

type Mutation {
  incrementTrackViews(id:ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
  code:Int!
  success:Boolean!
  message:String!
  track:Track
}

"a group of modules that teaches a certain topic"
type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
  description: String
  numberOfViews: Int
  modules: [Module!]!
}

type Module {
  id: ID!
  title: String!
  length: Int
}

"author of a track"
type Author {
  id: ID!
  name: String!
  photo: String
}
`

module.exports = typeDefs