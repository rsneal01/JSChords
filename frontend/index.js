document.addEventListener('DOMContentLoaded', function() {
  fetchArtists()

  const createArtistForm = document.querySelector('#create-artist-form')

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))
})

function fetchArtists() {
  const artistsContainer = document.querySelector('#artists-container')
    fetch("http://127.0.0.1:3000")
      .then(resp => {
      return resp.json()
    })
      .then(artists => {
        artists.data.forEach(artist => {
          const h2 = document.createElement('h2')
          h2.innerText = artist.attributes.name
          artistsContainer.appendChild(h2)

        })

  })
}

function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  // const foreignKeyId = parseInt(document.querySelector('#artists').value)
  // query selector for grabbing foreign key
  postFetch(nameInput)
}

function postFetch() {
  
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

  
  

// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
// }

// function renderBooks(books) {
//   const main = document.querySelector('main')
//   books.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = book.name
//     main.appendChild(h2)
//   })
// }

  

//   NEED EVENT LISTENER!!
