const endPoint = "http://127.0.0.1:3000"

document.addEventListener('DOMContentLoaded', function() {
  getArtists()

  const createArtistForm = document.querySelector('#create-artist-form')

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))

  const createSongForm = document.querySelector('#create-song-form')

  createSongForm.addEventListener("submit", (e) => createSongFormHandler(e))
})

function getArtists() {
    fetch(endPoint+`/artists`)
      .then(resp => {
      return resp.json()
    })
    .then(artist => {
      artist.data.forEach(artist => {
        
          let newArtist = new Artist(artist, artist.attributes)
          render(artist)
      })

  })
}

function render(artist) {

  const artistsContainer = document.querySelector('#artists-container')
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  h2.innerText = artist.attributes.name
  h3.innerText = artist.relationships.songs.data
  artistsContainer.appendChild(h2)
  artistsContainer.appendChild(h3)
}

function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  
  postFetch(nameInput)
}



function postFetch(name) {
  const bodyData = {name}
  fetch(endPoint+`/artists`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyData)
  })
  .then(resp => {
    return resp.json()
  })
  .then(artist => {
    // artist is not being returned as json? no 'data' property
    console.log(artist);
    const artistsContainer = document.querySelector('#artists-container')
    const h2 = document.createElement('h2')
    h2.innerText = artist.name
    artistsContainer.appendChild(h2)
    // const artistData = artist.data
    // render(artistData)
  })
}

function createSongFormHandler(e) {
  e.preventDefault()
  const songNameInput = document.querySelector('#song-input-name').value
  const artistId = parseInt(document.querySelector('#artists').value)
  songPostFetch(songNameInput, artistId)
}

function songPostFetch(name) {
  const bodyData = {name}
  fetch(endPoint+`/artists`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyData)
  })
  .then(resp => {
    return resp.json()
  })
  .then(song => {
    // artist is not being returned as json? no 'data' property
    console.log(song);
    const artistsContainer = document.querySelector('#artists-container')
    const h2 = document.createElement('h2')
    h2.innerText = song.name
    artistsContainer.appendChild(h2)
    // const artistData = artist.data
    // render(artistData)
  })
}
  
