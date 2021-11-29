const app = new App()

function fetchArtists() {
    return fetch("https://anapioficeandfire.com/api/books")
      .then(resp => resp.json())
      .then(json => renderArtists(json))
  }

  function renderArtists(artists) {
    const main = document.querySelector('main')
    artists.forEach(artist => {
      const h2 = document.createElement('h2')
      h2.innerHTML = artist.name
      main.appendChild(h2)
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchArtists()
  })