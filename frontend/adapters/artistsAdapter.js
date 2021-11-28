class ArtistsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/artists"
    }

    getArtists() {
        return fetch(this.baseUrl).then(res => res.json())
      }

      
}