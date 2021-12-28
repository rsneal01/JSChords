const endPoint = "http://127.0.0.1:3000"

document.addEventListener('DOMContentLoaded', function() {
  getArtists()

  const createArtistForm = document.querySelector('#create-artist-form')

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getArtists() {
  // const artistsContainer = document.querySelector('#artists-container')
    fetch(endPoint)
      .then(resp => {
      return resp.json()
    })
    .then(artist => {
      artist.data.forEach(artist => {
          // check how data is nested
          render(artist)
      })
      // .then(artists => {
      //   artists.data.forEach(artist => {
      //     const h2 = document.createElement('h2')
      //     h2.innerText = artist.attributes.name
      //     artistsContainer.appendChild(h2)

      //   })

  })
}

function render(artist) {
  const artistMarkup =
  <div data-id=${artist.id}>
  <h3>${artist.data.name}</h3>
  <button data-id=${artist.data.id}>edit</button>
  </div>
  <br></br>;

  document.querySelector('#artist-container').innerHTML += artistMarkup  
}

function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  // const foreignKeyId = parseInt(document.querySelector('#artists').value)
  // query selector for grabbing foreign key
  postFetch(nameInput)
}

function postFetch(name) {
  console.log(name);
}
  
  function renderArtists(artists) {
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.innerText = artists
    main.appendChild(h2)
    artists.forEach(artist => {
      const h2 = document.createElement('h2')
      h2.innerText = artist.name
      main.appendChild(h2)
    })
  }

  

  

//   NEED EVENT LISTENER!!
