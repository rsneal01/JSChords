
function fetchArtists() {
  const main = document.querySelector('main')
    fetch("http://127.0.0.1:3000")
      .then(resp => {
      resp.json()
    })
      .then(artists => {
        artists.data.forEach(artist => {
          const h2 = document.createElement('h2')
          h2.innerText = artist.attributes.name
          main.appendChild(h2)

        })
          // renderArtists(json)
  })
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

  document.addEventListener('DOMContentLoaded', function() {
    fetchArtists()
   
  })

//   NEED EVENT LISTENER!!
