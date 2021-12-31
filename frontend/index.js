const endPoint = "http://127.0.0.1:3000"

document.addEventListener('DOMContentLoaded', function() {
  getArtists()

  const createArtistForm = document.querySelector('#create-artist-form')

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getArtists() {
    fetch(endPoint)
      .then(resp => {
      return resp.json()
    })
    .then(artist => {
      artist.data.forEach(artist => {
        debugger
          let newArtist = new Artist(artist, artist.attributes)
          render(artist)
      })

  })
}

function render(artist) {
  const artistsContainer = document.querySelector('#artists-container')
  const h2 = document.createElement('h2')
  h2.innerText = artist.attributes.name
  artistsContainer.appendChild(h2)

}

function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  
  postFetch(nameInput)
}

function postFetch(name) {
  const bodyData = {name}
  fetch(endPoint, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyData)
  })
  .then(resp => {
    return resp.json()
  })
  .then(artist => {
    console.log(artist);
    const artistData = artist.data
    render(artistData)
  })
}
  
