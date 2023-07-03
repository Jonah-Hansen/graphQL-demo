const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracks: (_parent, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAllTracks()
    }
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAuthor(authorId)
    }
  }
}

module.exports = resolvers