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

  Mutation: {
    // increments a track's numberOfViews property
    incrementTrackViews: async (_parent, { id }, { dataSources }, _info) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id)
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        }
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null
        }
      }
    }
  },

  Track: {
    author: ({ authorId }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules: ({ id }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getModules(id)
    }
  },
}

module.exports = resolvers