const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracks: (_parent, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAllTracks()
    },
    track: (_parent, { id }, { dataSources }, _info) => {
      return dataSources.trackAPI.getTrack(id)
    }
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules: ({ id }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getModules(id)
    }
  }
}

module.exports = resolvers