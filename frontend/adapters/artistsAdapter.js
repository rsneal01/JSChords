class ArtistsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/artists"
    }

    getArtists() {
        return fetch(this.baseUrl).then(res => res.json())
      }

    postArtistToApi(configurationObject) {
        return fetch(this.baseUrl, configurationObject)
        .then(response => response.json())
        .catch(error => console.log("Error: " + error))
    }

    
}