const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"

  getAllTracks() {
    return this.get('tracks');
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
  getTrack(id) {
    return this.get(`track/${id}`)
  }
  getModules(trackID) {
    return this.get(`track/${trackID}/modules`)
  }
  incrementTrackViews(id) {
    this.patch(`track/${id}/numberOfViews`)
  }
}

module.exports = TrackAPI;