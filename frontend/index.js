const endPoint = "http://127.0.0.1:3000"

document.addEventListener('DOMContentLoaded', function() {
  getSongs()

  // const createArtistForm = document.querySelector('#create-artist-form')

  // createArtistForm.addEventListener("submit", (e) => createFormHandler(e))

  const createSongForm = document.querySelector('#create-song-form')

  createSongForm.addEventListener("submit", (e) => createSongFormHandler(e))
})

function getSongs() {
    fetch(endPoint+`/songs`)
      .then(resp => {
      return resp.json()
    })
    .then(song => {
      song.data.forEach(song => {
          let newArtist = new Song(song, song.attributes)
          render(song)
      })

  })
}

function render(song) {
  const artistsContainer = document.querySelector('#artists-container')
  const h2 = document.createElement('h2')
  const h4 = document.createElement('h4')
  h2.innerText = song.attributes.name
  h4.innerText = song.attributes.artist.name
  artistsContainer.appendChild(h2)
  artistsContainer.appendChild(h4)
}

function createSongFormHandler(e) {
  e.preventDefault()
  const songNameInput = document.querySelector('#song-input-name').value
  const artistId = parseInt(document.querySelector('#artists').value)
  songPostFetch(songNameInput, artistId)
}

function songPostFetch(name, artist_id) {
  const bodyData = {name, artist_id}
  fetch(endPoint+`/songs`, {
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
    const h4 = document.createElement('h4')
    h2.innerText = song.data.attributes.name
    // debugger
    h4.innerText = song.data.attributes.artist.name
    artistsContainer.appendChild(h2)
    artistsContainer.appendChild(h4)
    // render(song)
  })
}
  
// function createFormHandler(e) {
//   e.preventDefault()
//   const nameInput = document.querySelector('#input-name').value
  
//   postFetch(nameInput)
// }

// function postFetch(name) {
//   const bodyData = {name}
//   fetch(endPoint+`/artists`, {
//     method: 'POST', 
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(bodyData)
//   })
//   .then(resp => {
//     return resp.json()
//   })
//   .then(artist => {
//     // artist is not being returned as json? no 'data' property
//     console.log(artist);
//     const artistsContainer = document.querySelector('#artists-container')
//     const h2 = document.createElement('h2')
//     h2.innerText = artist.name
//     artistsContainer.appendChild(h2)
//     // const artistData = artist.data
//     // render(artistData)
//   })
// }